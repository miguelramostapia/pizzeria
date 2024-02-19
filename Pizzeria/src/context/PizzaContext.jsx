import { createContext, useEffect, useState } from "react";
import data from './pizzas.json'

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  
    const [posts, setPosts] = useState([]);
    const [ventas, setVentas]=useState([]);
    const [carrito, setCarrito] = useState(0);

     useEffect(() => {
        setPosts(data)
        setVentas(data)
        setCarrito(0)
        console.log(`valor de carrito ${carrito}`)
    }, [])

/*    const cargaDatos = async () => {
        try {
            const apiUrl = "https://private-anon-060f088639-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank"
            console.log("apiUrl")
            console.log(apiUrl)
            const results = await fetch(apiUrl);
            const  data  = await results.json();
            setPosts(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }} */
    return (
        <PizzaContext.Provider value={{ posts, setPosts, ventas, setVentas, carrito, setCarrito }} >
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider;
