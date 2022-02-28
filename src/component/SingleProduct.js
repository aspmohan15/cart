import React, { useContext } from 'react';
import { CartContext } from '../context/Context';
import './components.css'

const SingleProduct = ({ prod }) => {

    // console.log(prod);

    // to Acces the context Using UseCOntext

    const { cart, setCart } = useContext(CartContext)
    return (
        <div>
            <div>
                <img src={prod.image}></img>
                <div className='productDescription'>
                    <span>{prod.name} </span>
                    <span> ${prod.price.substring(0, 3)}</span>
                </div>

                {/* Chech Wether Product Already In Cart */}
                {
                    cart.includes(prod) ? (
                        <button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}>Remove From Cart </button>
                    ) : (
                        <button onClick={() => { setCart([...cart, prod]) }}>Add to Cart</button>
                    )
                }
            </div>
        </div >
    );
};

export default SingleProduct;
