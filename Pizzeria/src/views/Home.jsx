import { useContext, useState } from "react"
import { PizzaContext } from "../context/PizzaContext";
import './Home.css';
import Detalle from "../components/Detalle";



function Home() {
    const {posts, setPosts}=useContext(PizzaContext)
    const {ventas, setVentas}=useContext(PizzaContext)
    const {carrito, setCarrito}=useContext(PizzaContext)

    function handleAddCarritoOnClick(valor){
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
    <>               
        <div className="pizza-container">
            {posts.map(({ id, img, ingredients, name, price}, i) => ( 
                <div className="producto">
                    <div>
                        <img className="imagen-pizza" src={img} alt="producto descontinuado"/>
                        <h3 className="nombre-pizza">{name}</h3>
                    </div>

                    <div className="ingredientes">
                        <h5>Ingredientes</h5>
                        <ul>
                            <li key="0">{ingredients[0]}</li>
                            <li key="1">{ingredients[1]}</li>
                            <li key="2">{ingredients[2]}</li>
                            <li key="3">{ingredients[3]}</li>
                        </ul>
                    </div>
                    <div className="precio-pizza">
                        <p>Precio ${price}</p>
                    </div>
                    <div className="pie-pizza">
                            <Detalle/>
                            <button className='add-carrito-btn' onClick={() => handleAddCarritoOnClick({id})}>Añadir</button>
                    </div>
                </div> 
            ))}                     
        </div> 
    </>

    )
}
export default Home;
