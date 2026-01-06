import React, { createContext, useContext} from 'react'
import { UseC } from '../../App';

export const Pr = () => {
 
  const n =useContext( UseC );

  return (
    <div>

      <h3> {n} </h3>

    </div>
  )
}

export default Pr
