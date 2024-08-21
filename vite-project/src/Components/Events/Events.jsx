


export const Events=()=>{


    // function btn (){
    //     alert("hey you click a button");

    // }
    const btn =(event)=>{
        console.log(event)
        alert("hey you click button")

    }

    const handle =(user)=>{
        console.log(`hey you called ${user}`)
    }
    
 
return (
    <>
   <button onClick={btn}>Click me</button> <br />

   <button onClick={(event)=>{
    console.log(event)

   }}>Inline Function</button>
   <Welcome onClick={()=>handle("react")}  ></Welcome>
 

    
    
    
    </>
)



}

const Welcome=(props)=>{
    const greet=()=>{
        console.log("hey you called ")
    }

    return(
        <>
        <h1>This is a props passing as a event</h1>

        <button  onClick={props.onClick}>click me</button>
        <button onClick={greet}>click here</button>
        
        
        </>


    )

}


//SyntheticBase Event base event
// passing event as props
