import React, {useState} from 'react'

const EditUserForm = (props)=>{
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange =(e)=>{
        const{name, value} = e.target
        setUser({...user, [name]:value})
    }
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.updateUser(user.id, user)
        }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
            <button>Update user</button>
            <button onClick={()=>props.setEditting(false)} className="button muted-button">Cancel</button>
        </form>
    )
}
export default EditUserForm