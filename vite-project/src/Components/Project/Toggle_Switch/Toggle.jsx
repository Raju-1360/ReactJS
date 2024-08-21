import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";

import "./styles.css";

export const Toggle=()=>{

    const[isOn, SetIsOn]=useState(false);

    const handle=()=>{
        SetIsOn(!isOn)
        document.body.style.backgroundColor = !isOn ? 'black' : 'white';
        


    }
            
        
return(
<>
<h1 style={{color:isOn ? "gold":"black", marginLeft:"40vw"}}>Toggle Switch <IoIosSwitch style={{color:isOn ?"yellow":"black"}} /></h1>
<div className="toggle"  >
    <div className="switch" style={{backgroundColor : isOn?" #008000":"#ff0000"}} onClick={handle}>

<span className={`state ${isOn ? "on": "off"}`}> <p>{isOn ? "ON" :"OFF"} </p></span>

    </div>


</div>

</>

)


}