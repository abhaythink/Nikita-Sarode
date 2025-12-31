import React from 'react'
import { useState } from 'react'

const Temp = ({name}) => {

  const [username,setUserName]=useState(name);

  return (
    <div>

      <h3 > Hello {username} </h3>
      <button onClick={()=>{setUserName('payal')}}>click</button>
    </div>
  )
}

export default Temp
