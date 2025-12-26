import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashbord from './components/Dashboard/EmployeeDashbord'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData , setUserData] = useContext(AuthContext)
  // console.log(authData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data || null)
    }

  }, [])
  

  const handelLogin = (email , password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (userData) {
      const employee = userData.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        return
      }
    }

    alert('Invalid credentials')
  }

  //handelLogin('user@me.com','123')
  
  return (
    <>
      {!user ? <Login handelLogin={handelLogin}/> : ''}
      {user == 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == 'employee' ? (
        <EmployeeDashbord changeUser={setUser} data={loggedInUserData} setLoggedInUserData={setLoggedInUserData} />
      ) : null}
    </>
  )
}

export default App
