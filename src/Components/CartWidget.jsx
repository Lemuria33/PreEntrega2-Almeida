import "./css/cart.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function CartWidget(){
    return(
    <i className="bi bi-cart" style={{color:"white"}}><span className="unidadCarrito">5</span></i>
    );
}
export default CartWidget;