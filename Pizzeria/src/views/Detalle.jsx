import { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import './Detalle.css'
import { PizzaContext } from '../context/PizzaContext';
function Detalle() {
    const {indice} = useParams()
    let registro = []

    const {posts, setPosts}=useContext(PizzaContext)

    useEffect(() => {
        seleccionarPizza(indice)
    }, [])

    const seleccionarPizza= (indice)=>{

        const unArray = posts.forEach((element,i) => {
            if(indice == i){
                registro[0]= element.cantidad
                registro[1]= element.desc
                registro[2]= element.id
                registro[3]= element.img
                registro[4]= element.ingredients
                registro[5]= element.price

            }
        }) 
    }

    const [pizza, setPizza]= useState([registro])
console.log("valor de pizza")
console.log(pizza)
console.log(pizza[0][0])

    function handlebtnAñadir(valor){

    }

    return (
        <div className='detallePizza'>
            <>
   {/*                  {pizza.map({ cantidad, desc, id, img, ingredients, name, price }, i) (
                                <p>
                                    {pizza.name}
                                </p>
                    )} */}
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
                                </ul> *}
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

