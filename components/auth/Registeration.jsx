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

<input placeholder='Enter your full name' className="justify-center items-start py-5 pr-16 pl-3.5 mt-11 text-base capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          </input>{" "}
          <input placeholder=' Enter your mobile number' className="justify-center items-start py-5 pr-16 pl-3.5 mt-6 text-base capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:max-w-full">
           
          </input>{" "}
          <input placeholder='Enter your Email' className="justify-center items-start py-5 pr-16 pl-3.5 mt-6 text-base capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:max-w-full">
          </input>{" "}
          <input placeholder='Enter your Password' className="flex gap-5 justify-between px-4 py-5 mt-6 text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
            {/* <input placeholder='Enter your Email' className="flex-auto"></input>{" "}
            
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/beeb08fcaa892ad664708f84544abd0eec5d69ceb49f2ef86384c047612f21de?"
              className="w-6 aspect-square"
            /> */}
          </input>{" "}
          <input placeholder='Enter your Confirm Password' className="flex gap-5 justify-between px-4 py-5 mt-6 text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
             {/* <div className="flex-auto">Confirm your password </div>{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/beeb08fcaa892ad664708f84544abd0eec5d69ceb49f2ef86384c047612f21de?"
              className="w-6 aspect-square" 
            /> */}
          </input>{" "}
          <div className="flex gap-1.5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
            {/* <div className="flex flex-col justify-center aspect-[1.03]">
              <div className="shrink-0 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)] h-[31px]" />
            </div>{" "} */}

<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <div className="grow my-auto text-sm leading-5 capitalize text-zinc-800 max-md:max-w-full">
              I agree on the teams&conditions{" "}
            </div>
          </div>{" "}
          <Link href={"/verificationcode"} className="justify-center items-center px-16 py-5 mt-6 text-base font-semibold text-center text-white capitalize whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5 max-md:max-w-full">
            Sign Up
          </Link>{" "}
          <button className="flex justify-center items-center px-16 py-4 mt-6 text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-2.5 px-px">
              <div className="grow">Or Sign Up with Google</div>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/722b417e79e3e42022703391860b979ad83c40c1abeca1563c577f16252e71a0?"
                className="w-6 aspect-square"
              />
            </div>
          </button>{" "}
          <button className="flex justify-center items-center px-16 py-4 mt-3.5 text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-2.5">
              <div className="grow">Or Sign Up with Apple</div>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8910ffa5ba18146eb171e929bba18b1951dbb9838747ff40c120c9552b5f308?"
                className="aspect-[0.79] w-[19px]"
              />
            </div>
          </button>{" "}
          <button className="flex justify-center items-center px-16 py-4 mt-3.5 text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-2.5 px-px">
              <div className="grow">Or Sign Up with Facebook</div>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/625ac38220987cf5ab5e9e1dd7c743317d58aa60e541c169373bff36173a9363?"
                className="w-6 aspect-square"
              />
            </div>
          </button>{" "}
       
    </>








  );
}