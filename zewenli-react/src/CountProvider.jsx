import { createContext, useState } from "react";

//use createContext api for creating context
export const CountContext = createContext();
export const CountProvider = (props) => {
    const [countState, setCountState] = useState(0);

    return (
        //providing state
        <CountContext.Provider value = {[countState, setCountState]}>
            {props.children}
        </CountContext.Provider>
    );
};