
import  "../Event propagation/style.css"
export const Event =()=>{

    const grand=()=>{
    

        console.log("grand called")
    }

    const parent=()=>{
    


        console.log("parent called")
    }
    const child=(e)=>{

    

        console.log("child called")
        e.stopPropagation()
    }

    return (
<>

<div className="main" >

    <div className="grand" onClick={grand}>Grand

        <div className="parent" onClick={parent}>parent


            <div className="child" onClick={child}>child



            </div>
        </div>




    </div>





</div>


</>

    )





}
/* Important Notes:
onClickCapture
Event Propagation: Events propagate through the DOM hierarchy regardless of element types.
Event Handlers: Ensure that event handlers are correctly assigned to the capturing and bubbling phases.
Stopping Propagation: If you call e.stopPropagation(), it will prevent the event from propagating further,
 which can affect the bubbling phase.
Nested Elements: Ensure that elements are correctly nested without errors 
in the structure for proper event propagation. */