
import { useEffect, useState } from "react"
export const UseEffect=()=>{


    
return (
<>

<Counter/>

<Counter2/>

<Counter3/>


</>



)



}





function Counter(){
    

    const [count, setCount] = useState(0)


    useEffect( ()=>{
        setTimeout(()=>{
            setCount(count+1)

        },2000)



    })


    return(
        <>
        
        <h1>I 've Rendered {count}</h1>
        
        
        </>




    )
}



    function Counter2(){
    

        const [count, setCount] = useState(0)
    
    
        useEffect( ()=>{
            setTimeout(()=>{
                setCount(count+1)
    
            },2000)
    
    
    
        },[])
    
    
        return(
            <>
            
            <h1>I 've Rendered {count}</h1>
            
            
            </>
    
    
    
    
        )
    
    
    
    
    
    }
    function Counter3(){
    

        const [count, setCount] = useState(0)
const [name,setName] = useState("Greek")    
    
        useEffect( ()=>{
            setTimeout(()=>{
                setCount(count+1)
    
            },2000)
    
    
    
        },[count,name])
    
    
        return(
            <>
            
            <h1>I 've Rendered {count}</h1>
            
            
            </>
    
    
    
    
        )
    
    
    
    
    
    }




//! notes 

/*  
fetching data from api
directly update dom
set timeout or set interval 

!useEffect(cd)// without dependencies if we
 use it without the dependency then if internal
  value is change then it wil auto re-render


  useEffect(cd,[])

  useEffect(cd,[variables])

*/