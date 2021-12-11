import React,{useContext} from 'react'
import { UserContext } from '../../contexto/contexto'

const Comp3 = () => {

    const user = UserContext(contextValue);

    return (
        <div>
            <p>user.nombre</p>
            <p>user.apellido</p>
        </div>
    )
}

export default Comp3
