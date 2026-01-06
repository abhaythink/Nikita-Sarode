import React, { useState } from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {
    const [c,setC]=useState( 11 );
  return (
    <div>
        <ChildA c={c}/>
        <ChildB  setC={setC}/>
      
    </div>
  )
}

export default Parent
