import React, {useState} from 'react'
import Component2 from './component2'

const Component1 = () => {

    const objetoUsuario={
        "nombre":"carlos",
        "apellido": "pachon",
        "edad": 22
    }

    const [user, setUser] = useState(objetoUsuario)

    return (
        <div>
            <Component2 param={user}></Component2>
        </div>
    )
}

export default Component1
