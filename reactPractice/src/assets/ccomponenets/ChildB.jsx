import React from 'react'

const ChildB = ( props ) => {
  return (
    <div >
      
      <input type='text' onChange={(e)=> props.setC( e.target.value ) }  ></input>

    </div>
  )
}


export default ChildB
