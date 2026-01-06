
import React, { createContext, useContext, useReducer, useRef, useState } from 'react'
import WithoutYUPForm from './assets/ccomponenets/WithoutYUPForm';
import NewCounter from './assets/ccomponenets/NewCounter';
import OldCounter from './assets/ccomponenets/OldCOunter';
import Parent from './assets/ccomponenets/Parent';
import FormYup from './assets/ccomponenets/FormYup';



const iniState={c:0}
const Actions={
    INCREASE:"increase",
    DECREASE:"decrease"
  };

const reducer=(state,action )=>{
  if(action.type== Actions.INCREASE)
  {
      return {
        c:state.c+1
      };
  }
  else if(action.type==Actions.DECREASE )
  {
    return {
      c:state.c-1
    };
  }
  else
  {
      return {
        c:state.c
      };
  }
}


const App = () => {
<></>
  

  const [state,dispatch ]=useReducer(reducer,iniState);

  const incCount=()=>{
    dispatch({type:Actions.INCREASE});

  };
  const decCount=()=>{
    dispatch({type:Actions.DECREASE});
    

  };
  

  return (
    <>

    <h3>count: {state.c } </h3>
    <button onClick={incCount}>Increase</button>
    <button onClick={decCount}>Decrease</button>

    {/* < NewCounter />
    <OldCounter name='hii' id='123' />
    <Parent/> */}

    <FormYup />


    


   


   </>




   
  );

}

export default App
