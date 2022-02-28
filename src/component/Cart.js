import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/Context';
import SingleProduct from './SingleProduct';



function Cart() {

    //get the Contxed data from Context using useContext
    const { cart } = useContext(CartContext);
    // console.log(cart);
    const [total, setTotal] = useState()

    useEffect(() => {
        // to calculate the Total value
        setTotal(cart.reduce((acc, cur) => acc + Number(cur.price), 0))
    }, [cart])

    return (
        <div>
            <h1>My cart</h1>
            <br></br>
            <h1>Total Rs: {total}</h1>
            <div>
                {cart.map((prod) => (
                    <SingleProduct prod={prod} key={prod.id} />))}
            </div>
        </div>
    );
}

export default Cart;
