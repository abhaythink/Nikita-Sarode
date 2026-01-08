import React from 'react'
import "../Components/PatientList.css"
import { useState } from 'react'
import AddPatientDatail from './AddPatientDatail';


const PatientList = ( { patientList , onClickBtn , onDelete , onClickMedical , setFormStatusDialog }) => {


  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td colSpan='4' >Patient List</td>
                    </tr>
                <tr>
                    <th>PatientId</th>
                    <th>Patient Name</th>
                    <th>Contact</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Symptoms</th>
                </tr>
            </thead>

            <tbody id='patientList'>
        
           { patientList.map((patient ,index )=>(
                    <tr key={ index }>
                        <td>{patient.id1 }</td>
                        <td>{patient.namePatient}</td>
                        <td>{patient.contact}</td>
                        <td>{patient.age}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.symptoms}</td>
                        <td><button 
                            onClick={ ()=> onDelete(patient.id1 )}>
                            Delete</button></td>
                    </tr>

                ) )}

            </tbody>
        </table>

        <div>

            <button  id='btnShowForm' onClick={onClickBtn}>Add Patient</button>
            <button onClick={onClickMedical}>Add Medical</button>

        </div>
      
    </div>
  )
}

export default PatientList
