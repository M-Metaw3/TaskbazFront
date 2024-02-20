

import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function Categoryname () {
  return (


<>



<div className="flex flex-col bg-neutral-100">

<div className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-12 w-full text-lg whitespace-nowrap min-h-[215px] max-md:px-5 max-md:max-w-full">
  <img
    loading="lazy"
    src="/about/Rectangle 3823 (6).png"
    className="object-cover absolute inset-0 size-full"
  />{" "}
  <div className="flex relative gap-0.5 mt-28 ml-28 max-md:mt-10 max-md:ml-2.5">
    <div className="font-light text-stone-300">Home</div>{" "}
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/983c3fb962e36b673b1dee3246660f428c4dc6fe6553b819ffd7a6ecaa49b75b?"
      className="w-4 aspect-square"
    />{" "}
    <div className="grow font-bold text-neutral-100">My Bookings</div>
  </div>
</div>{" "}
<div className="self-center px-5 mt-9 w-full max-w-[1590px] max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center text-2xl font-semibold leading-5 text-white capitalize whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        <div className="justify-center items-center px-16 py-11 bg-fuchsia-800 rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
          Pending
        </div>
      </div>
    </div>{" "}
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center text-2xl font-semibold leading-5 capitalize whitespace-nowrap text-stone-950 max-md:mt-10 max-md:max-w-full">
        <div className="justify-center items-center px-16 py-12 bg-white rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
          In prgress
        </div>
      </div>
    </div>{" "}
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center text-2xl font-semibold leading-5 capitalize whitespace-nowrap text-stone-950 max-md:mt-10 max-md:max-w-full">
        <div className="justify-center items-center py-11 pr-16 pl-20 bg-white rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
          Completed
        </div>
      </div>
    </div>
  </div>
</div>{" "}
<div className="self-center px-5 mt-9 w-full max-w-[1590px] max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-2 pt-6 pb-9 w-full bg-white rounded-2xl shadow-lg max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col p-4 bg-gray-800 rounded-xl max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1 self-start font-semibold text-white capitalize whitespace-nowrap">
              <div className="grow text-sm leading-5">Order NO :</div>{" "}
              <div className="grow text-base leading-5">#384754576</div>
            </div>{" "}
            <div className="flex-auto text-base text-stone-300">
              Sun, Jan 16 at 12:30 PM
            </div>
          </div>{" "}
          <div className="flex gap-1.5 self-start mt-3.5 font-semibold text-white capitalize">
            <div className="flex-auto text-sm leading-5">
              Order Amount :
            </div>{" "}
            <div className="grow text-base leading-5 whitespace-nowrap">
              320 EGP
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-3 justify-between pr-3 mt-6 text-xl capitalize bg-white rounded-xl max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="/booking/Rectangle 3779.png"
          
            className="max-w-full aspect-[1.14] w-[107px]"
          />{" "}
          <div className="flex flex-col flex-1 pr-16 my-auto">
            <div className="whitespace-nowrap leading-[110%] text-slate-600">
              Part-time Home Cleaners
            </div>{" "}
            <div className="flex gap-3 justify-between py-px mt-1.5 whitespace-nowrap leading-[90%] text-slate-600">
              <div>Services:</div>{" "}
              <div className="grow">Service 1, Service 2,...</div>
            </div>{" "}
            <div className="mt-1.5 font-semibold leading-5 text-amber-600">
              <span className="">Status: </span>
              <span className="font-bold text-amber-600">Pending</span>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 justify-between text-sm leading-5 text-fuchsia-800 capitalize">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7cd8681d26bc984f801f517f488fb1f054383ee67984dc025a99919f44d0cc?"
              className="aspect-[0.93] w-[13px]"
            />{" "}
            <div className="flex-auto">
              Company name :{" "}
              <span className="font-bold">Maged ahmed </span>
            </div>
          </div>{" "}
          <div className="flex gap-1.5 text-xl leading-8 whitespace-nowrap text-zinc-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee1ae340b287686af3bfd1577806c2a84e3171e2d138bbb40a584490ca8c45d2?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b112e51011a6f51ac67859d7a197bc45dd9581ea4fca2ccfc205233a5e700d?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a53e70996db00142b563192d237169829336e7accf9d775b0dba55875616bd2?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/33e8a300797899c1a9718ab73da681d4580bd8bb2053623a2a8140e10c275253?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b628e8f7aa502deb6700ef14a8009985f9fd4c8430a981b2421e36ec357ac2f?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <div className="grow">4.7</div>
          </div>
        </div>{" "}
        <div className="justify-center items-center px-16 py-4 mt-6 text-base text-red-500 whitespace-nowrap rounded-xl bg-rose-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
          Cancel
        </div>
      </div>
    </div>{" "}
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-2 pt-6 pb-9 w-full bg-white rounded-2xl shadow-lg max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col p-4 bg-gray-800 rounded-xl max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1 self-start font-semibold text-white capitalize whitespace-nowrap">
              <div className="grow text-sm leading-5">Order NO :</div>{" "}
              <div className="grow text-base leading-5">#384754576</div>
            </div>{" "}
            <div className="flex-auto text-base text-stone-300">
              Sun, Jan 16 at 12:30 PM
            </div>
          </div>{" "}
          <div className="flex gap-1.5 self-start mt-3.5 font-semibold text-white capitalize">
            <div className="flex-auto text-sm leading-5">
              Order Amount :
            </div>{" "}
            <div className="grow text-base leading-5 whitespace-nowrap">
              320 EGP
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-3 justify-between pr-3 mt-6 text-xl capitalize bg-white rounded-xl max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="/booking/Rectangle 3779.png"
            
            className="max-w-full aspect-[1.14] w-[107px]"
          />{" "}
          <div className="flex flex-col flex-1 pr-16 my-auto">
            <div className="whitespace-nowrap leading-[110%] text-slate-600">
              Part-time Home Cleaners
            </div>{" "}
            <div className="flex gap-3 justify-between py-px mt-1.5 whitespace-nowrap leading-[90%] text-slate-600">
              <div>Services:</div>{" "}
              <div className="grow">Service 1, Service 2,...</div>
            </div>{" "}
            <div className="mt-1.5 font-semibold leading-5 text-amber-600">
              <span className="">Status: </span>
              <span className="font-bold text-amber-600">Pending</span>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 justify-between text-sm leading-5 text-fuchsia-800 capitalize">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7cd8681d26bc984f801f517f488fb1f054383ee67984dc025a99919f44d0cc?"
              className="aspect-[0.93] w-[13px]"
            />{" "}
            <div className="flex-auto">
              Company name :{" "}
              <span className="font-bold">Maged ahmed </span>
            </div>
          </div>{" "}
          <div className="flex gap-1.5 text-xl leading-8 whitespace-nowrap text-zinc-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1667ab6632f5b9cfd0d4541e63aa28b4b3f40766b353378b738a03c0250fd15a?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3ffcd055a880dbe11e1f5a06638d34be480f3383a24cc0324c95469121e4def?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3823dd9a4d67e4106188cec64feae4ca5200697426f47cf14e03d37f7e9bc3ba?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/650dcc99d52582c58606e3e6cf6c6603cf14b9ce7e266eef72ed9ab497e11865?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f0728dad8055e92d19243e5a3037f6896a6070e7f359b0a9219f11e60de8f5?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <div className="grow">4.7</div>
          </div>
        </div>{" "}
        <div className="justify-center items-center px-16 py-4 mt-6 text-base text-red-500 whitespace-nowrap rounded-xl bg-rose-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
          Cancel
        </div>
      </div>
    </div>{" "}
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-2 pt-6 pb-9 w-full bg-white rounded-2xl shadow-lg max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col p-4 bg-gray-800 rounded-xl max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1 self-start font-semibold text-white capitalize whitespace-nowrap">
              <div className="grow text-sm leading-5">Order NO :</div>{" "}
              <div className="grow text-base leading-5">#384754576</div>
            </div>{" "}
            <div className="flex-auto text-base text-stone-300">
              Sun, Jan 16 at 12:30 PM
            </div>
          </div>{" "}
          <div className="flex gap-1.5 self-start mt-3.5 font-semibold text-white capitalize">
            <div className="flex-auto text-sm leading-5">
              Order Amount :
            </div>{" "}
            <div className="grow text-base leading-5 whitespace-nowrap">
              320 EGP
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-3 justify-between pr-3 mt-6 text-xl capitalize bg-white rounded-xl max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="/booking/Rectangle 3779.png"
            
            className="max-w-full aspect-[1.14] w-[107px]"
          />{" "}
          <div className="flex flex-col flex-1 pr-16 my-auto">
            <div className="whitespace-nowrap leading-[110%] text-slate-600">
              Part-time Home Cleaners
            </div>{" "}
            <div className="flex gap-3 justify-between py-px mt-1.5 whitespace-nowrap leading-[90%] text-slate-600">
              <div>Services:</div>{" "}
              <div className="grow">Service 1, Service 2,...</div>
            </div>{" "}
            <div className="mt-1.5 font-semibold leading-5 text-amber-600">
              <span className="">Status: </span>
              <span className="font-bold text-amber-600">Pending</span>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 justify-between text-sm leading-5 text-fuchsia-800 capitalize">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7cd8681d26bc984f801f517f488fb1f054383ee67984dc025a99919f44d0cc?"
              className="aspect-[0.93] w-[13px]"
            />{" "}
            <div className="flex-auto">
              Company name :{" "}
              <span className="font-bold">Maged ahmed </span>
            </div>
          </div>{" "}
          <div className="flex gap-1.5 text-xl leading-8 whitespace-nowrap text-zinc-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dfe2e3d56ff63771be8163685088d5eec3d34013a4899344e45dc16c1d9f1dd?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e3452270ef53ce8431b434d12da6a5b9c587aa9989ec89af52e1320c5ec405?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8bc8119f3acffe32baa8dc1f64c3706e524a046b1ea0b799e57a464c9e7ace2?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95d60233a8e35574d4b41b83bf145819f8414d97398d7914bcc32cca0f3e4873?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12f3b274fd714b4e661501d6647e8e4c7058dc305aab1df2ee8ea5fec02c3255?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <div className="grow">4.7</div>
          </div>
        </div>{" "}
        <div className="justify-center items-center px-16 py-4 mt-6 text-base text-red-500 whitespace-nowrap rounded-xl bg-rose-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
          Cancel
        </div>
      </div>
    </div>
  </div>
</div>{" "}
<div className="self-center px-5 mt-16 w-full max-w-[1590px] max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-2 pt-6 pb-9 w-full bg-white rounded-2xl shadow-lg max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col p-4 bg-gray-800 rounded-xl max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1 self-start font-semibold text-white capitalize whitespace-nowrap">
              <div className="grow text-sm leading-5">Order NO :</div>{" "}
              <div className="grow text-base leading-5">#384754576</div>
            </div>{" "}
            <div className="flex-auto text-base text-stone-300">
              Sun, Jan 16 at 12:30 PM
            </div>
          </div>{" "}
          <div className="flex gap-1.5 self-start mt-3.5 font-semibold text-white capitalize">
            <div className="flex-auto text-sm leading-5">
              Order Amount :
            </div>{" "}
            <div className="grow text-base leading-5 whitespace-nowrap">
              320 EGP
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-3 justify-between pr-3 mt-6 text-xl capitalize bg-white rounded-xl max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="/booking/Rectangle 3779.png"
          
            className="max-w-full aspect-[1.14] w-[107px]"
          />{" "}
          <div className="flex flex-col flex-1 pr-16 my-auto">
            <div className="whitespace-nowrap leading-[110%] text-slate-600">
              Part-time Home Cleaners
            </div>{" "}
            <div className="flex gap-3 justify-between py-px mt-1.5 whitespace-nowrap leading-[90%] text-slate-600">
              <div>Services:</div>{" "}
              <div className="grow">Service 1, Service 2,...</div>
            </div>{" "}
            <div className="mt-1.5 font-semibold leading-5 text-amber-600">
              <span className="">Status: </span>
              <span className="font-bold text-amber-600">Pending</span>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 justify-between text-sm leading-5 text-fuchsia-800 capitalize">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7cd8681d26bc984f801f517f488fb1f054383ee67984dc025a99919f44d0cc?"
              className="aspect-[0.93] w-[13px]"
            />{" "}
            <div className="flex-auto">
              Company name :{" "}
              <span className="font-bold">Maged ahmed </span>
            </div>
          </div>{" "}
          <div className="flex gap-1.5 text-xl leading-8 whitespace-nowrap text-zinc-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32b3ef517a3c09dad14bccb4fbb92d295427a83c8342d496cab46dea12ee54ed?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb61c944a95d16efcfa118343e00f1c01b2c672a44204de08739c720eaed1e85?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fc318bcbb4a48937f9cd313bc05592e329ea42cf73e77a86a8843a4d132b8fe?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19643c346b2788e32b82f1097d619c8bbbd8ce0a5f32a3a495cf7303bd52a411?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb8ab0e3cdaeb1a1a8ec33cabc469931f6f71d271646b4f03bed345b0657659?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <div className="grow">4.7</div>
          </div>
        </div>{" "}
        <div className="justify-center items-center px-16 py-4 mt-6 text-base text-red-500 whitespace-nowrap rounded-xl bg-rose-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
          Cancel
        </div>
      </div>
    </div>{" "}
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-2 pt-6 pb-9 w-full bg-white rounded-2xl shadow-lg max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col p-4 bg-gray-800 rounded-xl max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1 self-start font-semibold text-white capitalize whitespace-nowrap">
              <div className="grow text-sm leading-5">Order NO :</div>{" "}
              <div className="grow text-base leading-5">#384754576</div>
            </div>{" "}
            <div className="flex-auto text-base text-stone-300">
              Sun, Jan 16 at 12:30 PM
            </div>
          </div>{" "}
          <div className="flex gap-1.5 self-start mt-3.5 font-semibold text-white capitalize">
            <div className="flex-auto text-sm leading-5">
              Order Amount :
            </div>{" "}
            <div className="grow text-base leading-5 whitespace-nowrap">
              320 EGP
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-3 justify-between pr-3 mt-6 text-xl capitalize bg-white rounded-xl max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            
            src="/booking/Rectangle 3779.png"

            className="max-w-full aspect-[1.14] w-[107px]"
          />{" "}
          <div className="flex flex-col flex-1 pr-16 my-auto">
            <div className="whitespace-nowrap leading-[110%] text-slate-600">
              Part-time Home Cleaners
            </div>{" "}
            <div className="flex gap-3 justify-between py-px mt-1.5 whitespace-nowrap leading-[90%] text-slate-600">
              <div>Services:</div>{" "}
              <div className="grow">Service 1, Service 2,...</div>
            </div>{" "}
            <div className="mt-1.5 font-semibold leading-5 text-amber-600">
              <span className="">Status: </span>
              <span className="font-bold text-amber-600">Pending</span>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 justify-between text-sm leading-5 text-fuchsia-800 capitalize">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7cd8681d26bc984f801f517f488fb1f054383ee67984dc025a99919f44d0cc?"
              className="aspect-[0.93] w-[13px]"
            />{" "}
            <div className="flex-auto">
              Company name :{" "}
              <span className="font-bold">Maged ahmed </span>
            </div>
          </div>{" "}
          <div className="flex gap-1.5 text-xl leading-8 whitespace-nowrap text-zinc-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c91207acf2f4f5acab426d4a3681f5eb4b48d5456da3c88c532da23ed74b870?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8072a5ca97422028116e3de3ec75744b4ec5fcdf955b54d6707a10c16dab6eb4?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59c007188aed6433c7ce63163ebdb38af912d5fd9539ff2ed58e8617749d9931?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/74c3f0a259dbc4755c02ee5ef63d934399aee9c5b5aa337602678a13f91083b8?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8491cd3280e27d8c7d56750c1ab28717a9f71494154f64f09363da8f07bbf6d?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <div className="grow">4.7</div>
          </div>
        </div>{" "}
        <div className="justify-center items-center px-16 py-4 mt-6 text-base text-red-500 whitespace-nowrap rounded-xl bg-rose-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
          Cancel
        </div>
      </div>
    </div>{" "}
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-2 pt-6 pb-9 w-full bg-white rounded-2xl shadow-lg max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col p-4 bg-gray-800 rounded-xl max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1 self-start font-semibold text-white capitalize whitespace-nowrap">
              <div className="grow text-sm leading-5">Order NO :</div>{" "}
              <div className="grow text-base leading-5">#384754576</div>
            </div>{" "}
            <div className="flex-auto text-base text-stone-300">
              Sun, Jan 16 at 12:30 PM
            </div>
          </div>{" "}
          <div className="flex gap-1.5 self-start mt-3.5 font-semibold text-white capitalize">
            <div className="flex-auto text-sm leading-5">
              Order Amount :
            </div>{" "}
            <div className="grow text-base leading-5 whitespace-nowrap">
              320 EGP
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-3 justify-between pr-3 mt-6 text-xl capitalize bg-white rounded-xl max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="/booking/Rectangle 3779.png"
            className="max-w-full aspect-[1.14] w-[107px]"
          />{" "}
          <div className="flex flex-col flex-1 pr-16 my-auto">
            <div className="whitespace-nowrap leading-[110%] text-slate-600">
              Part-time Home Cleaners
            </div>{" "}
            <div className="flex gap-3 justify-between py-px mt-1.5 whitespace-nowrap leading-[90%] text-slate-600">
              <div>Services:</div>{" "}
              <div className="grow">Service 1, Service 2,...</div>
            </div>{" "}
            <div className="mt-1.5 font-semibold leading-5 text-amber-600">
              <span className="">Status: </span>
              <span className="font-bold text-amber-600">Pending</span>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 justify-between text-sm leading-5 text-fuchsia-800 capitalize">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7cd8681d26bc984f801f517f488fb1f054383ee67984dc025a99919f44d0cc?"
              className="aspect-[0.93] w-[13px]"
            />{" "}
            <div className="flex-auto">
              Company name :{" "}
              <span className="font-bold">Maged ahmed </span>
            </div>
          </div>{" "}
          <div className="flex gap-1.5 text-xl leading-8 whitespace-nowrap text-zinc-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/50f5c18c6e3e7c60fec6988e0cbefab3b1fd80ccb58e1282200dc7e1d601f3b3?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/141878898128a2dd0d369edeb7875e8b3992f4db42f56f1ba3214158c19928ec?"
              className="w-3.5 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5e883fb07cd65945bbbe7c70417d0257cb7bc647e2a4d6b2e0681499b3ed7f6?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/024892ce25a6fd68a7cd1bd02d8397ca2e56183d402e7d07f766420097fffa16?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa609ac72ab4e2f6c096280f6a0afb81df1ca0948823d29c6586d2e918754420?"
              className="aspect-[1.08] w-[15px]"
            />{" "}
            <div className="grow">4.7</div>
          </div>
        </div>{" "}
        <div className="justify-center items-center px-16 py-4 mt-6 text-base text-red-500 whitespace-nowrap rounded-xl bg-rose-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
          Cancel
        </div>
      </div>
    </div>
  </div>
</div>{" "}

</div>










</>


  );
}