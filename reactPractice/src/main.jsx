import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios';

//
const api=axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"

});

// before api call
api.interceptors.request.use(
  config=>{
    const token=localStorage.getItem("token");
    if(token)
    {
      config.headers.setAuthorization=`Bearer ${token}`;
    }
    console.log('request : ', config );
    return config;
  },
  (error)=>{
    return Promise.reject(error);
  }

)

api.interceptors.response.use(
  (response) => {
    console.log("Response got:", response);
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      alert("plz login");
      localStorage.removeItem("token");
    
    }

    return Promise.reject(error);
  }
);




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />

  </StrictMode>,
)

export default api;
