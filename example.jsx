import React, { useEffect, useRef, useState } from "react";
import Project from "./project";

function Loggin(){
    // const [data,setData] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const fetchData = async() => {
    //         try{
    //             const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //             const result = await response.json();
    //             setData(result)
    //             setLoading(false)
    //         }catch (error){
    //             console.error("Error fetching data: " , error );
    //             setLoading(false)
                
    //         }
    //     }

    //     fetchData();    
    // },[])
    // if(loading){
    //     return <p>Loading....</p>
    // }

    // return(
    //     <div>
    //         <h1>Posts</h1>
    //         <ul>
    //             {data.map((post) => (
    //                 <li key={post.id}>{post.title}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )

    // const [data,setData] = useState([]);
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const fetchData = async()=> {
    //     try{
    //         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //         const result = await response.json();
    //         setData(result)
    //         setLoading(false)
    //     }catch(error){
    //         console.error("Post error is : ", error)
    //     }
    // }
    // fetchData()
    // }, [])
    // if(loading){
    //     return <h1>loading.....</h1>
    // }
    // return(
    //     <div>
    //         <h1>Post</h1>
    //         <ul>
    //             {data.map((post) => (
    //                 <li key={post.id}>{post.title}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )
    
}


export default Loggin;