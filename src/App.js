import React from 'react'
import Profile from './Component/Profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import myImg from './log.png'


  


const App = () => {
  const myProfile =[{
    FullName:'dorsaf',
    bio:'hjkkbnn',
    profession:"info"}



  
  ]
  const handleName=(name)=>{
  alert(`the profile name is ${name}`)}
  return (
    <div>
      <Profile myProfile={myProfile} handleName={handleName}>
      {myImg}
      </Profile>



      
    </div>
  )
}

export default App

