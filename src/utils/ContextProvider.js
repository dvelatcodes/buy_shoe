import { useContext, createContext, useState } from "react";

const stateContext = createContext();

const initialState = {
    light : true
}

export const ContextProvider = ({children}) => {
    const [mode, setMode] = useState(initialState);
    const changeMode = ()=>{
        setMode({...initialState, light : true? false : true});
    }

    return <stateContext.Provider value={{mode, setMode, changeMode}}>
        {children}
    </stateContext.Provider>
}

export const useStateContext  = ()=>useContext(stateContext)

