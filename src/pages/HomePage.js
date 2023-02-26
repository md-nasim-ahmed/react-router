import React from 'react';

const HomePage = () => {


 const Getlist=()=>{
      let URL="..."
      axios.get(URL).then((res)=>{

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