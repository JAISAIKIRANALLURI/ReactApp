import React, { Component } from 'react';

class counter extends Component {
    constructor(props)
    {
      super(props)
      this.state = {
        count: 0
      }
    }

    incremet(){
        this.setState({
            count: this.state.count +1 
        })
    }

  render() {
    
    console.log("I'm in counter ra howle");
    return (
        <div>
             <div>
      Count - {this.state.count}
      </div>
      <button onClick ={() => this.incremet()} > Increment</button>
        </div>
     
    );
  }

  componentDidMount()
  {
    
    console.log("I'm in counter didmount ra howle");
  }
}

export default counter;
