import React, { useEffect, useState } from 'react';
import './AddTemplate.css'


const AddTemplate = ({ patientList=[], setFormStatusMedical,setFormStatus  }) => {

  const [template, setTemplate] = useState('');
  const [isPresent , setPresent ] = useState(false );
  const [data, setDataSymptoms] = useState({
    id:'',
    symptoms: ''
  });

  const templates = {
    fever: {
      symptoms: 'Fever, Ache',
    },
    diabetes: {
      symptoms: 'Thirst',
    }
  };


  useEffect(() => {
    if (template && templates[template]) {
      setDataSymptoms(prev=>({
        ...prev,
        symptoms:templates[template].symptoms 
      }));
    }
  }, [template]);

  const handleChange = (e) => {
    setDataSymptoms({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  const isPatientPresent = patientList.some(
    (p) => p.id1 === Number(data.id)
  );

  if (!isPatientPresent) {
    setFormStatusMedical(true);
    return;
  }

  setFormStatusMedical(false);
  console.log('Medical Note Saved:', data);

    //check that patientId is available or not , if available then add template and symbtoms in formData
    patientList.forEach((p)=>{
        if(p.id1 === data.id )
            console.log('found , ', p.id1 );
      })
    console.log('Medical Note Saved:', data);
    };

  return (
    <div className='formContainer'>
            <form onSubmit={handleSubmit} className='patient-form' >

            <label htmlFor="id">Enter Patient-Id</label>
            <input type="number" name='id'
            value={data.id}
            onChange={handleChange}
            />
            <br />
            <br />

            <label>Select Symptoms:</label>
            <select value={template} onChange={(e) => setTemplate(e.target.value)}>
                <option value="">Select Template</option>
                <option value="fever">Fever</option>
                <option value="diabetes">Diabetes</option>
            </select>

            <br/>
            <input
                name="symptoms"
                value={data.symptoms}
                onChange={handleChange}
                placeholder="Symptoms"
            />

            <br />

            <button type="submit">Submit</button>

            </form>
    </div>
  );
};

export default AddTemplate;
