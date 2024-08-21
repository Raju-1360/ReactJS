import { useEffect, useRef, useState } from "react"



export const UseRef= ()=>{

   



    return(

        <>

       <Counter></Counter>

       <Dom/>
        
        
        </>



    )



}



function Counter(){
    const[count,setCount] =useState(0);

    const value =useRef(-1);

useEffect( () =>{

    value.current =value.current+1;




});



    return(
<>
<button onClick={()=>{setCount(prev=>prev+1)}}> +1</button>

<h1>Count :{count}</h1>
<button onClick={()=>{setCount(prev=>prev-1)}}>-1</button>

<h1>Render:{value.current}</h1>


</>


    )


}







function Dom (){

    const inputvalue= useRef("");

    
    const [, setTrigger] = useState(0);
const handle =(event)=>{

    inputvalue.current=event.target.value;

    setTrigger((prev) => prev + 1);





}




return(
<>

<input type="text"  value={inputvalue.current}  placeholder="write anything" onChange={handle} />

<h1>Result:{inputvalue.current}</h1>

</>



)


}


//!notes;


/* 
It is used to create a mutable variable 
which will not re-render the component


we can access dom and modify it 

use ref() to access the of a dom 
like ref(input.element)




*/