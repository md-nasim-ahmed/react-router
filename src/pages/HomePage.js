import axios from "axios";
import  {useEffect, useState} from "react";
const HomePage = () => {

    let[todo,setTodo]=useState([]);

  useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
        setTimeout(()=>{
          setTodo(res.data)
        },3000)
    })
    .catch((err)=>{
       
    })

  },[])

    return (
        <div>
          {JSON.stringify(todo)}
        </div>
    );
};

export default HomePage;