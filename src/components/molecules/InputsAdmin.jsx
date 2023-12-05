import React from "react";

function InputsAdmin({ title, type, onChange, placeholder, name, id, value }) {
  return (
    <div>
      <label
        htmlFor="title"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}

export default InputsAdmin;
