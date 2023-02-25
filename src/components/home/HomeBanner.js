import React, { Component } from 'react';

class HomeBanner extends Component {

    MyClick=()=>{
     let text= this.myText.value
     alert(text)
    }
  

    render() {
        return (
            <div>
              <input ref={(abc)=>{this.myText=abc}} className='form-control'></input>
              <br/>
              <button className="btn btn-success"onClick={this.MyClick}>submit</button>
            </div>
        )
     }
}

export default HomeBanner;
