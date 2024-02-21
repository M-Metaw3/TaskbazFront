
"use client"

import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';





import { usePathname } from 'next/navigation'
import Link from 'next/link';

import React,{useState} from 'react';






export default  function Navbar  () {
  const pathname = usePathname()
  // const router = useRouter();
  const [toggle, settoggle] = useState(false);
  const [toggle2, settoggle2] = useState(false);
  const isActive = (path) => {
    console.log(path,pathname)
    return pathname === path;
  };
  return (


 <div className="flex flex-col justify-center sticky top-0 right-0 z-20 "> 
<div className="pr-7 w-full bg-white bg-opacity-85  shadow-sm max-md:pr-5 max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <Box  className="  flex grow gap-5 justify-between items-center text-base leading-6 capitalize text-gray-950 max-md:flex-wrap max-md:mt-10 max-md:max-w-full " >
        <Link href="/" className="flex grow  self-stretch my-auto font-bold text-fuchsia-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18bac309c301db4b6398c55bf181ba6ba3a58be85b910ed323518266187a3b7c?"
            className="self-stretch max-w-full aspect-[1.27] fill-white w-[145px]"
            alt="Logo"
          />
        </Link>
        <Link href="/"className={`flex-auto self-stretch my-auto ${isActive('/') && 'text-fuchsia-800'}`}>Home</Link>
        <Link href="/career"className={`flex-auto self-stretch my-auto ${isActive('/career') && 'text-fuchsia-800'}`}>Career</Link>
        <Link href="/mybooking" className={`flex-auto self-stretch my-auto ${isActive('/mybooking') && 'text-fuchsia-800'}`}>Bookings</Link>
        <Link href="/categoriessection" className={`flex-auto self-stretch my-auto ${isActive('/categoriessection') && 'text-fuchsia-800'}`}>Category's</Link>
        <Link href="/contact" className={`flex-auto self-stretch my-auto ${isActive('/contact') && 'text-fuchsia-800'}`}>Contact</Link>
        <Link href="/aboutus" className={`flex-auto self-stretch my-auto ${isActive('/aboutus') && 'text-fuchsia-800'}`}>About</Link>
      </Box>
    </div>
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex gap-5 self-stretch my-auto whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <a href="#" className="justify-center px-4 py-5 my-auto text-base font-semibold text-center text-white capitalize bg-fuchsia-800 rounded-xl">
          Join as Service provider
        </a>
        <div className="flex bg-opacity-50  flex-col flex-1 justify-center my-auto text-base capitalize bg-white text-zinc-500">
          <div className="flex flex-col  justify-center py-4 w-full rounded-2xl border border-solid bg-zinc-50 bg-opacity-50  border-[color:var(--Gray-2,#7E7E7E)]">
            <div className="flex gap-1.5 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4d5bbd6666edbef154e5a47429ed5138c703d2d42c7ccf80e25a62b7301b8c3?"
                className="w-6 aspect-square"
                alt="Search Icon"
              />
              <div className="flex-auto my-auto">Search...</div>
            </div>
          </div>
        </div>
        <div onClick={()=>settoggle((pre)=>!pre)}>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9339a37db7cfe3629ebce54a663e6f76eee38c71d275668a6de76de8b6d3d0f4?"
          className="my-auto w-14 aspect-square"
          alt="Profile Icon"
        />
        </div>
                      
        {  toggle &&   <Box position={'absolute'} right={"15%"}  z-Index={"999"} top={"100%"} className="flex flex-col px-2.5 py-3.5 font-medium capitalize bg-white rounded-2xl shadow-lg max-w-80px">
      <div className="flex gap-5 justify-between">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e532e9f8ecb664a0c585eabc3382b581643dc40506d3d14f8b5229d7943de9d?"
          className="my-auto aspect-square w-[73px]"
        />
        <div className="flex flex-col flex-1">
          <div className="text-lg leading-7 text-stone-950">
            your order NO. #6487393 has been shipped successfully
          </div>
          <div className="flex gap-1 self-start mt-2 text-base leading-4 whitespace-nowrap text-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35da571dd80d9b4eda13f3883c355f3f08e1c3a306f23d4a76b8fbb36637b53b?"
              className="aspect-square w-[18px]"
            />
            <div className="grow">1 day</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e532e9f8ecb664a0c585eabc3382b581643dc40506d3d14f8b5229d7943de9d?"
          className="my-auto aspect-square w-[73px]"
        />
        <div className="flex flex-col flex-1">
          <div className="text-lg leading-7 text-stone-950">
            your order NO. #6487393 has been shipped successfully
          </div>
          <div className="flex gap-1 self-start mt-2 text-base leading-4 whitespace-nowrap text-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35da571dd80d9b4eda13f3883c355f3f08e1c3a306f23d4a76b8fbb36637b53b?"
              className="aspect-square w-[18px]"
            />
            <div className="grow">1 day</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1df73e266804a16ff442a322980b90c2acc4c789f0b58770d6d048b4c4cb726c?"
          className="my-auto aspect-square w-[73px]"
        />
        <div className="flex flex-col flex-1">
          <Box wordBreak={"break-word"} flexWrap={"wrap"}  className="text-lg leading-7 break-words text-neutral-400">
            your order NO. #6487393 has been shipped successfully
          </Box>
          <div className="flex gap-1 self-start mt-2 text-base leading-4 whitespace-nowrap text-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35da571dd80d9b4eda13f3883c355f3f08e1c3a306f23d4a76b8fbb36637b53b?"
              className="aspect-square w-[18px]"
            />
            <div className="grow">1 day</div>
          </div>
        </div>
      </div>
    </Box>  }

        <div className="flex gap-0 self-start px-3 py-5 text-base capitalize text-gray-950">
          <div className="grow my-auto">EN</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e219b116fba2ca047e0737584acf5b6813599f6eb38105c163f8830337e8ea71?"
            className="w-6 aspect-square"
            alt="Language Icon"
          />
        </div>
        <Link href="/myprofile">
          
        <div onClick={()=>settoggle2((pre)=>!pre)} className="flex gap-2 justify-between">
          <img
            loading="lazy"
            src="/Group 26086267.png"
            className="w-16 rounded-full aspect-square"
            alt="User Avatar"
          />
          <div className="flex gap-5 pt-2 pr-4 my-auto">
            <div className="flex flex-col flex-1">
              <div className="text-sm text-zinc-900">Welcome</div>
              <div className="mt-1 text-lg text-zinc-900">Mohamed Ahmed</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28740ab97823d9cfa4443b9ea34dd900aa63f7a15b8e5c6ed87d4483517d347?"
              className="my-auto w-4 aspect-[2] stroke-[1.5px] stroke-zinc-900"
              alt="Notification Icon"
              />
             
          </div>
          
        </div>
      {  toggle2 &&    <Box position={'absolute'} right={"0%"} top={"100%"}>
        <div className="flex flex-col justify-center capitalize max-w-[366px]">
      <div className="flex flex-col px-6 py-12 w-full bg-white rounded-2xl shadow-lg">
        <div className="flex gap-5 justify-between">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square w-[95px]"
          />
          <div className="flex flex-col flex-1 py-2.5 my-auto">
            <div className="text-lg font-semibold leading-9 whitespace-nowrap text-gray-950">
              Mohamed Ahmed Ali
            </div>
            <div className="mt-4 text-base leading-7 text-zinc-500">
              +20 1113 400 683
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-8 h-1.5 bg-neutral-100 rounded-[50px]" />
        <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/30f2dcd74d867a6a4c4beca9c6d73f7f1347f80977a54b80536cf6fb371fe1bd?"
            className="w-6 aspect-square"
          />
          <div className="flex-auto my-auto">Personal Information</div>
        </div>
        <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32dad1d7e2502fceaddb3bfda9df3e6e86531613f01903d89a19fdcbdd368aca?"
            className="w-6 aspect-square"
          />
          <div className="flex-auto self-start mt-2">Shipping Addresses</div>
        </div>
        <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf83899269ab12c3b2cabdc674a66af3c1232a49c7178c7547e0662c01ee879c?"
            className="w-6 aspect-square"
          />
          <div className="flex-auto self-start mt-2">Payment methods</div>
        </div>
        <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87543c269c5ee3dae8d6fbe8ad87733fb587a4ff079905b8770dd225a2d5c401?"
            className="w-6 aspect-square"
          />
          <div className="flex-auto my-auto">latest Orders</div>
        </div>
        <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/494d3d1f6f014ce76de9db32fcf848b07886f6daffd64af2a85c0aed871e1add?"
            className="w-6 aspect-square"
          />
          <div className="flex-auto my-auto">Task buzz credits</div>
        </div>
        <div className="flex gap-2 justify-between px-6 py-5 mt-4 mb-1 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fdb84b377d0240e731d723b6db4bd44bc9f8a95e6d6216d2897c2ae74f92c4?"
            className="w-6 aspect-square"
          />
          <div className="flex-auto my-auto">Track Order </div>
        </div>
      </div>
    </div>             
                </Box>}
              </Link>
      </div>
    </div>
  </div>
</div>
</div>


  );
}