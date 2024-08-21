import React from "react"
import { createContext } from "react";


export const Main =createContext();

 const ContextProvider=(props)=>{

    const phone="+91 8547224"
const name ="coder"
    return (

<Main.Provider value={{phone , name}}>

{props.children}

</Main.Provider>

    );
}

export default ContextProvider




//!

//it is used to handle the global values