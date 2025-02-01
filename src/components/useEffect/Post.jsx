import { useEffect } from "react";
import { useState } from "react";

export function Post(){

    const [posts, setPosts] = useState([]);
    console.log('Rendering Post Component');
    
    //The website is rerendering again and again -- so we are using useEffect to stop this
    useEffect(() => {
        //fetching data from an api
        fetch('https://jsonplaceholder.typicode.com/posts')
            //when my fetch is done, then convert it to json
            .then((res) => res.json())
            .then((data)=> setPosts(data));
    }, []); //empty array means that it will only run once

    return <ul>
        {/* {posts.map((post, index) => 
        <li key={index}>{post.title}</li>)} */}
        {posts.map(
            (post) =>(
            <li key={post.id}>{post.title}</li>
            )
        )}
    </ul>
}