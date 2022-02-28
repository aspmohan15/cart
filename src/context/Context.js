import { createContext, useState } from 'react'

export const CartContext = createContext()



export const ContextProvider = ({ children }) => {

    // children to acces the data to it all children
    const [cart, setCart] = useState([]);

    return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}

