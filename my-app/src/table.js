import React, { Component } from 'react'
import TableBody from './tableheader';

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

    class Table extends Component {
      
    constructor()
    {
      super()
      this.state = {
        message: 'Welcome visitor'
      }
    }

    changeMessage()
    {
      this.setState ((state) =>{
       this.state.message = 'Thank you bro';
      })
    }
    render() {
      const { characterData } = this.props
      
      console.log("I'm in Table ra howle")
      return (
        <div>
          <h1> {this.state.message} </h1> 
          <button onClick = {() => this.changeMessage()}> Subscribe </button>
        <table>
          <TableHeader />
          <TableBody  characterData={characterData}/>
        </table>
        </div>
      )
    }
    componentDidMount()
    {
      
      console.log("I'm in did mount ra howle");
    }
  }

  export default Table;