import React, { useState } from 'react'
import './Form.css';

const Form = (event) => {


  const submitHandler=(event)=>{
    event.preventDefault();
    console.log('form submitted');
  };

  const changHandle=(input,value)=>{

    console.log(input , value );

  }



  return (
    <div >
      
      
      <form action="" onSubmit={submitHandler} className='form-container'>

        <label htmlFor="cs" onChange={changHandle}>Current Savings</label>
        <input 
        onChange={ (e)=>{ changHandle('current savings',e.target.value ) }}
        type="number" />

        <label htmlFor="ys">Yearly Savings</label>
        <input onChange={(e) => changHandle('yearly savings', e.target.value)} type="number" />
        <label htmlFor="interest">Expected Interest</label>
        <input onChange={(e) => changHandle('interest', e.target.value)} type="number" />
        <label htmlFor="duration">Investment Duration</label>
        <input onChange={(e) => changHandle('duration', e.target.value)} type="number" />

        <button type='submit'   value='Calculate'>Calculate</button>
        
     
      </form>
    </div>
  )
}

export default Form
