import { useState } from "react";


import "../../../Components/Hooks/States/styles.css"
export const States = () => {
  const [count, setCount] = useState(0);


  const handle=()=>{
    setCount(()=>count+1);
  }

  return (
    <><div className="main">  
      <p>Learning States</p>
      <p>Increment</p>
      <button onClick={handle}>{count}</button>
      {console.log("parent component")}
      <Child/>

      </div>
      
    </>
  );
};


const Child=()=>{

  return(
    <>
    {
      console.log("child component")
    }
    
    </>

  )
}
//? here it will render but if use in app then it will not render 
// const Sibling=()=>{


//   return(
//     <>
//     {console.log("Sibling component")}
    
//     </>

//   )
// }

/* //!Hooks
const [count, setCount]=useState(0)
use state is a array 
let array=useState()

useState is a React Hook that lets you add state to functional components.
Initialize State:

javascript
Copy code
const [state, setState] = useState(initialValue);
state: Current state value.
setState: Function to update the state.
initialValue: Initial state value.
Updating State:

javascript
Copy code
setState(newValue);
Directly set new state value: setState(5);

? <- How State works ->

! In version 19 there is no virtual DOM structure
using usestate in function component
Initialized --> update ->preventions


React js create a new tree structure  use Diffing Algorithm 
only update new value only pass only that part  that need to be change and render the tree structure
Diffing algorithm compare the state 
React dom update the tree structure
in the div if a parent component is changed then its inner component also changes
if inner component is changed then it will not affect the outer component

react.static mode use in main app so it render the structure twice if we remove it it will render once


*/

