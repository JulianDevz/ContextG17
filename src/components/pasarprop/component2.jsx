import React,{useState} from 'react'

const Component2 = (props) => {
    const [user, setUser] = useState(props.param)
    return (
        <div>
            <p>Componente 2</p>
            <p>{user.nombre}</p>
            <p>{user.apellido}</p>
            <p>{user.edad}</p>
        </div>
    )
}

export default Component2
