import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import logo from "/vite.svg";
import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';


function BasicExample() {
    const {carrito}=useContext(PizzaContext)
    const setActiveClass = ({ isActive }) => (isActive ? "textoMenu active" : "textoMenu inactive");

    return (
        <nav>
            <div>
                <img className="imagen-logo" src={logo} alt="imagen no se puede encontrar" />
                <h3>Valor carrito US${carrito} </h3>
                <div className="links">
                    <NavLink className={setActiveClass} to='/Home'>Home                </NavLink>
                    <NavLink className={setActiveClass} to='/Carrito'>Carro de Compras</NavLink>
                    <NavLink className={setActiveClass} to='/Contacto'>Contacto</NavLink>
                </div>
                <h1>PIZZERÍA MAMMA MIA</h1>
            </div>
        </nav>
    );
}

export default BasicExample;