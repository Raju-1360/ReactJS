
/*In React, props (short for properties) are used to pass data from a parent component to a child component.
 They are a core concept for creating reusable and dynamic components.
  */

 import React from 'react';
import Child from './Child.jsx'
export const Parent=( )=>{

    return(
        <>  
        <Child name="John Doe" />
        <h1>Leaning props learning js</h1>
        </>
    )}




    //Nots --->--
    /* Props in React: Key Points

Definition: Props (properties) pass data from parent to child components.
Passing Props: Use attributes in JSX to send data to child components.
Receiving Props: Access via props object or destructure in the function parameters.
Immutability: Props are read-only and cannot be altered by child components.
Default Props: Use defaultProps to set default values.
Prop Types: Validate with prop-types to ensure correct data types.
Function Components: Access props directly or destructure in the parameters.
Class Components: Access via this.props.
Children Prop: Use children to pass nested components or elements.*/