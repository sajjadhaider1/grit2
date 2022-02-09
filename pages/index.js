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
      <Head><title>Founder&apos;sGrit - Welcome</title></Head>

      {/* Show message */}
      <Dialog title="Message" value="Yes" buttonType="danger" onClick={() => {setShowMessage(false); setMessage(""); setName(""); setEmail("")}} show={showMessage} message={message}/>

      {/* Body */}
      <div className="grid w-full h-full grid-cols-12 col-span-12 gap-0">

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

        {/* Second section */}
        <div className="flex justify-center col-span-12 mt-10">
          <div className="lg:w-f_page_width 3xl:w-th_page_width 4xl:w-t_page_width 5xl:w-page_width lg:self-center">
            <div className="col-span-12 md:mt-3 ">
              <div className="grid grid-cols-12 col-span-12 gap-8 bg-black-1 text-white-1">
                {/* Add text */}
                <div className="col-span-8 px-6 lg:col-span-4 3xl:col-span-5 lg:px-0">
                  <div className="text-xl font-bold lg:text-4xl">Join our Community</div>
                  <div className="text-sm lg:text-2xl">Get the latest news, resources for startups, discounts and more.</div>
                </div>

                {/* Add text */}
                <div className="grid grid-cols-12 col-span-12 px-6 lg:col-span-8 3xl:col-span-7 gap-7 lg:px-0">
                  {/* Add name */}
                  <div className="flex items-center col-span-4 overflow-hidden 3xl:col-span-4 4xl:col-span-5">
                    <Input name="name" value={name} getChange={(e) => setName(e)} required placeholder="Full Name"/>
                  </div>

                  {/* Add Email */}
                  <div className="flex items-center col-span-4 overflow-hidden lg:-ml-2 4xl:-ml-4">
                    <Input name="email" value={email} getChange={(e) => setEmail(e)} required placeholder="Email Address"/>
                  </div>

                  {/* Add button */}
                  <div className="flex items-center col-span-2 xl:col-span-1 3xl:col-span-2 md:-mt-0">
                    <Button value="Subscribe" buttonType="primary" onClick={subscribed}/>
                  </div>
                </div>
                
              </div>
            </div> 
          </div>
        </div>
        
        {/* Third section */}
        <div className="flex justify-center col-span-12 mt-14 md:mb-24">
          <div className="lg:w-f_page_width 3xl:w-th_page_width 4xl:w-t_page_width 5xl:w-page_width lg:self-center">
            <div className="col-span-12 mt-3">
              <div className="grid grid-cols-12 col-span-12 gap-3 bg-black-1 text-white-1">
                {/* Add text */}
                <div className="col-span-12 text-center">
                  <div className="text-4xl font-bold md:text-6xl-1">Upcoming events</div>
                  <div className="mt-2 text-base md:text-2xl">Grab your <span className="text-blue-3">tickets</span> now</div>
                </div>

                {/* Add events */}
                <div className="flex grid justify-center hidden grid-cols-12 col-span-12 gap-5 mt-8 md:flex">
                  {/* Add event */}
                  <div className="relative col-span-4 w-event_card rounded-lg-1">
                    {/* Add button */}
                    <div className="absolute mt-7 left-5"> <img src="/bluebutton.png" /></div>

                    {/* Add image*/}
                    <img src= "e1.png" alt="Side1" className="w-full 5xl:h-events"/>
                 
                    {/* Add text */}
                    <div className="flex items-center h-32 text-base -mt-36 2xl:-mt-32 bg-black-1 ">
                      <div className="pb-1 pl-4 text-white-1">
                        <div className="text-2xl-3">Global Fintech Summit</div>
                        <div className="text-xl">San Francisco</div>
                        <div className="text-xl">24 Feb 2022 - 28 Feb 2022</div>
                      </div>
                    </div>
                  </div>

                   {/* Add event */}
                   <div className="relative col-span-4 w-event_card">
                     {/* Add button */}
                    <div className="absolute mt-7 left-5"> <img src="/bluebutton.png" /></div>

                    {/* Add image*/}
                    <img src= "e2.png" alt="Side1" className="w-full 5xl:h-events"/>

                    {/* Add text */}
                    <div className="flex items-center h-32 text-base -mt-36 2xl:-mt-32 bg-black-1">
                      <div className="pb-1 pl-4 text-white-1">
                        <div className="text-2xl-3">Global Fintech Summit</div>
                        <div className="text-xl">San Francisco</div>
                        <div className="text-xl">24 Feb 2022 - 28 Feb 2022</div>
                      </div>
                    </div>
                  </div>

                   {/* Add event */}
                   <div className="relative col-span-4 w-event_card">
                    {/* Add button */}
                    <div className="absolute mt-7 left-5"> <img src="/bluebutton.png" /></div>

                    {/* Add image*/}
                    <img src= "e3.png" alt="Side1" className="w-full 5xl:h-events"/>

                    {/* Add text */}
                    <div className="flex items-center h-32 text-base -mt-36 2xl:-mt-32 bg-black-1">
                      <div className="pb-1 pl-4 text-white-1">
                        <div className="text-2xl-3">Global Fintech Summit</div>
                        <div className="text-xl">San Francisco</div>
                        <div className="text-xl">24 Feb 2022 - 28 Feb 2022</div>
                      </div>
                    </div>
                  </div>
                  
                </div>

              </div>
            </div> 
          </div>
        </div>

        {/* For mobile screens */}
        <div className="flex justify-center col-span-12 md:hidden">
            <div className="grid grid-cols-12 col-span-12 gap-0 mt-12 mb-10">
              <div className="flex col-span-12 bg-black-1 text-white-1 events">
                {/* Add Events */}
                <div className="flex col-span-12 space-x-6 inner_events">
                  {/* Add event */}
                  <div className="relative w-72 rounded-lg-1">
                    {/* Add button */}
                    <div className="absolute mt-7 left-5"> <img src="/mobilebluebutton.png" /></div>

                    {/* Add image*/}
                    <img src= "e1.png" alt="Side1" className=""/>
                 
                    {/* Add text */}
                    <div className="flex items-center text-base -mt-28 h-28 bg-black-1 ">
                      <div className="pb-1 pl-4 text-white-1">
                        <div className="text-xl">Global Fintech Summit</div>
                        <div className="text-sm">San Francisco</div>
                        <div className="text-sm">24 Feb 2022 - 28 Feb 2022</div>
                      </div>
                    </div>
                  </div>

                  {/* Add event */}
                  <div className="relative w-72">
                     {/* Add button */}
                    <div className="absolute mt-7 left-5"> <img src="/mobilebluebutton.png" /></div>

                    {/* Add image*/}
                    <img src= "e2.png" alt="Side1" className=""/>

                    {/* Add text */}
                    <div className="flex items-center text-base -mt-28 h-28 bg-black-1">
                      <div className="pb-1 pl-4 text-white-1">
                        <div className="text-xl">Global Fintech Summit</div>
                        <div className="text-sm">San Francisco</div>
                        <div className="text-sm">24 Feb 2022 - 28 Feb 2022</div>
                      </div>
                    </div>
                  </div>

                  {/* Add event */}
                  <div className="relative w-72">
                    {/* Add button */}
                    <div className="absolute mt-7 left-5"> <img src="/mobilebluebutton.png" /></div>

                    {/* Add image*/}
                    <img src= "e3.png" alt="Side1" className=""/>

                    {/* Add text */}
                    <div className="flex items-center text-base -mt-28 h-28 bg-black-1">
                      <div className="pb-1 pl-4 text-white-1">
                        <div className="text-xl">Global Fintech Summit</div>
                        <div className="text-sm">San Francisco</div>
                        <div className="text-sm">24 Feb 2022 - 28 Feb 2022</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Add event */}
                  <div className="relative w-72 rounded-lg-1">
                    {/* Add button */}
                    <div className="absolute mt-7 left-5"> <img src="/mobilebluebutton.png" /></div>

                    {/* Add image*/}
                    <img src= "e1.png" alt="Side1" className=""/>
                 
                    {/* Add text */}
                    <div className="flex items-center text-base -mt-28 h-28 bg-black-1 ">
                      <div className="pb-1 pl-4 text-white-1">
                        <div className="text-xl">Global Fintech Summit</div>
                        <div className="text-sm">San Francisco</div>
                        <div className="text-sm">24 Feb 2022 - 28 Feb 2022</div>
                      </div>
                    </div>
                  </div>

                  {/* Add event */}
                  <div className="relative w-72">
                    {/* Add button */}
                    <div className="absolute mt-7 left-5"> <img src="/mobilebluebutton.png" /></div>

                    {/* Add image*/}
                    <img src= "e2.png" alt="Side1" className=""/>

                    {/* Add text */}
                    <div className="flex items-center text-base -mt-28 h-28 bg-black-1">
                      <div className="pb-1 pl-4 text-white-1">
                        <div className="text-xl">Global Fintech Summit</div>
                        <div className="text-sm">San Francisco</div>
                        <div className="text-sm">24 Feb 2022 - 28 Feb 2022</div>
                      </div>
                    </div>
                  </div>

                  {/* Add event */}
                  <div className="relative w-72">
                    {/* Add button */}
                    <div className="absolute mt-7 left-5"> <img src="/mobilebluebutton.png" /></div>

                    {/* Add image*/}
                    <img src= "e3.png" alt="Side1" className=""/>

                    {/* Add text */}
                    <div className="flex items-center text-base -mt-28 h-28 bg-black-1">
                      <div className="pb-1 pl-4 text-white-1">
                        <div className="text-xl">Global Fintech Summit</div>
                        <div className="text-sm">San Francisco</div>
                        <div className="text-sm">24 Feb 2022 - 28 Feb 2022</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div> 
        </div>
        
        {/* Fourth section */}
        <div className="flex justify-center col-span-12 md:mt-5 bg-black-2">
          <div className="col-span-12 mt-14">
            <div className="grid grid-cols-12 col-span-12 gap-3 text-white-1">
              {/* Add text */}
              <div className="col-span-12 ">
                <div className="text-4xl font-bold text-center md:text-6xl-1 heading">Podcasts </div>
                  <div className="text-4xl font-bold text-center md:text-6xl-1 heading-1">Industry experts </div>
                  <div className="text-4xl font-bold text-center md:text-6xl-1 heading">Many topics</div>
              </div>

              {/* Add Buttons */}
              <div className="flex justify-center col-span-12 mt-5 space-x-2">
                <img src="/apple.png" className="hidden cursor-pointer md:flex" />
                <img src="/spotify.png" className="hidden cursor-pointer md:flex" />
                <img src="/google.png" className="hidden cursor-pointer md:flex" />

                {/* For mobile screens */}
                <img src="/mbapple.png" className="cursor-pointer md:hidden" />
                <img src="/mbspotify.png" className="cursor-pointer md:hidden" />
                <img src="/mbgoogle.png" className="cursor-pointer md:hidden" />

                <div className="flex items-center">
                <div className="h-2 md:h-3.5 w-px bg-white-1 opacity-50"></div>
                </div>
                <div className="flex items-center">
                <div className="flex items-center justify-center w-5 h-5 text-xl rounded-full bg-black-1 md:w-8 md:h-8 md:text-3xl">+</div>
              </div>
              </div>

              {/* Add div */}
              <div className="col-span-12">
                {/* Add slider */}
                <div className="col-span-12 mt-20 marquee">
                  <div className="flex col-span-12 space-x-5 inner_marquee text-white-1">
                    {/* Add card */}
                    <div className="flex-shrink-0 w-72 lg:w-slide_card">
                      <img src= "s1.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-36 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10"><img src="/ps1.png" className="hidden md:block"/><img src="/mbps1.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Speedscale enhancing API testing process</div>
                      </div>
                    </div>

                    {/* Add card */}
                    <div className="flex-shrink-0 w-72 lg:w-slide_card ">
                      <img src= "s2.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-37 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10"><img src="/ps2.png" className="hidden md:block"/><img src="/mbps2.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Luminary embracing remote</div>
                      </div>
                    </div>

                    {/* Add card */}
                    <div className="flex-shrink-0 w-72 lg:w-slide_card">
                      <img src= "s3.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-37 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10"><img src="/ps3.png" className="hidden md:block"/><img src="/mbps3.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Luminary embracing remote</div>
                      </div>
                    </div>

                    {/* Add card */}
                    <div className="flex-shrink-0 w-72 lg:w-slide_card">
                      <img src= "s4.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-37 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10 "><img src="/ps4.png" className="hidden md:block"/><img src="/mbps4.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Pushkin Speaks Innovation</div>
                      </div>
                    </div>

                    {/* Add card */}
                    <div className="flex-shrink-0 w-72 lg:w-slide_card">
                      <img src= "s5.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-37 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10"><img src="/ps5.png" className="hidden md:block"/><img src="/mbps5.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Pushkin Speaks Innovation</div>
                      </div>
                    </div>

                    {/* Add card */}
                    <div className="flex-shrink-0 hidden w-72 lg:w-slide_card md:block">
                      <img src= "s1.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-36 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10"><img src="/ps1.png" className="hidden md:block"/><img src="/mbps1.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Speedscale enhancing API testing process</div>
                      </div>
                    </div>

                    {/* Add card */}
                    <div className="flex-shrink-0 hidden w-72 lg:w-slide_card md:block">
                      <img src= "s2.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-37 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10"><img src="/ps2.png" className="hidden md:block"/><img src="/mbps2.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Luminary embracing remote</div>
                      </div>
                    </div>

                    {/* Add card */}
                    <div className="flex-shrink-0 w-72 lg:w-slide_card md:block">
                      <img src= "s3.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-37 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10"><img src="/ps3.png" className="hidden md:block"/><img src="/mbps3.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Luminary embracing remote</div>
                      </div>
                    </div>

                    {/* Add card */}
                    <div className="flex-shrink-0 hidden w-72 lg:w-slide_card md:block">
                      <img src= "s4.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-36 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10"><img src="/ps4.png" className="hidden md:block"/><img src="/mbps4.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Pushkin Speaks Innovation</div>
                      </div>
                    </div>

                    {/* Add card */}
                    <div className="flex-shrink-0 hidden w-72 lg:w-slide_card md:block">
                      <img src= "s5.png" alt="Side1" className=""/>
                      <div className="relative pl-5 -mt-40 md:-mt-36 h-52 md:h-40 opacity-90 bg-black-1 rounded-b-lg-2">
                        <div className="absolute -mt-5 md:-mt-10"><img src="/ps5.png" className="hidden md:block"/><img src="/mbps5.png" className="md:hidden"/></div>
                        <div className="absolute mt-12 text-sm md:text-xl md:mt-16">Pushkin Speaks Innovation</div>
                      </div>
                    </div>
                    
                  </div>
                </div>  
              </div>
            </div>
          </div> 
        </div>

        {/* Mentors section */}
        <div className="flex justify-center col-span-12 bg-black-1">
          <div className="lg:w-f_page_width 3xl:w-th_page_width 4xl:w-t_page_width 5xl:w-page_width lg:self-center">
            <div className="col-span-12 mt-40">
              <div className="grid grid-cols-12 col-span-12 gap-3 px-6 lg:px-0">
                {/* Add text */}
                <div className="col-span-12">
                  <div className="hidden font-bold text-center text-6xl-1 heading-1 md:block">Best Mentors through <br/>
                   out the Globe
                  </div>

                  {/* For mobile screens */}
                  <div className="text-4xl font-bold text-center heading-1 md:hidden">Best Mentors through out the Globe </div>

                  <div className="mt-2 text-base text-center md:text-3xl text-white-1">Founders Grit has helped change people lives...</div>
                </div>

                {/* Add image */}
                <div className="col-span-12 mt-8">
                  <img src="/mentors.png" className=""/>
                </div>

                {/* Add button */}
                <div className="flex justify-center col-span-12 mt-12">
                  <Button buttonType="primary-1" value="Join Now"/>
                </div>

                {/* Add text */}
                <div className="col-span-12 mt-28 mb-14">
                  <div className="text-4xl font-bold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-white-1 to-blue-1">What they say </div>
                  <div className="text-base text-center text-white-1 md:text-3xl">Founders Grit has helped change people lives...</div>
                </div>
              </div>
            </div> 
          </div>
        </div>

        {/* Comments section */}
        <div className="justify-center hidden col-span-12 comments 5xl:h-gradient lg:flex">
          <div className="flex items-center justify-center col-span-12 my-14 5xl:my-0">
            <div className="lg:w-f_page_width 3xl:w-th_page_width 4xl:w-t_page_width 5xl:w-page_width lg:self-center">

              {/* Add comments */}
              <div className="grid grid-cols-12 col-span-12 gap-6 text-white-1">
                {/* Add card */}
                <div className="grid grid-cols-12 col-span-4 gap-3 p-6 text-lg bg-black-1 5xl:text-2xl rounded-md-1 5xl:h-comment">
                  <div className="grid grid-cols-12 col-span-12 gap-3">
                    {/* Add image */}
                    <div className="col-span-3"><img src="/avatar1.png"/></div>
                    {/* Add text */}
                    <div className="grid grid-cols-12 col-span-9 gap-3">
                      {/* Add name */}
                      <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                      {/* Add date */}
                      <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                    </div>
                  </div>
                  {/* Add comment */}
                  <div className="col-span-12 mt-2 text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                </div>

                {/* Add card */}
                <div className="grid grid-cols-12 col-span-4 gap-3 p-6 text-lg bg-black-1 5xl:text-2xl rounded-md-1 5xl:h-comment">
                  <div className="grid grid-cols-12 col-span-12 gap-3">
                    {/* Add image */}
                    <div className="col-span-3"><img src="/avatar1.png"/></div>
                    {/* Add text */}
                    <div className="grid grid-cols-12 col-span-9 gap-3">
                      {/* Add name */}
                      <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                      {/* Add date */}
                      <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                    </div>
                  </div>
                  {/* Add comment */}
                  <div className="col-span-12 mt-2 text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                </div>

                 {/* Add card */}
                 <div className="grid grid-cols-12 col-span-4 gap-3 p-6 text-lg bg-black-1 5xl:text-2xl rounded-md-1 5xl:h-comment">
                  <div className="grid grid-cols-12 col-span-12 gap-3">
                    {/* Add image */}
                    <div className="col-span-3"><img src="/avatar1.png"/></div>
                    {/* Add text */}
                    <div className="grid grid-cols-12 col-span-9 gap-3">
                      {/* Add name */}
                      <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                      {/* Add date */}
                      <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                    </div>
                  </div>
                  {/* Add comment */}
                  <div className="col-span-12 mt-2 text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                </div>

                 {/* Add card */}
                 <div className="grid grid-cols-12 col-span-4 gap-3 p-6 text-lg bg-black-1 5xl:text-2xl rounded-md-1 5xl:h-comment">
                  <div className="grid grid-cols-12 col-span-12 gap-3">
                    {/* Add image */}
                    <div className="col-span-3"><img src="/avatar1.png"/></div>
                    {/* Add text */}
                    <div className="grid grid-cols-12 col-span-9 gap-3">
                      {/* Add name */}
                      <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                      {/* Add date */}
                      <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                    </div>
                  </div>
                  {/* Add comment */}
                  <div className="col-span-12 mt-2 text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                </div>

                 {/* Add card */}
                 <div className="grid grid-cols-12 col-span-4 gap-3 p-6 text-lg bg-black-1 5xl:text-2xl rounded-md-1 5xl:h-comment">
                  <div className="grid grid-cols-12 col-span-12 gap-3">
                    {/* Add image */}
                    <div className="col-span-3"><img src="/avatar1.png"/></div>
                    {/* Add text */}
                    <div className="grid grid-cols-12 col-span-9 gap-3">
                      {/* Add name */}
                      <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                      {/* Add date */}
                      <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                    </div>
                  </div>
                  {/* Add comment */}
                  <div className="col-span-12 mt-2 text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                </div>

                 {/* Add card */}
                 <div className="grid grid-cols-12 col-span-4 gap-3 p-6 text-lg bg-black-1 5xl:text-2xl rounded-md-1 5xl:h-comment">
                  <div className="grid grid-cols-12 col-span-12 gap-3">
                    {/* Add image */}
                    <div className="col-span-3"><img src="/avatar1.png"/></div>
                    {/* Add text */}
                    <div className="grid grid-cols-12 col-span-9 gap-3">
                      {/* Add name */}
                      <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                      {/* Add date */}
                      <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                    </div>
                  </div>
                  {/* Add comment */}
                  <div className="col-span-12 mt-2 text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network’s opinions, advice, or perspectives for making the right decision. </div>
                </div>
              </div>
            </div>
          </div> 
        </div>

         {/* For mobile screens */}
         <div className="flex justify-center col-span-12 lg:hidden mbcommentsbg">
            <div className="grid grid-cols-12 col-span-12 gap-0 mt-12 ">
              <div className="flex col-span-12 text-white-1 mbcomments">
                {/* Add Events */}
                <div className="flex col-span-12 space-x-6 inner_mbcomments">
                  {/* Add card */}
                  <div className="p-6 text-base w-72 bg-black-1 rounded-md-1">
                    <div className="grid grid-cols-12 col-span-12 gap-3">
                      {/* Add image */}
                      <div className="col-span-3"><img src="/avatar1.png"/></div>
                      {/* Add text */}
                      <div className="grid grid-cols-12 col-span-9 gap-3">
                        {/* Add name */}
                        <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                        {/* Add date */}
                        <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                      </div>
                    </div>
                    {/* Add comment */}
                    <div className="col-span-12 mt-2 text-sm text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                  </div>

                  {/* Add card */}
                  <div className="p-6 text-base w-72 bg-black-1 rounded-md-1">
                    <div className="grid grid-cols-12 col-span-12 gap-3">
                      {/* Add image */}
                      <div className="col-span-3"><img src="/avatar1.png"/></div>
                      {/* Add text */}
                      <div className="grid grid-cols-12 col-span-9 gap-3">
                        {/* Add name */}
                        <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                        {/* Add date */}
                        <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                      </div>
                    </div>
                    {/* Add comment */}
                    <div className="col-span-12 mt-2 text-sm text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                  </div>

                  {/* Add card */}
                  <div className="p-6 text-base w-72 bg-black-1 rounded-md-1">
                    <div className="grid grid-cols-12 col-span-12 gap-3">
                      {/* Add image */}
                      <div className="col-span-3"><img src="/avatar1.png"/></div>
                      {/* Add text */}
                      <div className="grid grid-cols-12 col-span-9 gap-3">
                        {/* Add name */}
                        <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                        {/* Add date */}
                        <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                      </div>
                    </div>
                    {/* Add comment */}
                    <div className="col-span-12 mt-2 text-sm text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                  </div>

                  {/* Add card */}
                  <div className="p-6 text-base w-72 bg-black-1 rounded-md-1">
                    <div className="grid grid-cols-12 col-span-12 gap-3">
                      {/* Add image */}
                      <div className="col-span-3"><img src="/avatar1.png"/></div>
                      {/* Add text */}
                      <div className="grid grid-cols-12 col-span-9 gap-3">
                        {/* Add name */}
                        <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                        {/* Add date */}
                        <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                      </div>
                    </div>
                    {/* Add comment */}
                    <div className="col-span-12 mt-2 text-sm text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                  </div>

                  {/* Add card */}
                  <div className="p-6 text-base w-72 bg-black-1 rounded-md-1">
                    <div className="grid grid-cols-12 col-span-12 gap-3">
                      {/* Add image */}
                      <div className="col-span-3"><img src="/avatar1.png"/></div>
                      {/* Add text */}
                      <div className="grid grid-cols-12 col-span-9 gap-3">
                        {/* Add name */}
                        <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                        {/* Add date */}
                        <div className="col-span-12 -mt-2 text-sm text-grey-2">25 Feb, 2020</div>
                      </div>
                    </div>
                    {/* Add comment */}
                    <div className="col-span-12 mt-2 text-sm text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network&apos;s opinions, advice, or perspectives for making the right decision. </div>
                  </div>

                  {/* Add card */}
                  <div className="p-6 text-base w-72 bg-black-1 rounded-md-1">
                    <div className="grid grid-cols-12 col-span-12 gap-3">
                      {/* Add image */}
                      <div className="col-span-3"><img src="/avatar1.png"/></div>
                      {/* Add text */}
                      <div className="grid grid-cols-12 col-span-9 gap-3">
                        {/* Add name */}
                        <div className="col-span-12 mt-1 font-bold">Zain ul Abideen </div>
                        {/* Add date */}
                        <div className="col-span-12 -mt-2 text-grey-2">25 Feb, 2020</div>
                      </div>
                    </div>
                    {/* Add comment */}
                    <div className="col-span-12 mt-2 text-sm text-grey-2">When it comes to making decisions, we humans aren&apos;t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network’s opinions, advice, or perspectives for making the right decision. </div>
                  </div>
                  
                </div>
              </div>
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
