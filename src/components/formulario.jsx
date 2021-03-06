import React, {useState, useEffect} from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [estudio, setEstudio] = useState("Sin Estudios")
    
    const mostrar=(e)=>{
        e.preventDefault()
        setNombre("Julian")
    }

    const selEstudio = (e) =>{
        e.preventDefault()
        setEstudio(e.target.value)
        console.log(e.target.value)
    }
    useEffect(()=>{
        console.log("El nombre cambio de estado")
    },[nombre])

    return(
        <div>
            <form onSubmit={mostrar}>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <select value={estudio} onChange={selEstudio}>
                    <option value="Sin Estudio">Sin Estudio</option>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Tecnico">Tecnico</option>
                    <option value="Tecnologo">Tecnologo</option>
                    <option value="Profesional">Profesional</option>
                    <option value="Postgrado">Postgrado</option>
                </select>
                <p>Nombre: {nombre}</p>
                <p>Estudios: {estudio}</p>
                <button type="submit">Mostrar</button>
            </form>
        </div>
    )
}

export default Formulario

