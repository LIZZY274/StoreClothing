import React from "react";

function CheckSize({ type, id, onChange, value, checked, msj }) {
  return (
    <>
      <div className="flex flex-row gap-1">
        <input
          className="cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100"
          type={type}
          id={id}
          onChange={onChange}
          value={value}
          checked={checked}
        />
        <span>{msj}</span>
      </div>
    </>
  );
}

export default CheckSize;
