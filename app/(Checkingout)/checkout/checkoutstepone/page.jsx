


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';


import Link from 'next/link';




import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Home() {
  return (
<>

<div className="flex flex-col items-center px-6 pt-7 pb-12 bg-white rounded-2xl shadow-lg max-w-full max-md:px-5">
      <div className="flex flex-col justify-center items-start self-stretch pr-16 mx-4 bg-zinc-300 rounded-[41px] max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
        <div className="w-9 bg-fuchsia-800 h-[7px] rounded-[41px]" />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a51eb416631d019a2e0ccf4d18e26cf4810b1d042bcfc35b089a4dfb105009?"
        className="mt-10 max-w-full aspect-[1.45] w-[119px]"
      />
      <div className="mt-16 text-4xl font-semibold leading-5 text-center capitalize whitespace-nowrap text-stone-950 max-md:mt-10">
        Step 1
      </div>
      <div className="mt-10 text-xl font-semibold leading-5 text-center capitalize text-stone-950 max-md:max-w-full">
        Choose which part-time cleaners option does it suit you ?{" "}
      </div>
      <div className="flex gap-5 justify-between mt-16 w-full text-2xl leading-5 text-center capitalize whitespace-nowrap max-w-[682px] text-stone-950 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="grow justify-center items-center px-16 py-8 rounded-2xl border border-solid border-[color:var(--bw-black,#0F1010)] max-md:px-5">
          Book By hr
        </div>
        <div className="grow justify-center items-center px-16 py-8 rounded-2xl border border-solid border-[color:var(--bw-black,#0F1010)] max-md:px-5">
          Book By Size
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-72 text-base font-semibold text-center capitalize whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="grow justify-center items-center px-16 py-5 rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400 max-md:px-5">
          Close
        </div>
        <Link href={"/checkout/checkoutsteptwo"} className="grow justify-center items-center px-16 py-5 text-white bg-fuchsia-800 rounded-xl max-md:px-5">
          Next
        </Link>
      </div>
    </div>





</>
  );
}
