
import React ,{useEffect, useLayoutEffect} from 'react';


export  const UseLayer =()=>{

useEffect(()=>{

    console.log("useEffect message ")

},[])


useLayoutEffect(()=>{

    console.log("useLayoutEffect message ")



},[])
    return (

<>
<h1>Use Effect</h1>
{ Array(40000).fill('').map((item, index)=>(
    <li key ={index}> {Math.pow(Math.random(),10)}</li>


))}

</>

    )
}


//! notes

/*  
use layout and use effect are similar but 
use layout executed before the dom 
and use effect after the dom 
But recommended to use the use effect 
but in some case the use layout can be use full


use layout before Rendering the Dom 

use effect after rendering the dom 


*/