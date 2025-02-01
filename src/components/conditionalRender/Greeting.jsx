/*
export function Greeting({isLoggedIn}){
    // if(isLoggedIn){
    //     return <h1>Welcome Back</h1>
    // }
    // else{
    //     return <h1>Please Log in</h1>
    // }

    //with ternary operator
    return <h1>
        {isLoggedIn ? "Welcome Back" : "Please Log in"}
    </h1>
}
*/

import { useState } from "react"

export function Greeting(){

    const [isLoggedIn,setLoggedIn] = useState(false);

    return <h1>
        {isLoggedIn ? "Welcome Back" : "Please Log in"}
        <hr />
        {isLoggedIn?(
            <button onClick={()=>{
            setLoggedIn(false)
            }}>Logout here</button>
        ):(
            <button
            onClick={()=>{setLoggedIn(true)}}>Login here</button>)}
    </h1>
}