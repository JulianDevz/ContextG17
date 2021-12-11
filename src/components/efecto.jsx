import React,{useState, useEffect} from 'react'

const Efecto = () => {

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState(0)
    const [user, setUser] = useState("")

    const cambiar = (e) => {
        e.preventDefault()
        setNombre("Julian")
        setEdad(22)
    }

    useEffect (() => {
        console.log("se actualizo el componente")
    }, []);

    useEffect (() => {
        console.log("se actualizo el Estado Nombre")
        localStorage.setItem("nombre", nombre)
        setUser (localStorage.getItem("nombre"))
    }, [nombre]);

    useEffect (() => {
        console.log("se actualizo el Estado Edad")
        localStorage.setItem("edad", edad)
    }, [edad]);

    return (
        <div>
            <p>User: {user}</p>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
            <button onClick={cambiar}>Cambiar de Estado</button>
        </div>
    )
}

export default Efecto
