import { useContext, useEffect, useState } from "react"
import { PizzaContext } from "../context/PizzaContext";
import { Table } from "react-bootstrap";
import './Carrito.css';




function Carrito() {
    const {posts, setPosts}=useContext(PizzaContext)
    const {ventas, setVentas}=useContext(PizzaContext)
    const {carrito, setCarrito}=useContext(PizzaContext)
    useEffect(()=>{
        const data = ventas.filter(element=>{
            element.cantidad != 0
        })
    }, [])

    function sacarCarrito(valor){
        console.log(`estoy tratando de eliminar ${valor}`)
        const cartaArray = ventas
        console.log(cartaArray)
        let nuevoMonto = 0
        const unArray = cartaArray.forEach((element,i) => {
            if(element.id ==valor&&element.cantidad>0){
                element.cantidad=element.cantidad-1;
                nuevoMonto = element.price
            }
        });
        setCarrito(carrito - nuevoMonto)
        setVentas(cartaArray)
    }

    function agregarCarrito(valor){
        const cartaArray = ventas
        let nuevoMonto = 0
        const unArray = cartaArray.forEach((element,i) => {
            if(element.id ==valor){
                element.cantidad=element.cantidad+1;
                nuevoMonto = element.price
            }
        });
        setCarrito(carrito + nuevoMonto)
        setVentas(cartaArray)
    }

    return ( 
    <>               
        <div className="carrito-compras">
            <Table
                striped
                bordered
                hover
                variant="dark"
                className="container mt-5 text-center"
            >
                <thead>
                    <tr>
                    <th>Item</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Sub Total</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map(({ id, name, cantidad, price }, i) => (
                            <tr
                                key={i}
                                className="align-middle"
                            >
                                <td>{i}
                                </td>
                                <td>{name}</td>
                                <td>{cantidad}</td>
                                <td>{price}</td>
                                <td>{cantidad*price}</td>
                                <td>
                                    <button className="sacarCarrito" onClick={() => sacarCarrito(id)}>Eliminar (-)</button>
                                    <button className="agregarCarrito" onClick={() => agregarCarrito(id)}>Agregar (+)</button>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </Table>  
            <button className="ir-a-pagar" >Ir a pagar</button>                
        </div> 
    </>

    )
}
export default Carrito;
