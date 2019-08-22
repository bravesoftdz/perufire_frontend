import React , {useState} from 'react'

const PageContext = React.createContext([{ }, () => {}])

const PageProvider = props =>  {

    // Definir el state inicial
    const [auth, guardarAuth,credenciales] = useState({
        credenciales: '',
        token: '',
        auth: false
    });

    return (
        <PageContext.Provider value={[auth,guardarAuth,credenciales]}>
            {props.children}
        </PageContext.Provider>
     )
}

export { PageContext, PageProvider}