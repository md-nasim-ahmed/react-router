import React, { Component } from 'react';

class HomeBanner extends Component {

    constructor(){
        super();
      this.state={
        color:"Blue"
      }
    }

    render() {
        if(this.state.color==="Red"){return (
            <div>
              <button className='btn btn-danger'>Red</button>
            </div>
        )
     }
     else if(this.state.color==="Blue"){
        return(
            <div>
                <button className='btn btn-info'>Blue</button>
            </div>
            )
        
     }
  }
}

export default HomeBanner;
