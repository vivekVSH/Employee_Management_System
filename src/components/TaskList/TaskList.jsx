import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 py-5'>
      <div className='h-full flex-shrink-0 w-[320px] p-5 bg-amber-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-300 px-3 text-sm py-1 rounded'>Height</h3>
            <h4 className='text-sm'>20 Dec 2024</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-5'>Make youtube a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vel reprehenderit modi nostrum illum placeat!</p>
      </div>
      <div className='h-full flex-shrink-0 w-[320px] p-5 bg-pink-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-300 px-3 text-sm py-1 rounded'>Height</h3>
            <h4 className='text-sm'>20 Dec 2024</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-5'>Make youtube a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vel reprehenderit modi nostrum illum placeat!</p>
      </div>  
      <div className='h-full flex-shrink-0 w-[320px] p-5 bg-red-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-300 px-3 text-sm py-1 rounded'>Height</h3>
            <h4 className='text-sm'>20 Dec 2024</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-5'>Make youtube a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vel reprehenderit modi nostrum illum placeat!</p>
      </div>  
      <div className='h-full flex-shrink-0 w-[320px] p-5 bg-green-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-300 px-3 text-sm py-1 rounded'>Height</h3>
            <h4 className='text-sm'>20 Dec 2024</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-5'>Make youtube a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vel reprehenderit modi nostrum illum placeat!</p>
      </div>     
    </div>
  )
}

export default TaskList
