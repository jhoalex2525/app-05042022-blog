import React, {useState,useEffect} from "react";
import Articulos from "./articulos";
import "./estilos-contenedor.css"

function Contenedor(){    
    // Variable para los post
    const [post,setPost] = useState([]);
    // Función asincrona para obtener los datos
    const obtenerDatos = async() => {
        let url = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=4444a39de8af49db9bec298ba6210413'
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos.articles);
        setPost(datos.articles);
        return datos.articles;
    }

    const [startPost, setStartPost] = useState();
    const [endPost, setEndPost] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const limite = 6;
    
    // Variable para botones
    const [prevBoton, setPrevBoton] = useState(true);
    const [nextBoton, setNextBoton] = useState(false);

    // Realizar consultas
    useEffect(()=>{
        obtenerDatos();
        setStartPost((pageNumber-1)*limite);
        setEndPost(pageNumber*limite);
        console.log(startPost);
        console.log(endPost);        
    },[pageNumber,startPost,endPost])
    
    // Funcion para adelantar paginas
    const Next = () =>{
        if(pageNumber === Math.floor((obtenerDatos.length + limite -1)/limite)){            
            setNextBoton(true);
        }
        else{
            setPageNumber(pageNumber+1);
            setPrevBoton(false);
        }
    }

    // Funcion para regresar paginas
    const Prev = () =>{
        if(pageNumber === 1){
            setPrevBoton(true);
        }
        else{
            setNextBoton(false);
            setPageNumber(pageNumber-1);
        }
    }

    return (
        // <!-- First Photo Grid-->
        <>
            <div class="w3-row-padding">
                {
                    post.slice(startPost,endPost).map((art, index) => {
                        return <Articulos
                            key={index}
                            titulo={art.title}
                            fecha={art.publishedAt}
                            descripcion={art.description}
                            imagen={art.urlToImage}
                        ></Articulos>
                    })
                }
            </div>
            <div className="paginacion">
                <button disabled={prevBoton} onClick={Prev} className="atras">Cargar menos</button>
                <span className="numero-paginas">{pageNumber}</span>
                <button disabled={nextBoton} onClick={Next} className="adelante">Cargar mas</button>
            </div>
        </>
    );
}

export default Contenedor;