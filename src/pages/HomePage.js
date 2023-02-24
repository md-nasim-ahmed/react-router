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

    const DeleteEvent=(userId)=>{
      
      let DeleteId="Delete ID="+userId;
      alert(DeleteId)

    }

    const EditEvent=(userId)=>{
      let EditId="Edit ID="+userId;
      alert(EditId)
    }

    const DetailsEvent=(userId)=>{
      let DetailsId="Details ID="+userId;
      alert(DetailsId)
    }




    const Mylist=todo.map((list,i)=>{
      return(
        <tr>
          <td>{list['userId']}</td>
          <td>{list['Id']}</td>
          <td>{list['title']}</td>
          <td><button onclick={DeleteEvent.bind(this,list['userId'])} className="btn btn-danger">Delete</button></td>
          <td><button onclick={EditEvent.bind(this,list['userId'])} className="btn btn-info">Edit</button></td>
          <td><button onclick={DetailsEvent.bind(this,list['userId'])} className="btn btn-primary">Details</button></td>
        </tr>
      )
    })
    return(
      <div>
          <table className="table table-bordered">
            <thead>
                <tr>
                  <th>userId</th>
                  <th>Id</th>
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