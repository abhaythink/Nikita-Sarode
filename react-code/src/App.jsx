
import React, { useState } from 'react'
import Form from './components/Form/Form.jsx'
import Header from './components/Heading/Header.jsx'
import ResultsTable from './components/ResultTable/ResultsTable.jsx'


const App = () => {

  const [test,setTest]=useState( 'click here');

  // function callFun()
  //     {
  //       alert("button clicked")
  //     }
  // <button onDoubleClick={ ()=>{ 
  //       setCOunt(count+1); 
  //       alert ( `button clicked ${count} `,'times ' ) } }>click</button>
     
   return (
    <div>
     <Header/>
     <Form/>
     <ResultsTable/>

     

      
    </div>
  )
}

export default App
