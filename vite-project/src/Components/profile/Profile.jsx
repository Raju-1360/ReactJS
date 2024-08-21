

export const Profile=({name, age})=>{

    const greeting = () => <strong><p>Hello {name}, have a nice day 🔥</p></strong>;

    return(
        <>
        <h1>Name :{name}</h1>
        <p>Age: {age}</p>
        <p>{greeting()}
        </p>
        
        <Sub name={name}></Sub>
        
        </>



    )
}

function Sub ({name}){

    return(
        <>
        <p>Hello {name}</p>
        
        
        </>

    )
}