import React, { useState } from "react"

export const Short = () => {
    const [login, setLogin] = useState(true)
    const [user , setUser] = useState("");



    return (
        <>
            <h1>Welcome to the short Circuit Evaluation</h1>
            {
                login ? <p>you login in</p> : <p>please login in</p> }

               {user ? <p> hello {user}  </p> :<p> plz login </p>}  
             
            
            <button onClick={() => setLogin(!login)}>Toggle login State</button>
            <button onClick={()=>setUser("coder")}>Set user</button>
            <button  onClick={()=>setUser("")}>Clear user</button>
        </>
    )
}


//!Notes:
/* 
logical operator
OR ||
nulish operator 
and or etc are used 


*/