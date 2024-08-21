import { useState ,useMemo, useCallback} from "react"

import Header from '../UseMemo/UseMemo2'




export const UseMemo =()=>{

    const [cube ,setCube]= useState(0)

    const [count ,setCount]= useState(0);

function Cube(number){
    console.log("calculation done...")

    return Number(Math.pow(number,3))



 }

 const newfn = useCallback(()=>{},[])

 const Result =useMemo(()=>Cube(cube),[cube])


    return (
<>

<h1>Calculate the Cube</h1>

<input type="text"  onChange={(e)=>{setCube( e.target.value)}}/>
<p>Result:  {Result} </p>



<h1> count: {count} </h1>

<button onClick={()=>setCount(count+1)}>+1</button>

<Header  newfn={newfn}/>
</>


    )




}


/*  
use memo  give a memoized VALUE

use callback return a memoized function




*/