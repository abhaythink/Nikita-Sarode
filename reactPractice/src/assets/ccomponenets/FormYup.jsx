import React from 'react'
import {useFormik} from "formik";
import * as Yup from 'yup';


export const SchemaStructure=Yup.object({

    name1:Yup.string(10).min(3).required('Enter Name'),
    email:Yup.string().email().matches( '@(gmail|yahoo)\.com$' ,'msg-only gmail yahoo allowed').required("Please enter ur email"),
    mobileNo:Yup.string().matches( '^[0-9]{10}$' ).required()


})

const initialValues={
    name1:"",
    email:"",
    mobileNo:""
}


const FormYup = () => {

    const {values,errors,handleChange,handleSubmit } = useFormik({
        initialValues:initialValues,
        validationSchema:SchemaStructure,
        onSubmit:(values)=>{
            console.log(values);
        }
    });

    console.log('Data get/submitted :', values  );
    console.log('errors ', errors );

  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="p1">Name</label>
        <input type="text"
        value={values.name1} onChange={handleChange} name="name1" id="p1" />
        <br />

        <label htmlFor="p">Email</label>
        <input type="text"
        value={values.email}
        onChange={handleChange}
        name="email" id="p" />
        <br />

        <label htmlFor="mobile">MobileNo:</label>
        <input type="text"  name='mobileNo'
        value={values.mobileNo}
        onChange={handleChange} />

        <button type="submit">Submit</button>

    </form>
  )

}

export default FormYup
