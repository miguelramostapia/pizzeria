import { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import './Detalle.css'
import { useCol } from 'react-bootstrap/esm/Col';
import { PizzaContext } from '../context/PizzaContext';
function Detalle() {
    const {indice} = useParams()
    const {pizza, setPizza}= useState({
        id:"",
        nombre:"",
        descripcion:"",
        ingrediente:[],
        precio:0})
    const {posts, setPosts}=useContext(PizzaContext)
    const {ventas, setVentas}=useContext(PizzaContext)
    const {carrito, setCarrito}=useContext(PizzaContext)
    
    useEffect(() => {
        seleccionaPizza(indice)
    }, [])

    const seleccionaPizza= (indice)=>{
        const cartaPizzas = posts
        let nombrePizza =""
        const unArray = cartaPizzas.forEach((element,i) => {
            if(indice == i){

/*                 setPizza({...pizza, id:element.id})
                setPizza({...pizza, nombre:element.name})
                setPizza({...pizza, descripcion:element.desc})
                setPizza({...pizza, ingredientes:element.ingredients})
                setPizza({...pizza, precio:element.price}) */
            }
            console.log(`el nombre del producto es ${nombrePizza}`)
        })
/*         const {id, nombre, descripcion, ingredientes, precio} = pizza;  */   
    }


    function handlebtnAñadir(valor){
        const cartaArray = posts
        let nuevoMonto = 0
        const unArray = cartaArray.forEach((element,i) => {
            if(element.id ==valor.id){
                element.cantidad=element.cantidad+1;
                nuevoMonto = element.price
            }
        });
        setCarrito(carrito + nuevoMonto)
        setVentas(cartaArray)
    }

    return (
        <div className='detallePizza'>
            <>
            {posts.forEach((element,i) => {
                console.log(`dentro del dom ${indice}`)
                if(indice == i){
                    <>
                    {console.log(`dentro del dom ${indice}`)}
                    {console.log(element.id)}
                    <p>{element.id}</p>
                    </>
                }
            })}           
            </>

        </div>
    );
}

export default Detalle;

/*

                        <div className='detalleimagenpizza'>
                            <div>
                            <img className="imagen-pizza" src="https://picsum.photos/200" alt="producto descontinuado"/>
                            </div>
                            <h3 className="nombre-pizza">Nombre Pizza</h3>
                        </div>
                        <div className='detallepizzadescripcion'>
                            <p className='detalle-nombre-pizza'>Nombre{element.name}</p>
                            <p className='detalle-descripcion-pizza'>Descripcion</p>
                            <div className="ingredientes">
                                <h5>Ingredientes</h5>
        {/*                         <ul>
                                    <li key="0">{ingredientes[0]}</li>
                                    <li key="1">{ingredientes[1]}</li>
                                    <li key="2">{ingredientes[2]}</li>
                                    <li key="3">{ingredientes[3]}</li>
                                </ul> *}/*
                                </div>
                                <p className='ingredientes'>Ingredientes</p>
                                <div className='detalle-precio-btn'>
                                    <div>
                                        <p className='detalle-precio-pizza'>Nombre US$</p>
                                    </div>
                                    <div>
                                        <button className='detalle-pizza-btn' onClick={()=>(handlebtnAñadir(indice))}>Añadir</button>
                                    </div>                    
                                </div>
                            </div>
    


*/