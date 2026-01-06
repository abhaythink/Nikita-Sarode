import React, { useState } from 'react'



const WithoutYUPForm = () => {
    const [form,setDetail]=useState({
        name:'',
        age:10
    })

const namehandle=( event )=>{
    setDetail({
        ...form,
        name: event.target.value
    })
}
const ageHandle=(event)=>{
    setDetail({...form,
        age: event.target.value
   })
}
function handle(event){
    event.preventDefault();
    console.log(form);
}


    return (
    <div>

        <form action="" onSubmit={handle}>

            <label htmlFor="n">Name</label>
            <input onChange={namehandle} type="text" name="" id="n" />
            <br />
            <label htmlFor="age">Age</label>
            <input onChange={ageHandle} type="number" name="" id="age" />
            <br/>
            
            <button type='submit' onClick={handle}>click</button>

        </form>


      
    </div>
  )
}

export default WithoutYUPForm