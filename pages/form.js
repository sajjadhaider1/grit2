// Welcome page

// Import react
import React, { useState, useRef, useEffect } from "react";

// Import router and head from next
import Router from 'next/router';
import Head from 'next/head';

// Import supabase configuration
import supabase from '../config/supabase';

// Import component
import Button from '../components/button/button';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Input from '../components/input/input';
import Dialog from '../components/dialog/dialog';

export default function Home() {

  const [background, setBackground] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(async () => {
    // Change background with vertical scroll
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 50) {
        setBackground(true);

      } else {
        setBackground(false);
      }
    }
  }, [])

  // Subscribed
  const subscribed = async() => {
    setShowMessage(true);
    setMessage(name + "  has been subscribed with email :  " + email);

    // Supabase request
    var { data, error } = await supabase.from('foundersgrit').insert([{ email: email, name: name}]);
  }

  return (
    <div className="bg-black-1">
      {/* Header */}
      <Header bg={background}/>

      {/* Add page title */}
      <Head><title>Founder&apos;s Grit - Welcome</title></Head>

      {/* Show message */}
      <Dialog title="Message" value="Yes" buttonType="danger" onClick={() => {setShowMessage(false); setMessage(""); setName(""); setEmail("")}} show={showMessage} message={message}/>

      {/* Body */}
      <div className="grid w-full h-full grid-cols-12 col-span-12 gap-0">

        {/* First section */}
        {/* First section */}
        <div className="flex justify-center col-span-12 -mt-24 foundersgrit ">
          <div className="flex items-center col-span-12 mt-3 md:grid md:grid-cols-12 md:gap-3">
            {/* Add text */}
            <div className="col-span-12 text-white-1">
              {/* Add div */}
                <div className="text-4xl font-bold text-center lg:text-8xl">Founder&apos;s Grit</div>
                <div className="mt-4 text-base text-center lg:text-5xl">Inspiring Life Stories Of Engineering & <br/> Technology Entrepreneurs Globally</div>
                <div className="flex justify-center mt-5"><Button value="Join now" buttonType="primary-1"/></div>
            </div>
          </div> 
        </div>





        {/* Form section */}
        <div className="col-span-12 px-4 mx-auto my-40 lg:px-0">

        <div className="z-40 flex flex-wrap -mb-10 place-content-end ">
        <div className="inline-block p-1.5 font-semibold leading-none bg-blue-1 text-white-1 ">1 of 3</div>
        </div>

          <div className="flex flex-wrap justify-start mb-10">
          <h2 className="w-full text-4xl font-bold text-white-1">Founder’s Grit Application</h2>
          <h3 className="w-full text-xl text-white-1">Apply here to be considered and we will review your application. </h3>
          </div>

          <div className="flex flex-wrap justify-start mb-10">
            <label className="w-full text-white-1">
            What gives your company the 'unfair' competitive advantage?</label>
            <input type="text" className="w-full p-3 border border-solid rounded text-white-1 bg-black-1 border-white-1"
              id="abc" placeholder="E.g. patents, technology, expertise, network etc." />
          </div>

          <div className="flex flex-wrap justify-start mb-10">
            <label className="w-full text-white-1">
            Why is now the right time for your product/solution for your specific market?</label>
            <input type="text" className="w-full p-3 border border-solid rounded text-white-1 bg-black-1 border-white-1"
              id="abc" placeholder="E.g. patents, technology, expertise, network etc." />
          </div>

          <div className="flex flex-wrap justify-start mb-10">
            <label className="w-full text-white-1">
            Describe your company's current traction *</label>
            <input type="text" className="w-full p-3 border border-solid rounded text-white-1 bg-black-1 border-white-1"
              id="abc" placeholder="E.g. patents, technology, expertise, network etc." />
          </div>

          <div className="flex flex-wrap justify-start mb-10 ">
                  <Button value="Join Now" buttonType="primary-2" />
                </div>


        </div>









        {/* Info section */}
        <div className="flex justify-center col-span-12 bg-black-2">
          <div className="px-6 mt-20 lg:w-f_welcome_page 3xl:w-th_welcome_page 4xl:w-t_welcome_page 5xl:w-welcome_page lg:self-center lg:px-0">
            {/* Add div */}
            <div className="grid grid-cols-12 col-span-12 gap-3 text-white-1">
              {/* First div */}
              <div className="grid grid-cols-12 col-span-12 gap-3 text-base md:col-span-5">
                {/* Add image */}
                <div className="col-span-12">
                  <img className="cursor-pointer" src="/txtlogo.png" alt="FoundersGrit" />
                </div>
                {/* Add text */}
                <div className="col-span-12 mt-6 text-sm md:col-span-10 md:text-base md:mt-4">
                  To bridge the gap, the world of Fintech will come to Pakistan as Gaper brings to you the first and the largest Global Fintech Summit in December 2021, hosted virtually. Global FinTech will bring together 500+ influencers and innovators who are pioneering the new wave of innovation across financial services.
                </div>
                <div className="justify-between hidden mt-20 mb-10 text-sm md:col-span-10 lg:col-span-6 md:flex">
                  <div>Terms</div>
                  <div>Privacy</div>
                  <div>GDPR</div>
                  <div>Contact Us</div>
                </div>
              </div>

              {/* Add space */}
              <div className="hidden md:flex md:col-span-2"></div>

              {/* Second div */}
              <div className="grid grid-cols-12 col-span-12 gap-3 mb-8 md:col-span-5 md:-ml-16">
                {/* Add text */}
                <div className="col-span-12 mt-10 md:mt-0 text-3xl-1">Available For Help</div>
                <div className="col-span-12 text-base">24 Hours A Day - 5 Days A Week</div>

                {/* Add icons */}
                <div className="grid grid-cols-12 col-span-12 gap-3 mt-5 md:col-span-10">
                  <div className="relative w-16 h-16 col-span-3 rounded-full lg:col-span-2 bg-black-1"><svg className="absolute left-5 top-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="rgba(255,255,255,1)"/></svg></div>
                  <div className="flex items-center col-span-9 -ml-4 text-xs font-semibold lg:col-span-10 md:text-base md:-ml-0">info@gaper.io</div>
                </div>
                <div className="grid grid-cols-12 col-span-10 gap-3">
                  <div className="relative w-16 h-16 col-span-3 rounded-full lg:col-span-2 bg-black-1"><svg className="absolute left-5 top-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" fill="rgba(255,255,255,1)"/></svg></div>
                  <div className="flex items-center col-span-9 text-xs font-semibold lg:col-span-10 md:text-base">+1(530)324 2349</div>
                </div> 
                <div className="grid grid-cols-12 col-span-10 gap-3">
                  <div className="relative w-16 h-16 col-span-3 rounded-full lg:col-span-2 bg-black-1"><svg className="absolute left-5 top-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="rgba(255,255,255,1)"/></svg></div>
                  <div className="flex items-center col-span-9 text-xs font-semibold lg:col-span-10 md:text-base">167 Albacore Ln, Foster City, CA 94404, USA</div>
                </div>

                <div className="flex justify-between col-span-10 mt-10 text-xs md:hidden">
                  <div>Terms</div>
                  <div>Privacy</div>
                  <div>GDPR</div>
                  <div>Contact Us</div>
                </div>
              </div>
            </div>             
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center col-span-12 md:mt-10">
          <Footer />
         </div>

      </div>
    </div>
  )
}
