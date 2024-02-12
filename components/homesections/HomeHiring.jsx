


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function HomeHiring  () {
  return (
<>


<div>
<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
{/* <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
      <form className="flex flex-col grow px-5 mt-16 text-base capitalize text-neutral-400 max-md:mt-10 max-md:max-w-full">
        <div className="text-4xl font-bold text-stone-950 max-md:max-w-full">
          let’s get in touch{" "}
        </div>
        <div className="mt-5 text-2xl text-stone-950 max-md:max-w-full">
          We, at P.Zone, pride ourselves in delivering the finest quality
          suited for our customers' needs and will go to great lengths to
          ensure their service satisfaction. As a leading industry player, we
          strive to provide top-rated services{" "}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your full name"
            className="justify-center items-start py-5 pr-16 pl-3.5 mt-8 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5 max-md:max-w-full"
          />
        </div>
        <div className="input-container">
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="justify-center items-start py-5 pr-16 pl-3.5 mt-8 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5 max-md:max-w-full"
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter your Email"
            className="justify-center items-start py-5 pr-16 pl-3.5 mt-8 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5 max-md:max-w-full"
          />
        </div>
        <div className="input-container max-md:px-5 max-md:max-w-full">
          <textarea
            placeholder="Enter Message Here"
            className="items-start pt-5 pr-16 pb-32 pl-3.5 mt-8 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5 max-md:pb-10 max-md:max-w-full"
          />
        </div>
        <button
          type="submit"
          className="justify-center items-center px-16 py-5 mt-8 font-semibold text-center text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5 max-md:max-w-full"
        >
          Send
        </button>
      </form>
    </div> */}

     
  <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow px-5 mt-16 text-base capitalize text-neutral-400 max-md:mt-10 max-md:max-w-full">
      <div className="text-4xl font-bold text-stone-950 max-md:max-w-full">
        let’s get in touch{" "}
      </div>
      <div className="mt-5 text-2xl text-stone-950 max-md:max-w-full">
        We, at P.Zone, pride ourselves in delivering the finest quality
        suited for our customers' needs and will go to great lengths to
        ensure their service satisfaction.As a leading industry player, we
        strive to provide top-rated services{" "}
      </div>{" "}
      <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-8 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5 max-md:max-w-full">
        Enter your full name
      </div>{" "}
      <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-8 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5 max-md:max-w-full">
        Enter your mobile number
      </div>{" "}
      <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-8 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5 max-md:max-w-full">
        Enter your Email
      </div>{" "}
      <div className="items-start pt-5 pr-16 pb-32 pl-3.5 mt-8 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5 max-md:pb-10 max-md:max-w-full">
        Enter Message Here
      </div>{" "}
      <div className="justify-center items-center px-16 py-5 mt-8 font-semibold text-center text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5 max-md:max-w-full">
        send
      </div>
    </div>
  </div>{" "} 
  <Box className="flex border-style:[1px solid red] flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
    <img
      loading="lazy"
      src="/hiring/Rectangle 12533 (1).png"
      className="grow w-full aspect-[0.76] max-md:mt-10 max-md:max-w-full"
    />
  </Box>
</div>
</div>



</>
  );
}