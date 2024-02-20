


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';


import Link from 'next/link';




import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Home() {
  return (
<>
<div className="flex flex-col items-start px-6 pt-7 pb-12 bg-white rounded-2xl shadow-lg max-w-full max-md:px-5">
      <div className="self-stretch mx-4 w-full bg-fuchsia-800 h-[7px] rounded-[41px] max-md:mr-2.5" />
      <div className="mt-10 ml-4 text-base font-semibold leading-7 text-fuchsia-800 capitalize whitespace-nowrap max-md:ml-2.5">
        Address Information
      </div>
      <div className="mt-6 ml-4 text-sm font-medium leading-5 text-zinc-800  max-md:ml-2.5">
        City
      </div>
      <div className="flex gap-5 justify-between px-4 py-5 mt-2 ml-4 max-w-full text-base font-semibold whitespace-nowrap bg-white rounded-xl border border-solid border-[color:var(--G-Soft,#D2D2D2)] text-zinc-800 w-full max-md:ml-2.5">
        <div className="my-auto">Cairo</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ff17a9d47160fd95115152ef6eb5f27035e5bdc523bea10a23b6ddf2e7b677?"
          className="aspect-[1.05] w-[21px]"
        />
      </div>
      <div className="mt-7 ml-4 text-sm font-medium leading-5 text-zinc-800 max-md:ml-2.5">
        Area
      </div>
      <div className="justify-center items-start py-5 pr-16 pl-4 mt-2 ml-4 max-w-full text-base font-semibold whitespace-nowrap bg-white rounded-xl border border-solid border-[color:var(--G-Soft,#D2D2D2)] text-zinc-800 w-full max-md:pr-5 max-md:ml-2.5">
        Nasser City
      </div>
      <div className="mt-7 ml-4 text-sm font-medium leading-5 text-zinc-800 max-md:ml-2.5">
        Street Name
      </div>
      <div className="justify-center items-start py-6 pr-16 pl-4 mt-2 ml-4 max-w-full text-base font-semibold whitespace-nowrap bg-white rounded-xl border border-solid border-[color:var(--G-Soft,#D2D2D2)] text-zinc-800 w-full max-md:pr-5 max-md:ml-2.5">
        Mohamed Farid
      </div>
      <div className="mt-7 ml-4 text-sm font-medium leading-5 text-zinc-800 max-md:ml-2.5">
        Building Name / NO.
      </div>
      <div className="justify-center items-start py-5 pr-16 pl-4 mt-2 ml-4 max-w-full text-base font-semibold whitespace-nowrap bg-white rounded-xl border border-solid border-[color:var(--G-Soft,#D2D2D2)] text-zinc-800 w-full max-md:pr-5 max-md:ml-2.5">
        15 Building
      </div>
      <div className="mt-8 ml-4 text-sm font-medium leading-5 text-zinc-800 max-md:ml-2.5">
        Date of Visit
      </div>

      <div
      htmlFor="fileInput" className="flex gap-5 justify-between px-5 py-3.5 mt-3 ml-4 max-w-full text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--G-Soft,#D2D2D2)] text-zinc-800 w-full max-md:ml-2.5">
        <div className="flex-auto self-start mt-3">Wednesday 15 Sep 2023</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fef5d80ad805b84fbcc832f643d07784ab88d0377d28fb0678f8d182f876126b?"
          className="w-7 aspect-[0.9]"
        />
      </div>
      <div className="flex gap-2 mt-7 ml-4 max-w-full w-[402px] max-md:ml-2.5">
        <div className="flex flex-col justify-center aspect-square fill-white">
          <div className="shrink-0 h-8 rounded-lg border-solid border-[1.5px] border-[color:var(--G-Soft,#D2D2D2)]" />
        </div>
        <div className="flex-auto self-start mt-3.5 text-base font-semibold leading-6 capitalize text-slate-600">
          Use as my default address.
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-8 text-base font-semibold text-center capitalize whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="grow justify-center items-center px-16 py-5 rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400 max-md:px-5">
          Back
        </div>
        <div className="grow justify-center items-center px-16 py-5 text-white bg-fuchsia-800 rounded-xl max-md:px-5">
          Processed to book
        </div>
      </div>
    </div>




</>
  );
}
