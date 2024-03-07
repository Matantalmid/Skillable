import React, { useContext } from 'react'
import StudentProfile from '../../Components/Profiles/StudentProfile'
import { UserContext } from '../../Context/User'
function MyProfile() {
    const {user,logOutHandler}=useContext(UserContext)
  return (
    <div>
        <button onClick={logOutHandler}>LOG OUT</button>
      <StudentProfile user={user}/>
    </div>
  )
}

export default MyProfile
