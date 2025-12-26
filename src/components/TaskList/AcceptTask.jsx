import React from "react";

const AcceptTask = ({data, onMarkComplete, onMarkFailed}) => {
  return (
    <div className="h-full flex-shrink-0 w-[320px] p-5 bg-amber-400 rounded-xl ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-300 px-3 text-sm py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-5">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className="flex justify-between mt-4 gap-2">
        <button onClick={onMarkComplete} className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-md text-sm transition">Mark As Completed</button>
        <button onClick={onMarkFailed} className="bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-md text-sm transition">Mark As Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
