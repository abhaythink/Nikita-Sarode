import React, { useState } from 'react'



const NewCounter = () => {
    const [count,setCount]=useState(0);
    function call(){
        setCount(count+1);
    }
    function callDec()
    {
        setCount(count-1);
    }


  return (
    <div>

        <button onClick={call}>+</button>
        <button onClick={callDec}>-</button>
        <h3>Count is : {count} </h3>

        
      
    </div>
  )
}

export default NewCounter
