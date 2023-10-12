import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const addTask = () => {
    if (!input) {
      alert("please add something");
    } else {
      setData([
        ...data,
        {
          taskName: input,
          date: ` ${formattedDate} ;${formattedTime}`,
        },
      ]);
      setInput("");
    }
  };
  //to erase todo using filter method.
  const removeData = (index) => {
    const removeItem = data.filter((id, idx) => {
      return idx !== index;
    });
    setData(removeItem);
  };
  //   const date = new Date();
  //   const minutes = date.getHours();
  //   //   date.getMinutes();
  //   console.log(minutes);
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  console.log(` ${formattedDate} ;${formattedTime}`);

  const dating = Date.now;
  console.log(dating);

  //   const removeData = (id) => {
  //     const removeItem = data.filter((item, index) => index !== id);
  //     setData(removeItem);
  //   };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h3 className="font-sans text-[30px]">TO_DO LIST</h3>
        {/* ******************* */}
        <div className="flex justify-around w-full">
          <input
            className="flex p-2 m-2 border rounded-full outline-none w-[45vw] font-sans text-center"
            type="text"
            placeholder="Text here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex">
            <button onClick={() => addTask()}>
              <AddCircleOutline />
            </button>
          </div>
        </div>

        <div className="m-2 p-2 text-center  font-sans text-black text-[20px] justify-around items-center">
          {data.length === 0 ? "No task yet" : ""}
          {data.map((i, index) => {
            return (
              <div key={index} className="flex">
                <div>
                  <h3 className="flex flex-row p-2 text-[15px] w-full justify-evenly">
                    {index + 1}.{i.taskName} {i.date}
                  </h3>
                </div>
                <div className="ml-96">
                  <button onClick={() => removeData(index)}>
                    <RemoveCircleOutline />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
