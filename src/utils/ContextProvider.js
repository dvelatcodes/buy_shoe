import { useContext, createContext, useState } from "react";

const stateContext = createContext();

const initialState = {
    light: "light",
    showCart: false,
    showHam: false,
    current: 0,
    items: 1,
    cart: {}
}

export const ContextProvider = ({ children }) => {
    const [attributes, setAttributes] = useState(initialState);

    const showCart = () => {
        setAttributes({ ...attributes, showCart: false ? true : false })
    }

    const changeHam = () => {
        setAttributes({...attributes, showHam: attributes.showHam === false? true : false});
    };

    const changeMode = () => {
        setAttributes({ ...attributes, light: attributes.light === "light" ? "dark" : "light" });
    }

    const bigSwitch = (i) => {
        setAttributes({ ...attributes, current: i });
    }

    const addSwitch = () => {
        if (attributes.current === 3) {
            setAttributes({ ...attributes, current: 0 });
        }
        else {
            setAttributes({ ...attributes, current: attributes.current + 1 });
        }
    }

    const minusSwitch = () => {
        if (attributes.current === 0) {
            setAttributes({ ...attributes, current: 3 });
        }
        else {
            setAttributes({ ...attributes, current: attributes.current - 1 });
        }
    }

    const itemUp = () => {
        setAttributes({ ...attributes, items: attributes.items + 1 });
    }

    const itemDown = () => {
        if (attributes.items === 1) {
            setAttributes({ ...attributes, items: 1 });
        }
        else { setAttributes({ ...attributes, items: attributes.items - 1 }); }
    }

    const deleteCart = () => {
        setAttributes({ ...attributes, cart: {} })
    }

    return <stateContext.Provider value={{ attributes, setAttributes, changeMode, showCart, bigSwitch, addSwitch, minusSwitch, itemUp, itemDown, deleteCart, changeHam }}>
        {children}
    </stateContext.Provider>
}

export const useStateContext = () => useContext(stateContext)

