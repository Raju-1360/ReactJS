import { useState } from "react"



 export const Hooks =()=>{

    const [count, setCount]=useState(0)

    return(

        <>
        <h1>hooks rules</h1>

        <button>{count}</button>
        <p onClick={()=>{setCount(count+1)}}>Increment click me</p>
        
        
        
        </>



    )




}



//! notes 
/*
hooks are  started with use

hooks can only be used at the top level of your component

do not use hooks in loops, conditions or nested functions etc 

hooks have a  orders 




*/