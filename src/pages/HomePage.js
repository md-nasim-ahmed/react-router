import React from 'react';

const HomePage = () => {


 const Getlist=()=>{
      
    let URl ="....."
    let postBody={
       
      name:"Nasim",
      city:"Dhaka",
      age:"25"
    }
    axios.post(url,postBody).then((res)=>{
        if(res.status===200){
          let data=res.data
        }
        else{

        }
      }).catch((err)=>{
          console(err)
      })
 }

  return (
    <div>
      
    </div>
  );
};

export default HomePage;