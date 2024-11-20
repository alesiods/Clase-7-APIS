import { useState, useEffect } from "react"



const JsonPlaceHolder = () => {

    const [usuarios, setUsuarios] = useState([])

    //opcion 1: Usamos fetch

    useEffect(()=>{
 /*       
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(res => setUsuarios(res))
        .catch(error => console.log(error)) */
    

    //opcion 2: Podemos usar Async Await:
    /* Si qioerp trabajar con async y awayt en lugar de then y catch tengo que realizar lo siguiente:
    
    Puedo usar try y catch que me permite manejar errores. Si algo dentro del try falla, el codigo continua con el catch.
    */
        
    try {
        const pedirUsuarios = async () => {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await respuesta.json()
            setUsuarios(data)
        }

        pedirUsuarios();
    } catch(error) {
        console.log(error)
    }

    },[]) 



    



  return (
    <div>
        <h2>Usuarios de JSONPlaceHolder</h2>
        <ul>
            {
                usuarios.map(usuario => {
                    return(
                        <li key={usuario.id}>
                            {usuario.name}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default JsonPlaceHolder