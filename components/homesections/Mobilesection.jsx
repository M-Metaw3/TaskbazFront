


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function Mobilesection  () {
  return (

<div>
<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
  <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow items-end px-16 pt-12 w-full bg-violet-600 rounded-[376.176px_376.176px_188.088px_0px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="/Group 26086732.png"
        className="z-10 max-w-full aspect-[0.49] w-[387px]"
      />
    </div>
  </div>
  <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
      <div className="text-5xl text-fuchsia-800 capitalize leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-[63px]">
        Download the app and enjoy <br />
        our services{" "}
        <span className="font-bold text-fuchsia-800">anywhere</span>
      </div>
      <div className="mt-11 max-w-full w-[631px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/App Store PNG.png"
              className="grow w-full aspect-[2.78]"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/Play Store PNG.png"
              className="grow w-full aspect-[2.86]"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 text-2xl capitalize text-gray-950 max-md:max-w-full">
        We, at P.Zone, pride ourselves in delivering the finest quality
        suited for our customers' needs and will go to great lengths to
        ensure their service satisfaction.As a leading industry player, we
        strive to provide top-rated services{" "}
      </div>
    </div>
  </div>
</div>
</div>



  );
}