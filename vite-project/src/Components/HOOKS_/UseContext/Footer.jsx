
import React from "react"

import { useContext } from "react"

import {Main} from '../../../Components/HOOKS_/UseContext/Main'

export const Footer=()=>{

    const{ phone, name }= useContext(Main);
return (
<>
<h2>Footer</h2>
<p>Phone : {phone}</p>

<p>Name :{name}</p>


</>


)


}