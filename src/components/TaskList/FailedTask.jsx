import React from 'react'

const FailedTask = () => {
  return (
    <div className="h-full flex-shrink-0 w-[320px] p-5 bg-amber-400 rounded-xl ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-300 px-3 text-sm py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-5">Make youtube a video</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className="mt-2">
        <button className="w-full ">Failed</button>
      </div>
    </div>
  )
}

export default FailedTask
