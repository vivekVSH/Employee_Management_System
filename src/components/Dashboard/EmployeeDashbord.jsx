import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashbord = (props) => {
  const [users, setUsers] = useContext(AuthContext)

  const persistUsers = (updated) => {
    setUsers(updated)
    // store in same structure used by app (an array with an object that has `employees`)
    localStorage.setItem('employees', JSON.stringify([{ employees: updated }]))
  }

  const updateTask = (taskIndex, updater) => {
    if (!props.data) return
    const empId = props.data.id
    const cloned = users.map(u => ({ ...u, tasks: u.tasks.map(t => ({ ...t })) }))
    const idx = cloned.findIndex(u => u.id === empId)
    if (idx === -1) return
    const tasks = cloned[idx].tasks
    const task = tasks[taskIndex]
    if (!task) return
    // apply updater which modifies the task object
    updater(task)
    // recompute taskCount
    const counts = { active: 0, newTask: 0, completed: 0, failed: 0 }
    tasks.forEach(t => {
      if (t.active) counts.active++
      if (t.newTask) counts.newTask++
      if (t.completed) counts.completed++
      if (t.failed) counts.failed++
    })
    cloned[idx].taskCount = counts
    persistUsers(cloned)
    // update local logged-in data shown in App
    if (props.setLoggedInUserData) {
      props.setLoggedInUserData({ ...cloned[idx] })
    }
  }

  const handleAccept = (taskIndex) => {
    updateTask(taskIndex, (t) => {
      t.newTask = false
      t.active = true
      t.completed = false
      t.failed = false
    })
  }

  const handleMarkComplete = (taskIndex) => {
    updateTask(taskIndex, (t) => {
      t.newTask = false
      t.active = false
      t.completed = true
      t.failed = false
    })
  }

  const handleMarkFailed = (taskIndex) => {
    updateTask(taskIndex, (t) => {
      t.newTask = false
      t.active = false
      t.completed = false
      t.failed = true
    })
  }

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber data={props.data}/>
      <TaskList data={props.data} onAccept={handleAccept} onMarkComplete={handleMarkComplete} onMarkFailed={handleMarkFailed} />
    </div>
  )
}

export default EmployeeDashbord
