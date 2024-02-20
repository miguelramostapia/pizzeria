import {Route, Routes } from "react-router-dom";
import PizzaProvider from "./context/PizzaContext";
import Navbar from "./components/Navbar";
import './App.css'



import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Contacto from "./views/Contacto";
import Detalle from "./views/Detalle"



const App = () => {

  return (
    <div>
      <PizzaProvider>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Detalle/:indice" element={<Detalle />}/>
            <Route path="/Carrito" element={<Carrito />}/>
            <Route path="/Contacto" element={<Contacto />}/>
          </Routes>
      </PizzaProvider>
    </div>
  );
};
export default App;

/*             <Route path="/Pokemon" element={<Pokemon />}/>
            <Route path="/Pokemon/:valor" element={<InfoPokemon />}/> */

