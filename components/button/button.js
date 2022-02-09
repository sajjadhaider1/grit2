// The Input Component
// This component will give the us the most
// import functionality. We will use this
// to get input from user.

// Libraries
import next from 'next';
import React, { useEffect, useState } from 'react';

// Component
function Button({
    value = "Button",
    type = "button",
    loading = false,
    disabled = false,
    buttonType = "",
    width = "", 
    linkColor = "",
    className="",
    onClick
}) 
{

    const [style, setStyle] = useState("");

    // Function to handle onClick event
    const onClickEvent = () => {
      type == "submit" ? null : onClick();
    };

    useEffect(() => {
        // Setup class based on type
        switch (buttonType) {
            // Handle case
            case "primary":
                // Setup as primary
                setStyle("w-28 md:w-48 px-7 h-9 md:h-14 bg-blue-2 text-sm md:text-2xl rounded-md text-white-1 hover:bg-blue-hover")
                break;

            case "primary-1":
                setStyle("w-32 md:w-72 px-7 h-10 md:h-20 bg-blue-2 text-sm md:text-2xl rounded-md-1 text-white-1 hover:bg-blue-hover")
                break;

            case "primary-2":
                setStyle("w-auto px-6 h-10 bg-blue-1 text-base text-white-1 hover:bg-blue-hover")
                break;

            case "primary-3":
                // Setup as primary
                setStyle("w-24 px-7 h-12 bg-blue-2 text-sm md:text-2xl rounded-md text-white-1 hover:bg-blue-hover")
                break;

            case "secondary":
                // Setup as secondary
                setStyle("bg-white-1 border-white-3 h-10 border text-lg text-black-1 hover:text-accent-primary hover:border-accent-hover")
                break;

            default:
                // Setup as default
                setStyle("w-full h-10 bg-accent-primary text-lg text-white-1 hover:bg-accent-hover")
                break;
        }
    }, [buttonType]);

    // Render Button
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClickEvent}
            className={`flex justify-center items-center font-text py-1 rounded-sm box-border transition-colors focus:outline-none ${style} ${width} ${linkColor} ${className}`}
        >
            {value}    
        </button>
    )
}

// Export the Component
export default Button;