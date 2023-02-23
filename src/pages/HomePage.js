import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {

    let[todo,setTodo]=useState([]);

    useEffect(()=>{
      
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res)=>{
        setTodo(res.data)
      })
      .catch((err)=>{})

    },[])

    const Mylist=todo.map((list,i)=>{
      return(
        <tr>
          <td>{list['userId']}</td>
          <td>{list['Id']}</td>
          <td>{list['title']}</td>
          <td>{list['completed']}</td>
          <td><button className="btn btn-danger">Delete</button></td>
          <td><button className="btn btn-info">Edit</button></td>
          <td><button className="btn btn-primary">Details</button></td>
        </tr>
      )
    })
    return(
      <div>
          <table className="table table-bordered">
            <thead>
                <tr>
                  <th>User Id</th>
                  <th>Title</th>
                  <th>Delete</th>
                  <th>Edit</th>
                  <th>Details</th>
                </tr>
            </thead>
            <tbody>
              {Mylist}
            </tbody>
            </table>
      </div>

    )
  
};

export default HomePage;