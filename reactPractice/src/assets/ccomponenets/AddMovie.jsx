import React, { useState } from 'react'


const AddMovie = () => {
    const [enteredName,SetenteredName]=useState('');
    const [enteredHeight,setEnteredHeight]=useState('');

    function addMovieHandle(event)
    {
        event.preventDefault();
        console.log( enteredName, enteredHeight );
        setEnteredHeight('');
        SetenteredName('');
    }

    function inputNameChnage(event)
    {
        SetenteredName(event.target.value);
    }
    function inputHeightChange(event)
    {
        setEnteredHeight(event.target.value);
        
    }


  return (
    <div>

        <form action="" onSubmit={addMovieHandle}>

        <label htmlFor="add">Enter Name</label>
        <input onChange={inputNameChnage} type="text" id='add'/>

        <label htmlFor="desc">Enter height</label>
        <input onChange={inputHeightChange} type="text" name="" id="desc" />
        <button type='submit' value=''  >Add User</button>

        </form>
      
    </div>
  )
}

export default AddMovie
