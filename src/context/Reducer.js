import { createContext, useState } from 'react'

export const cartReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }

}



export const Context = createContext();


export const CartContext = ({ children }) => {

    const [state, setstate] = useState();
    
    return <Context.Provider value={{}}>{children}</Context.Provider>
}