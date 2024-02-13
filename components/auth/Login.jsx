


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function Homesection2  () {
  return (


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
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a25934af959827843a7042bef88161000481c84de20fbcbc0f94146a11abbf1?"
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
  <div className="flex flex-col flex-1 px-16 py-9 mt-2.5 text-base bg-white rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
    <div className="self-center text-2xl font-semibold leading-7 text-center whitespace-nowrap text-zinc-800">
      Welcome To
    </div>{" "}
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f75f7601d669285e18c7ae49e7c5ae41b9c7a41c4efe7dd46165a3638aa16654?"
      className="self-center mt-3.5 max-w-full aspect-[6.67] w-[293px]"
    />{" "}
    <div className="self-center mt-3.5 font-medium text-center whitespace-nowrap text-zinc-500">
      We are happy to see you
    </div>{" "}
    <div className="flex gap-5 justify-between px-20 py-3.5 mt-11 text-2xl text-center max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="font-semibold text-stone-950">Sign In</div>{" "}
      <div className="flex-auto font-medium text-neutral-400">
        Sign Up
      </div>
    </div>{" "}
    <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-11 capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      Enter your mobile number
    </div>{" "}
    <div className="flex gap-5 justify-between px-4 py-5 mt-6 capitalize whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
      <div>Password</div>{" "}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96bc539322e11ec9f5c2e39fbd188ff45fb69659adaa6b8dc4fe922adac4d34?"
        className="w-6 aspect-[1.04]"
      />
    </div>{" "}
    <div className="mt-6 font-semibold underline text-slate-600 max-md:max-w-full">
      Forgot Password ?
    </div>{" "}
    <div className="justify-center items-center px-16 py-5 mt-6 font-semibold text-center text-white capitalize whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5 max-md:max-w-full">
      Sign In
    </div>{" "}
    <div className="flex justify-center items-center px-16 py-4 mt-6 text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5">
        <div className="grow">Or login with Google</div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5c4be0b0f63385d1a8048fec8f16f5fb9c0a6fb6bbd332ddcf3af3eb6804ea5?"
          className="w-6 aspect-square"
        />
      </div>
    </div>{" "}
    <div className="flex justify-center items-center px-16 py-4 mt-3.5 text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5">
        <div className="grow">Or login with Apple</div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ecec8b0323a6c756793be2f649480d8765d87a63dedb55f7ff0809dc0a1547?"
          className="aspect-[0.79] w-[19px]"
        />
      </div>
    </div>{" "}
    <div className="flex justify-center items-center px-16 py-4 mt-3.5 text-lg font-semibold text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Others-Hint,#828282)] text-zinc-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5 px-px">
        <div className="grow">Or login with Facebook</div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21cb6eaaf8c0d05f4341926cd813f94ac85b3fd81a5e8733553b22b1d7c12487?"
          className="w-6 aspect-square"
        />
      </div>
    </div>{" "}
    <div className="self-center mt-8 font-semibold tracking-wide text-center text-fuchsia-800 whitespace-nowrap leading-[137.5%]">
      Skip for now
    </div>
  </div>{" "}
  <div className="flex flex-col mt-5">
    <div className="flex gap-5 justify-between items-start self-end max-w-full w-[216px]">
      <div className="flex flex-col items-center self-end mt-16 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f9e530967d6a60834178cc7d57aa0e746724bbc2ff405123be119e1c176de4?"
          className="aspect-[4.55] fill-slate-950 w-[125px]"
        />{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6553beb5fe6fa7109c770afdf0018b85e4371439a3cc25dc7681c5cbc47faa46?"
          className="aspect-[4.55] fill-slate-950 w-[125px]"
        />
      </div>{" "}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d47adb6f251a5b95a7033cbc314f982689e594830572e62a056e3b51f1046fd?"
        className="self-start aspect-[0.24] fill-violet-600 w-[26px]"
      />
    </div>{" "}
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f29ca6f7f32f70aea4025ea775b77f349603a3e810138f0d856cdf4547db4c5?"
      className="mt-56 max-w-full aspect-square fill-amber-400 w-[143px] max-md:mt-10"
    />
  </div>
  </div>







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