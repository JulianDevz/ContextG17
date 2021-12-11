import React from 'react'
import Comp2 from './comp2'
import { UserContext } from '../../contexto/contexto'

const Comp1 = () => {

    const objetoUsuario={
        "nombre":"Julian",
        "apellido": "Pachon",
        "edad": 22
    }

    const [user, setUser] = useState(objetoUsuario)

    return (
        <div>
            <UserContext.Provider value={user}>
                <Comp2></Comp2>
            </UserContext.Provider>
        </div>
    )
}

export default Comp1
