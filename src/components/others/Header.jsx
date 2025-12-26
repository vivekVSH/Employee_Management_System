import React, { useState } from 'react'

const Header = (props) => {

  // const [userName, setUserName] = useState('')
  
  // if(!data){
  //   setUserName('admin')
  // }else{
  //   setUserName(data.firstName)
  // }
  //console.log(data)

  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>UserName</span> </h1>
      <button onClick={logoutUser} className='bg-red-500 text-white cursor-pointer px-5 py-2 text-lg font-medium rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header
