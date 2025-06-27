import React from "react";

export default function CalButtons({getTheButton}) {

  const allButtons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];


  return (
    <>
      <div
        id="buttons-container"
        className=" flex flex-wrap justify-center gap-2 my-4"
      >
        {allButtons.map((item, index) => (
          <button
            className="basis-[25%] size-14 border-1 rounded-md hover:bg-yellow-500"
            key={index} onClick={()=> getTheButton(item)} >

            {item}

          </button>
        ))}
      </div>
    </>
  );
}
