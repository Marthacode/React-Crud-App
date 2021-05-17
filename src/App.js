import React, {useState} from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import './App.css'


const App = () =>{

  const usersData = [
    {id:1, name:'Mat', username:'martmat'},
    {id:2, name:'Dav', username:'davdance'},
    {id:3, name:'Juliet', username:'julyjuly'},
  ]
  const [users, setUsers] = 
  useState(usersData)
  
  const addUser = (user) =>{
    user.id=users.length + 1
    setUsers([...users,user])
  }

  const deleteUser= (id)=>{
    setUsers(users.filter((user)=>user.id !==id))
  }

  const [editting, setEditting] =useState(false)

  const initialFormState ={id:null, name:'', username:''}

  const [currentUser, setCurrentUser]=useState(initialFormState)

  const editRow =(user)=>{
    setEditting(true)

  
    setCurrentUser({id:user.id, name:user.name, username:user.username})
  }
   
  const updateUser =(id, updatedUser) => {setEditting(false)
    setUsers(users.map((user) => (user.id===id ? updatedUser : user)))
  }

  return(
    <div className="container">
      <h1>Crud App</h1>
      <div className="flex-row">
      <div className="flex-large">
        {editting ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm 
            setEditting={setEditting}
            currentUser={currentUser}
            updateUser={updateUser} />
          </div>
        ):(
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div> 


    </div>

  )
 
}

export default App;