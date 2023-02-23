import { useState } from "react";

const HomePage = () => {

    let [color,setColor]=useState("red")

    if(color==="blue"){
      return (
        <div>
          <h1 style={{color:'blue'}}>This is blue color</h1>
        </div>
    )
  }
  else if(color==="red"){
    return(
      <div>
        <h1 style={{color:'red'}}>This is red color</h1>
      </div>
    )
  }
  else if(color==="green"){
    return(
      <div>
        <h1 style={{color:'green'}}>This is the green color</h1>
      </div>

    )
  }
};

export default HomePage;