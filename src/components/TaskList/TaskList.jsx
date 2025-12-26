import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data, onAccept, onMarkComplete, onMarkFailed}) => {
  return (
    <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 py-5'>
      {(data?.tasks || []).map(function(elem, idx) {
        if(elem.active){
          return <AcceptTask key={idx} data={elem} onMarkComplete={() => onMarkComplete?.(idx)} onMarkFailed={() => onMarkFailed?.(idx)} />
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem} onAccept={() => onAccept?.(idx)} />
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
        return null
      })}   
    </div>
  )
}

export default TaskList
