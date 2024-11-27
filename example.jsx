import React, { useRef } from "react";

function Loggin({ role }){
    // switch(role){
    //     case "admin":
    //         return <h1>welcome,admin</h1>
    //     case "user":
    //         return <h1>Welcome, user</h1>
    //     default:
    //         return <h1>Access denied</h1>
    // }
    const inputref = useRef(null)
    console.log(inputref)
    const click =(e)=>{
        console.log()

        inputref.current.focus()
    }
    return(
       <React.Fragment>
         <input type="text"  ref={inputref}/>
         <button onClick={click}>clik</button>
       </React.Fragment>
    )
}

export default Loggin;