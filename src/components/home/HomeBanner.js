import React, { Component } from 'react';

class HomeBanner extends Component {

    constructor(){
        super();
      this.state={
        color:"Red"
      }
    }

    render() {
        return (
            <div>
                <h1>{this.state.color}</h1>
                <button className='btn btn-danger' onClick={()=>this.setState({color:"Red"})}>Red</button>
                <button className='btn btn-info' onClick={()=>this.setState({color:"Blue"})}>Blue</button>
                <button className='btn btn-primary' onClick={()=>this.setState({color:"Green"})}>Green</button>
            </div>
        );
    }
}

export default HomeBanner;
