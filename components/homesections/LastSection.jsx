


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function LastSection  () {
  return (

<div>
<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col justify-center self-stretch px-5 my-auto capitalize max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb69f096b5b9c996b3bb7073f789dc757d7de4962e4d9a0e9740912b6a5bb83e?"
        className="max-w-full aspect-square w-[131px]"
      />
      <div className="mt-3.5 text-3xl text-black max-md:max-w-full">
        We are granted
      </div>
      <div className="mt-6 text-2xl text-gray-950 max-md:max-w-full">
        We, at P.Zone, pride ourselves in delivering the finest quality
        suited for our customers' needs and will go to great lengths to
        ensure their service satisfaction.As a leading industry player, we
        strive to provide top-rated services{" "}
      </div>
    </div>
  </div>{" "}
  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
    <img
      loading="lazy"
      src="/Rectangle 3815.png"
      className="grow w-full aspect-[2.04] max-md:mt-5 max-md:max-w-full"
    />
  </div>
</div>
</div>
  );
}