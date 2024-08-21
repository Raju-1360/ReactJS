
export const Practices=()=>{

const students=[5];

    return(
        <>
        <p>{students.length && "No Students found"}</p>
        <p>{students.length ===0 && "No Students found"}</p>
        <p>{!students.length ===0 && "No Students found"}</p>
        <p>Number of Students:{students.length}</p>

        </>
    )

}