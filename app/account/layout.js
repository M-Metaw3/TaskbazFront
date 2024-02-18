// import { Inter } from "next/font/google";
// import { ChakraProvider,Box } from '@chakra-ui/react'
// import { Providers } from './providers'
// import  Footer from "@/components/Footer/Footer";
// import  Navbar from "@/components/Navbar/Navbar";
"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function RootLayout({ children }) {

  const pathname = usePathname()
  // const router = useRouter();

  const isActive = (path) => {
    console.log(path,pathname)
    return pathname === path;
  };
  return (
<>
   
<div className="flex  z-10 gap-5 justify-between items-start px-5 mt-8 max-w-full max-md:flex-wrap max-md:max-w-full">
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
  <div className="flex flex-col max-w-[50%] flex-1 px-16 py-9 mt-2.5 text-base bg-white rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
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
      <Link href={"/account"} className={`font-semibold ${isActive("/account")?'text-stone-950':'text-neutral-400'}`}>Sign In</Link>{" "}
      <Link href={"/account/registeration"} className={`flex-auto font-medium ${isActive("/account/registeration")? ' text-stone-950':'text-neutral-400'}`}>
        Sign Up
      </Link>
    </div>{" "}
    {children}
  
  
    <a href='/' className="self-center mt-8 font-semibold tracking-wide text-center text-fuchsia-800 whitespace-nowrap leading-[137.5%]">
      Skip for now
    </a>
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

 </>
  );
}
