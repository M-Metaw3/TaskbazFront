"use client"


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React,{useState} from 'react';

export default  function Homesection2  () {





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
<input 
       type="text"
       name="email"
       value={formData.email}
       onChange={handleChange}
    placeholder='Enter your mobile number' className="justify-center items-start py-5 pr-16 pl-3.5 mt-11 capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
  
    </input>{" "}
    <input placeholder='Password'
    
    
   type="password"
   name="password"
   value={formData.password}
   onChange={handleChange}
    className="flex gap-5 justify-between px-4 py-5 mt-6 capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
       {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96bc539322e11ec9f5c2e39fbd188ff45fb69659adaa6b8dc4fe922adac4d34?"
        className="w-6 aspect-[1.04]"
      />  */}
    </input>{" "}
      
    <a href={"/"} className="mt-6 font-semibold underline text-slate-600 max-md:max-w-full">
      Forgot Password ?
    </a>{" "}
    <button  className="justify-center items-center px-16 py-5 mt-6 font-semibold text-center text-white capitalize whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5 max-md:max-w-full">
      Sign In
    </button>{" "}
    <button className="flex justify-center items-center px-16 py-4 mt-6 text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5">
        <div className="grow">Or login with Google</div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5c4be0b0f63385d1a8048fec8f16f5fb9c0a6fb6bbd332ddcf3af3eb6804ea5?"
          className="w-6 aspect-square"
        />
      </div>
    </button>{" "}
    <button className="flex justify-center items-center px-16 py-4 mt-3.5 text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5">
        <div className="grow">Or login with Apple</div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ecec8b0323a6c756793be2f649480d8765d87a63dedb55f7ff0809dc0a1547?"
          className="aspect-[0.79] w-[19px]"
        />
      </div>
    </button>{" "}
    <button  className="flex justify-center items-center px-16 py-4 mt-3.5 text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5 px-px">
        <div className="grow">Or login with Facebook</div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21cb6eaaf8c0d05f4341926cd813f94ac85b3fd81a5e8733553b22b1d7c12487?"
          className="w-6 aspect-square"
        />
      </div>
      </button>{" "}
    </>




// <div className="flex flex-col pb-2.5 max-w-[502px]">
// <div className="self-center text-2xl font-semibold leading-7 text-center whitespace-nowrap text-zinc-800">
//   Welcome To
// </div>
// <img
//   loading="lazy"
//   src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5a6ba0d578fe1cc86b4494b6a73734c054aaee621c3b2bebf952290d2b7b7c2?"
//   className="self-center mt-3.5 max-w-full aspect-[6.67] w-[293px]"
// />
// <div className="self-center mt-3.5 text-base font-medium text-center whitespace-nowrap text-zinc-500">
//   We are happy to see you
// </div>
// <div className="flex gap-5 justify-between px-20 py-3.5 mt-11 w-full text-2xl text-center max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
//   <div className="font-semibold text-neutral-400">Sign In</div>
//   <div className="flex-auto font-medium text-stone-950">Sign Up</div>
// </div>
// <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-11 w-full text-base capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
//   Enter your full name
// </div>
// <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-6 w-full text-base capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:max-w-full">
//   Enter your mobile number
// </div>
// <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-6 w-full text-base capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:max-w-full">
//   Enter your Email
// </div>
// <div className="flex gap-5 justify-between px-4 py-5 mt-6 w-full text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
//   <div className="flex-auto">Enter your password</div>
//   <img
//     loading="lazy"
//     src="https://cdn.builder.io/api/v1/image/assets/TEMP/beeb08fcaa892ad664708f84544abd0eec5d69ceb49f2ef86384c047612f21de?"
//     className="w-6 aspect-square"
//   />
// </div>
// <div className="flex gap-5 justify-between px-4 py-5 mt-6 w-full text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
//   <div className="flex-auto">Confirm your password </div>
//   <img
//     loading="lazy"
//     src="https://cdn.builder.io/api/v1/image/assets/TEMP/beeb08fcaa892ad664708f84544abd0eec5d69ceb49f2ef86384c047612f21de?"
//     className="w-6 aspect-square"
//   />
// </div>
// <div className="flex gap-1.5 justify-between pr-5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
//   <div className="flex flex-col justify-center aspect-[1.03]">
//     <div className="shrink-0 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)] h-[31px]" />
//   </div>
//   <div className="grow my-auto text-sm leading-5 capitalize text-zinc-800 max-md:max-w-full">
//     I agree on the teams&conditions{" "}
//   </div>
// </div>
// <div className="justify-center items-center px-16 py-5 mt-6 w-full text-base font-semibold text-center text-white capitalize whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5 max-md:max-w-full">
//   Sign Up
// </div>
// <div className="flex justify-center items-center px-16 py-4 mt-6 w-full text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
//   <div className="flex gap-2.5">
//     <div className="grow">Or Sign Up with Google</div>
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/722b417e79e3e42022703391860b979ad83c40c1abeca1563c577f16252e71a0?"
//       className="w-6 aspect-square"
//     />
//   </div>
// </div>
// <div className="flex justify-center items-center px-16 py-4 mt-3.5 w-full text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
//   <div className="flex gap-2.5">
//     <div className="grow">Or Sign Up with Apple</div>
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8910ffa5ba18146eb171e929bba18b1951dbb9838747ff40c120c9552b5f308?"
//       className="aspect-[0.79] w-[19px]"
//     />
//   </div>
// </div>
// <div className="flex justify-center items-center px-16 py-4 mt-3.5 w-full text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
//   <div className="flex gap-2.5">
//     <div className="grow">Or Sign Up with Facebook</div>
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/625ac38220987cf5ab5e9e1dd7c743317d58aa60e541c169373bff36173a9363?"
//       className="w-6 aspect-square"
//     />
//   </div>
// </div>
// <div className="self-center mt-8 text-base font-semibold tracking-wide leading-6 text-center text-fuchsia-800 whitespace-nowrap">
//   Skip for now
// </div>
// </div>




  );
}