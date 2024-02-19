import './AddCarrito.css'
const AddCarrito= ({props}) => {


    return (
        <div>
                <button className='add-carrito-btn' onClick={ () => handlebuttonOnClick()}>Añadir</button>
        </div>
    );
}

export default AddCarrito;