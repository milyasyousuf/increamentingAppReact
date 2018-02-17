import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    };
  }
  increament =()=>{
    this.setState({count:this.state.count+1});
  }
  render(){
    return(
      <div>
        <button onClick={this.increament}>Increament</button>
        {this.state.count}
      </div>
    );
  }

}

export default App;
