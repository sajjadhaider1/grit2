// The Input Component
// This component will give the us the most
// import functionality. We will use this
// to get input from user.

// Libraries
import React, {useState} from "react";

// Input Component
function Input({
  type = "text",
  name = "input",
  placeholder = "Input",
  disabled = false,
  checked = false,
  required = false,
  pattern = ".*",
  value = "",
  min = "",
  max= "",
  getChange,
}) {


  const onChangeEvent = (e) => {
    if(type == "checkbox"){
      getChange(e);
    }
    else{
      getChange(e.target.value);
    }
  };

  // Render div
  return <div className="">
    {/* input field */}
    <input
      type="text"
      name={name}
      min={min}
      max={max}
      checked ={checked}
      placeholder={placeholder}
      className={`border-b border-white-2 h-12 pl-3 w-auto py-1 font-normal bg-black-1 placeholder-white-2 text-white-2 text-sm lg:text-base 2xl:text-2xl outline-none`}
      disabled={disabled}
      required={required}
      pattern={pattern}
      value={value}
      onChange={onChangeEvent}
    />
    </div>
  
}

// Export the Component
export default Input;
