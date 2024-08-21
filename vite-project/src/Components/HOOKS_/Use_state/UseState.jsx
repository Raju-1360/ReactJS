

import { useState } from "react"


export const UseState=()=>{
  




return(<>
<Color></Color>

<Brand/>
<Count/>

</>


)


}


const Color=()=>{

    const [color,setColor] = useState("red")
    return(

<>

<h1>Learning hooks</h1>

<p>My favourite color is {color} </p>

<button onClick={()=>setColor("blue")} >blue</button>
<button onClick={()=>setColor("Red")} >Red</button>

</>


    )



}

function Brand (){

    const [car, setCar]=useState({
    brand :"Ferrari",
    color:"Red",
    model:"Roma",
    year:"2023",

    })

    function colorChange(){
        setCar((prev)=>{
            return{...prev ,color:"Blue"}
        })

       

    }

    return (

        <>
      <h1>My {car.brand}</h1>

    <h2>It is a {car.color} {car.model} from {car.year}</h2>

    <button onClick={colorChange}>Blue</button>
    <button onClick ={ ()=>setCar( (prev)=>{  return { ...prev, color:"Red"}} )} >RED</button>
        
        
        
        </>




    )

}





    function Count(){

        const [count ,setCount] =useState(0)

        const increase =()=>{
            // setCount(count+1)

            setCount(prev=>prev+1)
            setCount(prev=>prev+1)
            setCount(prev=>prev+1)
            setCount(prev=>prev+1)  // here it will increase by 4 directly
        }

        const decrease=()=>{
            setCount(count-1)

        }

        return (
            <>
            
            <h1>Count : {count}</h1>

            <button onClick={increase}> Increase</button>
            <button onClick={decrease}> Decrease</button>
            
            </>




        )

    }

