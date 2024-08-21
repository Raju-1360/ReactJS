
/*Receiving Props: In the child component, you access props
 through the props object or destructuring.  */

 import React from 'react';
 import PropTypes from 'prop-types';

//  const Child =(props)=>{
//     return(

//         <>
//         <p>This is a child </p>
//         <p> Name : {props.name}</p>
//         <p>Age: {props.age}</p>
//         </>
//     )



// }
// export default Child


// or using destructuring 

function Child ({name,age}){
    return (
        <>
        <p>Names:{name}</p>
        <p>Age:{age}</p>
        </>
    )
}


Child.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

Child.defaultProps = {
    age: 52
};
export default Child;