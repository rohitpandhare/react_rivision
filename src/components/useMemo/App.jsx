//MEMO - 
//useMemo is used to prevent re-rendering of the whole component
// **It skips re-rendering when props are remain unchanged

import { memo, useCallback, useMemo, useState } from "react";

export function App(){
    console.log('App Component Rendered');
    
    const [count, setCount] = useState(0);

    //if we add some part in Child that will change -- then  there is no use of using useMemo

    ///To tackle this we can use - useCallback
    const myFunction = useCallback(
        ()=>{
        console.log('Button Clicked');
    },[])
    // so we can use useMemo to prevent re-rendering of the whole component


    const square = useMemo(
        ()=>{
        console.log('To check the memory storing of UseMemo');
        return count * count;
    })



    return <div>
        <p>Count: {count}</p>
        <p>My Square: {square}</p>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increment</button>
    
        {/* the above part - re-renders the whole component */}
        {/* so we can use useMemo to prevent re-rendering of the whole component */}
        <Child handleClick ={myFunction}/>
        {/* or <Child /> */}
    </div>
}

// function Child(){
//     console.log('Child Component Rendered');

//     return <div>
//         <p>Child Component</p>
//     </div>
// }

//using useMemo
const Child = memo(
    ()=>{
    console.log('Child Component Rendered');

    return <div>
        <p>Child Component</p>
    </div>
    }
)


///firslty we will see the output without using useMemo
//output -
//App Component Rendered
//App Component Rendered


//then we used useCallback
//output -
//App Component Rendered
//App Component Rendered