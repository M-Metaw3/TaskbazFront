


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';


import Link from 'next/link';




import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Home() {
  return (
<>
<div className="flex flex-col items-center px-6 pt-7 pb-12 bg-white rounded-2xl shadow-lg max-w-full max-md:px-5">
      <div className="flex flex-col justify-center self-stretch pr-16 mx-4 bg-zinc-300 rounded-[41px] max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
        <div className="max-w-full bg-fuchsia-800 h-[7px] rounded-[41px] w-[664px] max-md:mr-1.5" />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a51eb416631d019a2e0ccf4d18e26cf4810b1d042bcfc35b089a4dfb105009?"
        className="mt-10 max-w-full aspect-[1.45] w-[119px]"
      />
      <div className="mt-16 text-4xl font-semibold leading-5 text-center capitalize whitespace-nowrap text-stone-950 max-md:mt-10">
        Step 5
      </div>
      <div className="mt-10 text-xl font-semibold leading-5 text-center capitalize text-stone-950 max-md:max-w-full">
        Tell us how Often do you need this cleaning service ?
      </div>
      <div className="flex gap-5 justify-between mt-7 w-full text-xl leading-4 text-center capitalize whitespace-nowrap max-w-[598px] text-stone-950 max-md:flex-wrap max-md:max-w-full">
        <div className="grow justify-center items-center px-16 py-8 rounded-xl border-solid border-[0.814px] border-[color:var(--bw-black,#0F1010)] max-md:px-5">
          Only this time
        </div>
        <div className="grow justify-center items-center px-16 py-8 rounded-xl border-solid border-[0.814px] border-[color:var(--bw-black,#0F1010)] max-md:px-5">
          Weekly
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-7 w-full text-xl leading-4 text-center capitalize whitespace-nowrap max-w-[598px] text-stone-950 max-md:flex-wrap max-md:max-w-full">
        <div className="grow justify-center items-center px-16 py-9 rounded-xl border-solid border-[0.814px] border-[color:var(--bw-black,#0F1010)] max-md:px-5">
          Monthly
        </div>
        <div className="grow justify-center px-9 py-9 rounded-xl border-solid border-[0.814px] border-[color:var(--bw-black,#0F1010)] max-md:px-5">
          Multiply time a week
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-52 text-base font-semibold text-center capitalize whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="grow justify-center items-center px-16 py-5 rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400 max-md:px-5">
          Back
        </div>
        <Link href={'/checkout/checkoutstepsix'} className="grow justify-center items-center px-16 py-5 text-white bg-fuchsia-800 rounded-xl max-md:px-5">
          Processed to book
        </Link>
      </div>
    </div>





</>
  );
}
