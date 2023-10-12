import React from "react";
import Todo from "./Todo";

const Master = () => {
  return (
    <div className="flex flex-col bg-slate-900 h-[100vh] justify-center items-center">
      <div className="h-[60vh] overflow-scroll w-[50vw] bg-blue-300 border rounded-lg  flex text-center justify-center">
        <Todo />
      </div>
    </div>
  );
};

export default Master;
