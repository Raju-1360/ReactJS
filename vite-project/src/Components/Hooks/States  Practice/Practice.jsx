import { useState } from "react"

export const Practice= ()=>{

       

        const [del,setDel]=useState( [
            { name:"raju", age:"15"},
            { name:"Roy", age:"105"},
            { name:"Root", age:"155"},
            ]
        );
    return (
<>
<h1>Practice of a usestate</h1>
<ul >  {
    del.map((curr, index)=>{
        return(
        <li key={index}>
<span>{curr.name} {curr.age} </span>

        </li>
        )
    })
}
</ul>



</>

    )




}