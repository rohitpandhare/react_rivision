// export function Todo(props){
//     return <div>
//         {/* <h1>Todo Title</h1>
//         <h4>Description</h4> */}
//         <h1>{props.title}</h1>
//         <h4>{props.description}</h4>
//         <button>Done</button>
//     </div>
// }

export function Todo({title, description}){
    return <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <button>Done</button>
        <hr />
    </div>
}