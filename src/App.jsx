import { useState,useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatientList from './Components/PatientList'
import AddPatientDatail from './Components/AddPatientDatail'
import DialogTable from './Components/DialogTable'
import AddTemplate from './Components/AddTemplate'


function App() {

  useEffect(()=>{
    fetchPatients();
  
  },[] )

  const fetchPatients =  () => {
    const data = [
      {
        id1: 101,
        namePatient: 'ABC',
        contact: 1232315379,
        age: 29,
        gender: 'female',
        symptoms:'fever'
      },
      {
        id1: 773,
        namePatient: 'XYZ',
        contact: 9876543210,
        age: 35,
        gender: 'male',
        symptoms:'cold'
      }
    ];
    setPatientList(data);
  };


  const [showForm,setFormStatus]=useState(false);
  const [showFormMedical,setFormStatusMedical]=useState(false);
  const [patientList,setPatientList]=useState([]);
  
      const addPatient=(patient)=>{
        const dup=patientList.some((p)=>p.id1 === patient.id1 );
        if( dup )
        {
          alert('Patient Id already exists');
          return;
        }
        setPatientList([...patientList,patient])
      }
         
      const deletePatient=(id )=>{  
        let ans=[];
        console.log('got id with delete button- ', id );
         patientList.forEach((p)=>{
            if(p.id1 != id)
            {
              ans.push(p);
            }
         })

        setPatientList( ans );
        console.log('after deleting', ans );
      };

  return (
    <>
    <PatientList patientList={patientList}
    onClickBtn=
    {
      ()=>setFormStatus(true)
     }
     onDelete={deletePatient}
    onClickMedical={
      ()=>setFormStatusMedical(true)
    }
  />
    {showForm==true && <AddPatientDatail addPatient={addPatient} setFormStatus={setFormStatus} />}
    {showFormMedical==true && <AddTemplate patientList={patientList} setFormStatusMedical={setFormStatusMedical}/>}

     
      
        {/* <Table />
        <ReusableDialog /> */}

        <DialogTable />
        


    </>
  )
}

export default App
