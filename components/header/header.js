// The Header Component

// Libraries
import Router from "next/router";
import React, { useEffect, useState } from "react";

// Import component
import Button from '../button/button';

// Header
function Head({bg}) {

    // Render
    return (
        <>
            <div className={`flex md:justify-center justify-start w-full h-28 md:h-28 ${bg && 'bg-black-1'} sticky z-10 top-0`}>
                <div className={`col-span-12 grid grid-cols-12 gap-0 lg:w-f_welcome_page 3xl:w-th_welcome_page 4xl:w-t_welcome_page 5xl:w-welcome_page lg:self-center px-6 md:px-0`}>

                    {/* First div */}
                    <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-3 flex flex-wrap content-center">
                        <div className="col-span-3 md:col-span-7 text-white-1" onClick={() => Router.replace("/")}>
                            <img className="cursor-pointer" src="/txtlogo.png" alt="Foundersgrit" />
                        </div>
                        {/* For small screens */}
                        <div className="md:hidden col-span-9 flex justify-end items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>                        
                        </div>

                        <div className="col-span-4 justify-between text-white-1 flex items-center text-xl font-normal hidden md:flex">
                            <div className="cursor-pointer" onClick={() => Router.push("/course")}>Courses</div>
                            <div className="cursor-pointer">Events</div>
                            <div className="cursor-pointer">Blogs</div>
                        </div>
                        
                    </div>

                    {/* Second div */}
                    <div className="col-span-4 hidden md:flex md:justify-end flex items-center">
                        <Button buttonType="primary" value="Apply now" onClick={() => Router.push("/course")}/>
                    </div>
               </div>
            </div>
        </>
    );
}

// Export the Component
export default Head;
