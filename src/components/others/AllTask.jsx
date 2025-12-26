import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const auth = useContext(AuthContext) || [];
  const [userData, setUserData] = auth;

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded mb-2'>
      <div className='bg-red-600 py-2 mb-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 '>UserName</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>
      <div className='overflow-auto'>
        {(userData || []).map(function(elem, idx){
        return (
          <div key={elem?.id || idx} className='bg-emerald-600 py-2 mb-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-yellow-500'>{elem?.taskCount?.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-pink-500'>{elem?.taskCount?.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-500'>{elem?.taskCount?.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-purple-500'>{elem?.taskCount?.failed}</h5>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default AllTask
