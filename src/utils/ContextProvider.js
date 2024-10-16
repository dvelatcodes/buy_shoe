import { useContext, createContext, useState } from "react";

const stateContext = createContext();

const initialState = {
    light : "light",
    showCart : false,
    current : 0
}

export const ContextProvider = ({children}) => {
    const [attributes, setAttributes] = useState(initialState);

    const showCart = ()=>{
        setAttributes({...attributes, showCart : false? true :  false})
    }

    const changeMode = ()=>{
        setAttributes({...attributes, light : attributes.light === "light"? "dark" : "light"});
    }

    const bigSwitch = (i)=>{
        setAttributes({...attributes, current: i});
      }

    return <stateContext.Provider value={{attributes, setAttributes, changeMode, showCart, bigSwitch}}>
        {children}
    </stateContext.Provider>
}

export const useStateContext  = ()=>useContext(stateContext)

