import React from 'react'
import '../Components/AddPatientDetail.css'
import {useFormik} from "formik";
import * as Yup from "yup";



const SchemaStructure= Yup.object({
    namePatient:Yup.string().min(3).required('Name must be at least 3 chars' ),
    age: Yup.number().typeError('age must be number').required('Age required'),
    contact:Yup.string().matches(/[0-9]{10}$/,'Only digits are allowed').required(),
    gender:Yup.string().matches( /^(female|male)$/i).required(),
    symptoms:Yup.string().min(3).required()



})

const AddPatientDatail = ( {addPatient , setFormStatus  } ) => {
    
    const {values,errors,handleSubmit,handleChange }=useFormik({
            initialValues:{
            id1:"",
            namePatient:"",
            age:"",
            contact:"",
            gender:"",
            symptoms:"",
            template:""

            },
        validationSchema:SchemaStructure,
        onSubmit:(values)=>{
            console.log("Form Data:", values);
            console.log(setFormStatus)
            setFormStatus(false);
            addPatient(values);
            console.log('data medical: ', data);
            

        },
        


    })
    

   

  return (
    <div className='formContainer'>
        
        <form className="patient-form" onSubmit={handleSubmit} >


            <label htmlFor="id1">Enter Patient Id:</label>
            <input
            value={values.id1 }
            onChange={handleChange}
            type="number"  name='id1' id='id' />
            

            <label htmlFor="name">Enter Patient Name:</label>
            <input
            value={values.namePatient}
            onChange={handleChange}
            type="text"  name='namePatient' id='name' />
            {errors.namePatient}

            <label htmlFor="contact">Enter Contact No</label>
            <input
            value={values.contact}
            onChange={handleChange}
            type="text"  name='contact' id='contact' />
            {errors.contact}

            <label htmlFor="age">Enter Age</label>
            <input
            value={values.age}
            onChange={handleChange}
            type="number"  name='age' />
            {errors.age}

            <label htmlFor="gender">Enter Gender</label>
            <input
            value={values.gender}
            onChange={handleChange}
            type="text"  name='gender' id='gender' />
            {errors.gender}

            <label htmlFor="gender">Enter symptoms</label>
            <input
            value={values.symptoms}
            onChange={handleChange}
            type="text"  name='symptoms' id='symptoms' />
            {errors.symptoms}

            


            <button type='submit' value='submit'> Submit</button>

        </form>

      
    </div>
  )
}

export default AddPatientDatail
