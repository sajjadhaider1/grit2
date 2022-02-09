// Course page

// Import react
import React, { useState, useRef, useEffect } from "react";

import { Widget } from '@typeform/embed-react';

// Import router and head from next
import Router from 'next/router';
import Head from 'next/head';

// Import component
import Button from '../components/button/button';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default function Courses() {

    const [blog, setBlog] = useState({});

  return (
    <>
      {/* Header */}
      <Header bg={true}/>

      {/* Add page title */}
      <Head><title>Founder&apos;sGrit - Courses</title></Head>

      {/* Body */}
      <div className="col-span-12 grid grid-cols-12 gap-0 h-full w-full">

        {/* First section */}
        <div className="col-span-12 flex justify-center bg-white-17">
          <div className="lg:w-f_welcome_page 3xl:w-th_welcome_page 4xl:w-t_welcome_page 5xl:w-welcome_page lg:self-center py-12">
            {/* Add div */}
            <div className="col-span-12 grid grid-cols-12 gap-0 px-4 md:px-0">
                {/* Add div */}
                <div className="col-span-12 font-medium text-base flex">Home
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                    Frontend Development with ReactJS
                </div>

                <div className="col-span-12 grid grid-cols-12 gap-3 mt-4">
                    {/* Add text */}
                    <div className="col-span-12 md:col-span-7 font-bold text-3xl md:text-5xl mt-2">
                        Frontend Development with ReactJS
                    </div>
                    {/* Space */}
                    <div className="hidden md:flex col-span-3"></div>
                    <div className="col-span-2  font-medium -mt-5 hidden md:block">
                        Offered by
                        <img src="/textlogo.png" alt="Logo" className="mt-7 flex justify-end"/>
                    </div>
                    <div className="col-span-12 md:col-span-8 text-xl">
                        Pre requisite ‘JavaScript Beginners Course’. Ability to create frontend and use it with Backend and Redux to build flexible, scalable and beautiful websites.
                    </div>
                    {/* Add rating */}
                    <div className="col-span-12 md:col-span-5 flex">
                        <div className="col-span-5 flex space-x-1">
                            <img src="/star.png" alt="rate" />
                            <img src="/star.png" alt="rate" />
                            <img src="/star.png" alt="rate" />
                            <img src="/star.png" alt="rate" />
                            <img src="/star.png" alt="rate" />
                        </div>
                       
                        <div className="text-orange-2 text-lg font-semibold ml-5 flex items-center -mb-1">
                            4.7
                            <span className="ml-10 font-medium text-black-1">1,243 Ratings</span>
                        </div>

                    </div>

                    <div className="col-span-12 grid grid-cols-12 gap-3 mt-10">
                        <div className="col-span-3 md:col-span-1">
                            <img src="/hassan.png" alt="User"/>
                        </div>
                        <div className="col-span-7 md:col-span-3 flex items-center text-base">
                            by &nbsp;<span className="font-extrabold">Hassan Riaz</span>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-7 mt-5">
                        <Button value="Enroll now" buttonType="primary-2" />
                        <div className="h-bar bg-black-1 mt-10"></div>
                        <div className="col-span-6 flex justify-between mt-5 mr-9 md:mr-14 text-sm md:text-xl">
                            <div>
                                Duration:
                            </div>
                            <div>
                                Total Enrolled:
                            </div>
                            <div>
                                Last update:
                            </div>

                        </div>
                        <div className="col-span-6 flex justify-between mt-2 text-base md:text-2xl font-medium">
                            <div>
                                80h
                            </div>
                            <div>
                               3
                            </div>
                            <div>
                                August 27,2020
                            </div>
                        </div>
                        {/* Add bar */}
                        <div className="h-bar bg-black-1 mt-5"></div>
                    </div>

                </div>                
            </div> 
          </div>
        </div>

        {/* Second section */}
        <div className="col-span-12 flex justify-center bg-white-1">
            <div className="lg:w-welcome_page lg:self-center py-24">
                {/* Add div */}
                <div className="col-span-12">
                    {/* Add form */}
                    <Widget id="MMwZDbPQ" className="h-typeform static" />
                </div>
            </div>

        </div>

         {/* Footer */}
         <div className="col-span-12 flex justify-center">
          <Footer />
         </div>

      </div>
    </>
  )
}
