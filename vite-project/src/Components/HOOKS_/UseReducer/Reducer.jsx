
import { useReducer } from "react"

export const Reducer =()=>{

    const init ={count:0}

    const reducer=(state,action)=>{

        switch(action.type){

            case "increase":{
                return {count : state.count+1}

            }
            case "decrease":{
                return {count : state.count-1}

            }
            default :{
                return state
            }



        }

        return {count : state.count+1}
    }

    const [state,dispatch] = useReducer(reducer,init)

    return (
        <>
        <h1>Reducer function  🔥</h1>

        <h1>Count:{state.count}</h1>
        <button  onClick={()=>dispatch( {type :'increase'})}>Increase</button>

        <button  onClick={()=>dispatch( {type :'decrease'})}>Decrease</button>
        
        </>



    )
}