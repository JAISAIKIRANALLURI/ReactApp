import React from 'react'

const TableBody = (props) => {
    const {characterData} = props;

    const TableData = (data) => {
        const  element  = data.map((row,index) => {
          return (
            <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
          )

        })          
        return element;
    }
    return (
       <tbody >{TableData(characterData)} </tbody>
    )
  }

  export default TableBody;