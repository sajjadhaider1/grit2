// Show dialog to user
import React from 'react';

import Button from '../button/button';

export default function Dialog(props) {

    // Render div
    return <div className={`fixed flex items-center justify-center z-10 top-0 left-0 w-full h-full overflow-hidden ${ props.show ? "" : "hidden" }`}>

        {/* Add backdrop */}
        <div className="absolute top-0 left-0 bg-black-1 opacity-40 w-full h-full"></div>

        {/* Render the content */}
        <div className="relative w-full bg-white-1 shadow-md w-5/6 sm:w-3/5 md:w-1/2 lg:w-2/6 p-3 rounded-md box-border">

            {/* Add Title */}
            <div className="text-base 2xl:text-2xl font-text font-bold">{props.title}</div>

            <div className="text-base 2xl:text-2xl font-text mb-5">
               {props.message}
            </div>

            {/* Render childern */}
            <div className="flex justify-end">
                {props.children}

                {/* Render button */}
                <Button type="button" className="w-10" value="Okay" buttonType="primary-3" onClick={props.onClick} />
            </div>      
        </div>
    </div>
}