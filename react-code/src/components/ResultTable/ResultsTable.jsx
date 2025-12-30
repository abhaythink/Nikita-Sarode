import React from 'react'
import './ResultTable.css'



const ResultsTable = () => {
  return (
    <div>

        <table>

            <thead>
                <tr>
                    <th>year</th>
                    <th>Total Savings</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>year number</td>
                    <td>Total saving</td>
                    <td>Interest gained</td>
                    <td>Total interest</td>
                </tr>

            </tbody>
        </table>
      
    </div>
  )
}

export default ResultsTable
