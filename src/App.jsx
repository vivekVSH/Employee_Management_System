import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashbord from './components/Dashboard/EmployeeDashbord'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  
  }, [])
  

  const handelLogin = (email , password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role : 'admin'}))
    }else if(authData){
      const employee = authData.employees.find((e)=> email == e.email && password == e.password)
      if (employee) {
        setUser('employees')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role : 'employee', data:employee}))
      }
    }else{
      alert('Invaid Credential')
    }
  }

  //handelLogin('user@me.com','123')
  
  return (
    <>
      {!user ? <Login handelLogin={handelLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashbord data={loggedInUserData} /> : null ) }
    </>
  )
}

export default App
