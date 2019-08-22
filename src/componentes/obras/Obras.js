import React, { useEffect, useState,useContext, Fragment } from 'react'
import clienteAxios from '../../config/axios'
import ResumenObra from './ResumenObra'

/* Importar Context */
import { PageContext } from '../../context/PageContext'

function Obras(props) {

    // Utilizar valores del context
    const [auth, guardarAuth] = useContext(PageContext);

    const [obras, guardarObras] = useState([]);

    useEffect(() => {
        if (auth.token !== '') {
            let mounted = true;
            const consultarAPI = async () => {
                try {
                    const clientesConsulta = await clienteAxios.get('/obras', {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                    if (mounted) {
                        guardarObras(clientesConsulta.data);
                    }
                } catch (error) {
                    // Error 
                    if (error.response.status = 500) {
                        props.history.push('/login')
                    }
                }
            }
            consultarAPI();
            return () => {
                mounted = false;
            }
        } else {
            props.history.push('/login');
        }
    }, [obras])

    // Si el state esta en false
    if(!auth.auth) {
        props.history.push('/login');
    }

    return (
        <Fragment>
                {obras.map(obra => (
                    <ResumenObra 
                    key={obra._id}
                    obra={obra}
                    />
                ))}
        </Fragment>
    )
}

export default Obras;