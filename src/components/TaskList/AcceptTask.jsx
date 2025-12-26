import React from "react";

const AcceptTask = ({data}) => {
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
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">Mask As Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark As Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
