


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';


import Link from 'next/link';

import React from 'react';

export default  function Homesection2  () {
  return (
<>



<div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start px-5 mt-2 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-stretch text-center capitalize max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto my-auto text-2xl leading-5 text-stone-950">
            add new Card
          </div>{" "}
          <div className="justify-center items-center px-16 py-5 text-base font-semibold text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
            Add Card
          </div>
        </div>{" "}
        <div className="shrink-0 self-stretch mt-2.5 h-px bg-gray-200 rounded-2xl max-md:max-w-full" />{" "}
        <div className="flex gap-2 justify-between items-center py-3.5 pr-20 pl-4 text-base font-semibold capitalize whitespace-nowrap rounded-xl bg-zinc-100 text-slate-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b00f0831108158874574958014291587e6d2bfeeb053a15ff429f717f68b42?"
            className="self-stretch my-auto w-8 aspect-[1.59]"
          />{" "}
          <div className="self-stretch my-auto">MasterCard</div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/77012c1fc38282c8cde04d4ceccdf5d47facb4388a1412c133fcecd43f60260e?"
            className="self-stretch my-auto aspect-[3.23] fill-blue-700 w-[51px]"
          />{" "}
          <div className="self-stretch my-auto">Visa</div>{" "}
          <div className="flex gap-3 justify-between self-stretch text-2xl text-stone-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b57ea60f7c19f6bdd2be2de18f8ad385f8981a86d43d329c58355a13a68b2675?"
              className="w-6 aspect-[0.83]"
            />{" "}
            <div className="grow">apple pay</div>
          </div>
        </div>{" "}
        <div className="mt-1.5 text-sm font-medium leading-5 text-zinc-800 max-md:max-w-full">
          Name on card
        </div>{" "}
        <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-2.5 max-w-full text-base capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 w-[502px] max-md:pr-5">
          Enter Full Name
        </div>{" "}
        <div className="mt-11 text-sm font-medium leading-5 text-zinc-800 max-md:mt-10 max-md:max-w-full">
          Card number
        </div>{" "}
        <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-2.5 max-w-full text-base capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 w-[502px] max-md:pr-5">
          Enter Card number
        </div>{" "}
        <div className="flex gap-2 py-0.5 mt-11 text-sm leading-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col font-medium basis-0 text-zinc-800">
            <div>Expiration date</div>{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/788515deb7bc16f615f836234c5bb7473d747d1d837e5d7ebeb3d1ca824d33e3?"
            
              className="self-center mt-2.5 aspect-[2.7] w-[153px]"
            />
          </div>{" "}
          <div className="flex gap-5 justify-between self-end py-4 pr-20 pl-5 mt-6 whitespace-nowrap bg-white rounded-xl border border-solid border-[color:var(--G-Soft,#D2D2D2)] text-neutral-400 max-md:pr-5">
            <div className="my-auto">YY</div>{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/788515deb7bc16f615f836234c5bb7473d747d1d837e5d7ebeb3d1ca824d33e3?"
              className="w-6 aspect-[0.96]"
            />
          </div>
        </div>
      </div>
    </div> 
</>
  );
}