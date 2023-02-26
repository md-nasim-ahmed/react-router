import React from 'react';

const HomePage = () => {


 const fileUpload=()=>{
    
    //Post URL
    let URl ="....."
    //Body form Data
    let MyFormData= new FormData();
       MyFormData.appened(name:"file1",value:"fileobj1");
       MyFormData.append(name:"file2",value:"fileobj2");
       MyFormData.append(name:"file3", value:"fileobj3");

       //Header Configuration
       let HeaderConfig={
        headers: {
          "Content-Type": "multipart/form-data",
        }
       }


    axios.post(url,MyFormData,HeaderConfig).then((res)=>{
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