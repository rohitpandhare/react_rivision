// with use state -- controlled component
// with useRef -- uncontrolled component

import { useRef } from "react";
import { useState } from "react";

export function MyForm(){
    /*
    const [name, setName] = useState("");
    const handleChange = (e)=>{
        setName(e.target.value);
    }
    return <form action="">
        <label>Name:
            <input type="text" onChange={handleChange}/>
        </label>
        <p>Your Name is: {name}</p>
    </form>
    */
   const inputRef = useRef();

   const handleChange = (e) => {
    e.preventDefault();
    alert(`Name is ${inputRef.current.value}`);
   }

   return <form onSubmit={handleChange}>
       <label>Name:
           <input type="text" ref={inputRef}/>
       </label>
       <button onClick={handleChange}>Submit</button>
       <p>Your Name is: {inputRef.current.value}</p>
    </form>
   
}