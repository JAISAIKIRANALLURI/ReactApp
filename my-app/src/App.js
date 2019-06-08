import React, { Component } from 'react';
import Table from './table';
import Counter from './counter';

class App extends Component {

  render() {
    
    console.log("I'm in App ra howle");

    let characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    return (
      <div className="App">
      <Table characterData = {characters}/>
      <Counter />
      </div>
    );
  }

  componentDidMount() {
  console.log("I'm in app did mount ra howle"); }
}

export default App;
