import React,{useEffect,useState} from 'react'

const Guardarnav = () => {

    /**objetos de productos */
    const producto1={
        "id":1,
        "nomprod":"leche",
        "precio":4000,
        "categoria":"Bebidas"
    }

    const producto2={
        "id":2,
        "nomprod":"Coca Cola 1.5",
        "precio":3800,
        "categoria":"Bebidas"
    }
    
    /**array de productos */
    const pedidos=[producto1,producto2]

    /**
     * estados del componentes 
     */
    const [user,setUser]=useState("")
    const [ped,setPed]=useState([])

    /**funcion mostrar Usuario */
    const mostrarUsuario=(e)=>{
        e.preventDefault()
        if(localStorage.getItem("pedidos")==null){
            localStorage.setItem("pedidos",JSON.stringify(pedidos))
        }
        setPed(localStorage.getItem("pedidos"))    
    }

    useEffect(() => {
        if(localStorage.getItem("user")==null){
            localStorage.setItem("user","adming17")
            setUser(localStorage.getItem("user"))
        }
             
    }, [])

    useEffect(()=>{
        console.log(ped)
    },[ped])

    return (
        <div>     

            <form onSubmit={mostrarUsuario}>
                <button type="submit">Mostrar datos del Navegador</button>
            </form> 

            <button onClick={(e)=>{
                                    localStorage.removeItem("pedidos");
                                    setPed([])
                                   }}>Remover Pedido</button>   
            <button onClick={(e)=>{
                                   localStorage.removeItem("user")
                                   setUser("")
                                  }
                                
                                   }>Remover User</button>   
            <button onClick={(e)=>{localStorage.clear()}}>Remover el Contenido del Almacen</button>  
        </div>
    )
}

export default Guardarnav