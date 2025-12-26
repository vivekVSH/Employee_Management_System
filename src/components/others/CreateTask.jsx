import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData , setUserData] = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDiscriptions, setTaskDiscriptions] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskAssign, setTaskAssign] = useState('')
  const [taskCategory, setTaskCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandeler = (e) => {
    e.preventDefault()
    setNewTask({setTaskCategory,setTaskDate,setTaskDiscriptions,setTaskTitle,active:false,newTask:true,completed:false,failed:false})
    const data = userData

    data.forEach(function(elem) {
      if(taskAssign == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCount.newTask = elem.taskCount.newTask + 1  
      }
    })
    setUserData(data)

    setTaskAssign('')
    setTaskCategory('')
    setTaskDate('')
    setTaskDiscriptions('')
    setTaskTitle('')
  }

  return (
    <div className="p-5 bg-[#e066dc] mt-7 rounded">
        <form onSubmit={(e) => {
          submitHandeler(e)
        }} className="flex w-full flex-wrap items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-500 mb-0.5">Task Title</h3>
              <input value={taskTitle} onChange={(e) => {
                setTaskTitle(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Enter the title" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-0.5">Date</h3>
              <input value={taskDate} onChange={(e) => {
                setTaskDate(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-0.5">Assign To</h3>
              <input value={taskAssign} onChange={(e) => {
                setTaskAssign(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Employee Name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-0.5">Category</h3>
              <input value={taskCategory} onChange={(e) => {
                setTaskCategory(e.target.value)
              }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Design,dev,ect" />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-500 mb-0.5">Discriptions</h3>
            <textarea value={taskDiscriptions} onChange={(e) => {
              setTaskDiscriptions(e.target.value)
            }} className="text-sm w-full h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px]  " name="" id="" cols="30" rows="10"></textarea>
            <button className="bg-green-500 py-3 hover:bg-green-300 px-5 rounded text-sm mt-4 w-full cursor-pointer">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
