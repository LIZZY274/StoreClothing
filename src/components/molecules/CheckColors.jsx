import React from "react";

function CheckColors({ type, id, onChange, value, checked, colors }) {
  return (
    <>
      <div className="flex flex-row gap-1 relative p-[4px]  w-6 h-6 items-center justify-center  focus:border-[#000]">
        <input
          className=" value cursor-pointer border-2 w-5 h-5 opacity-0  z-10"
          type={type}
          id={id}
          onChange={onChange}
          value={value}
          checked={checked}
        />
        <span className={`  p-2 cursor-pointer w-5 z-1 ${colors} h-5 rounded-full absolute`}></span>
      </div>
    </>
  );
}

export default CheckColors;
