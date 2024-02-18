"use client"


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';


import Link from 'next/link';

import React,{useState} from 'react';

export default  function Registeration  () {





  const [formData, setFormData] = useState({
 email:'',
 
    password: ''
 
  })

console.log(formData)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };






  return (
<>
<div className="flex flex-col bg-neutral-100">
     
      <img
        loading="lazy"
        src="/Rectangle 3823 (8).png"
        className="w-full aspect-[10] max-md:max-w-full"
      />{" "}
      <div className="flex z-10 gap-5 justify-between items-start px-5 mt-8 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-stretch basis-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0eae3361ee84ed39b44f3d144d94c3ca180c6e8e89c3cb3a6d4056fd35195bfa?"
            className="max-w-full aspect-[0.74] fill-violet-600 w-[104px]"
          />{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/526a30ec547192a95531a625f2e54963bfec4caa0b9322d6a4f7ce8ab5ac4ca7?"
            className="mt-14 aspect-[0.24] fill-violet-600 w-[26px] max-md:mt-10"
          />{" "}
          <div className="flex flex-col items-center pr-20 pl-5 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4b29fcb4055c2fbf53615c7813c1426f323e32b19c555a43a52959508329393?"
              className="aspect-[4.55] fill-slate-950 w-[198px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7a090348d89fc822028e8d3093801929033418c2d43c43cfd63e7b6eb95fe34?"
              className="z-10 aspect-[4.35] fill-slate-950 w-[198px]"
            />
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/37e37cd18c51385fc57dce23dafb8ea74ad47f3bc572d3c56055b755377d910e?"
            className="w-full aspect-[0.47] fill-amber-400"
          />
        </div>{" "}
        <div className="flex  flex-col flex-1 items-center px-16 pt-5 pb-12 mt-1 bg-white rounded-2xl max-w-[50%] mx-auto shadow-lg max-md:px-5 max-md:max-w-full">
          <div className="text-2xl font-semibold leading-7 text-center whitespace-nowrap text-zinc-800">
            Welcome To
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c8aa0e439b3cffbc677d20974309a17bd5d538fa5083e1b11c2c15d6de84de?"
            className="mt-3.5 max-w-full aspect-[6.67] w-[293px]"
          />{" "}
          <div className="mt-3.5 text-base font-medium text-center whitespace-nowrap text-zinc-500">
            We are happy to see you
          </div>{" "}
          <div className="mt-8 text-2xl font-semibold leading-7 text-center whitespace-nowrap text-gray-950">
            Verification Code
          </div>{" "}
          <div className="mt-6 text-base font-medium leading-6 text-center text-neutral-700 w-[342px]">
            Code is sent to ***567 write the verification code down
          </div>{" "}
          <div className="self-stretch mt-10 max-w-[50%] m-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <input className="mx-auto text-center rounded-2xl border-2 border-solid border-[color:var(--Gray-4,#C3C3C3)] h-[148px] w-[118px] max-md:mt-3" />
              </div>{" "}
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <input className="mx-auto text-center rounded-2xl border-2 border-solid border-[color:var(--Gray-4,#C3C3C3)] h-[148px] w-[118px] max-md:mt-3" />
              </div>{" "}
              <div className="flex flex-col ml-5  w-3/12 max-md:ml-0 max-md:w-full">
                <input className="mx-auto text-center rounded-2xl border-2 border-solid border-[color:var(--Gray-4,#C3C3C3)] h-[148px] w-[118px] max-md:mt-3" />
              </div>{" "}
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <input className="mx-auto text-center rounded-2xl border-2 border-solid border-[color:var(--Gray-4,#C3C3C3)] h-[148px] w-[118px] max-md:mt-3" />
              </div>
            </div>
          </div>{" "}
          <button className="justify-center items-center self-stretch px-16 py-5 mt-9 text-base font-semibold text-center text-white capitalize whitespace-nowrap rounded-xl bg-zinc-500 max-md:px-5 max-md:max-w-full">
            Verify
          </button>{" "}
          <div className="flex gap-3 px-0.5 py-1 mt-7 text-base text-center whitespace-nowrap">
            <button className="grow font-medium text-neutral-400">
              Didn't receive code?
            </button>
            <div className="grow font-semibold text-fuchsia-800">
              Resend Code
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex gap-5 justify-between items-start self-end max-w-full w-[216px]">
            <div className="flex flex-col items-center self-end mt-16 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f9e530967d6a60834178cc7d57aa0e746724bbc2ff405123be119e1c176de4?"
                className="aspect-[4.55] fill-slate-950 w-[125px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6553beb5fe6fa7109c770afdf0018b85e4371439a3cc25dc7681c5cbc47faa46?"
                className="aspect-[4.55] fill-slate-950 w-[125px]"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d47adb6f251a5b95a7033cbc314f982689e594830572e62a056e3b51f1046fd?"
              className="self-start aspect-[0.24] fill-violet-600 w-[26px]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f29ca6f7f32f70aea4025ea775b77f349603a3e810138f0d856cdf4547db4c5?"
            className="mt-56 max-w-full aspect-square fill-amber-400 w-[143px] max-md:mt-10"
          />
        </div>
      </div>

    </div>
          </>








  );
}