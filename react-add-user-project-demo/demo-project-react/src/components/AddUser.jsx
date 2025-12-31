import React, { useState } from 'react'
import './AddUser.css'
import Card from './Card';
import classes from './Card.module.css';
import Button from './Button';
import UsersList from './UsersList';



const AddUser = (props) => {

const [enteredUsername,setEnteredUsername]=useState('');
const [enteredAge,setEnteredAge]=useState('');


  const usernameChangehandler=(event)=>{
    setEnteredUsername( event.target.value);
  }
  const ageChangehandler=(event)=>{
    setEnteredAge( event.target.value);
  }
  const addUserHandle=(event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
            return;
    if( +enteredAge<1) return;
    props.onAddUser(enteredUsername,enteredAge );

    console.log( enteredUsername, enteredAge );
    setEnteredUsername('');
    setEnteredAge('');

  }  


  return (
    <Card className={classes.input}>
      <form className='form-container' action="" onSubmit={addUserHandle}>

        <label htmlFor="username">UserName </label>
        <input onChange={usernameChangehandler} value={enteredUsername} type="text" id="username" />

        <label htmlFor="age">Age</label>
        <input onChange={ageChangehandler} value={enteredAge} type="number" id="age" />


        <Button type='submit' >Add User</Button>

      </form>

      </Card>


  )
}

export default AddUser
