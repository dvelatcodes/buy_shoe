import { useContext, createContext, useState } from "react";

const stateContext = createContext();

const initialState = {
    light : "light",
    showCart : false
}

export const ContextProvider = ({children}) => {
    const [attributes, setAttributes] = useState(initialState);

    const showCart = ()=>{
        setAttributes({...attributes, showCart : false? true :  false})
    }

    const changeMode = ()=>{
        setAttributes({...attributes, light : attributes.light === "light"? "dark" : "light"});
    }

    return <stateContext.Provider value={{attributes, setAttributes, changeMode, showCart}}>
        {children}
    </stateContext.Provider>
}

export const useStateContext  = ()=>useContext(stateContext)

