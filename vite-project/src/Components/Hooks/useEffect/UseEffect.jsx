import {  useEffect, useState } from "react"



export const UseEffect =()=>{


    const [count ,setCount]=useState(0)

const [date,setDate]=useState(0)
  useEffect( ()=>{

    console.log("useffect")




    },[count])


    useEffect( ()=>{

        setInterval(() => {
            
        const update =new Date()

        setDate(update.toLocaleTimeString())

            
        }, 1000);

    },[])

return (

    <>
    <h1>Use Effect learning bro </h1>

    <p>Data and time {date}</p>

<p>{count}</p>

    <button onClick={()=>setCount(count+1)} > inc</button>
    
    
    </>




)


}