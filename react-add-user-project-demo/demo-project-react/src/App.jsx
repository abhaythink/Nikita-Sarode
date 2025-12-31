import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'

function App() {
  const [count, setCount] = useState(0)
  const [users,setUsers]=useState([]);

  const addUserList=(n,a)=>{
    setUsers((preUserList)=>
      {
        return [...preUserList,{name:n,age:a, id:Math.random().toString()
        }];
      })
  }

  return (
    
    <div>
      
      <AddUser onAddUser={addUserList } />
      <UsersList users={ users } />

    </div>
  )
}

export default App
