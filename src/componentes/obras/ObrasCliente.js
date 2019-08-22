import React, { useEffect, useState, Fragment } from 'react'
import clienteAxios from '../../config/axios'
import ResumenObra from './ResumenObra'

function ObrasCliente(props) {

    const {id} = props.match.params

    const [obras, guardarObras] = useState([]);

    useEffect(() => {
        //Consultamos la API
        const consultarAPI = async () => {
            //Obtenemos los pedidos
            const resultado = await clienteAxios.get(`/obras/cliente/${id}`);
            guardarObras(resultado.data);
        }

        consultarAPI();

    }, [id]);

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

export default ObrasCliente;