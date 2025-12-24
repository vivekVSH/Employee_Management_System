import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#e066dc] mt-7 rounded">
        <form className="flex w-full flex-wrap items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-500 mb-0.5">Task Title</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Enter the title" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-0.5">Date</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-0.5">Assign To</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Employee Name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-0.5">Category</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Design,dev,ect" />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-500 mb-0.5">Discriptions</h3>
            <textarea className="text-sm w-full h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px]  " name="" id="" cols="30" rows="10"></textarea>
            <button className="bg-green-500 py-3 hover:bg-green-300 px-5 rounded text-sm mt-4 w-full cursor-pointer">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
