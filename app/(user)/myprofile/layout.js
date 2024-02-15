
"use client"

// export const metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };
import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';





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
      <div className="flex flex-col bg-neutral-100">

<div className="flex overflow-hidden relative flex-col items-start px-16 pt-12 pb-6 w-full text-lg whitespace-nowrap min-h-[195px] max-md:px-5 max-md:max-w-full">
  <img
    loading="lazy"
    src="/Profile/Rectangle 3823 (7).png"
    className="object-cover absolute inset-0 size-full"
  />{" "}
  <div className="flex relative gap-0.5 mt-28 ml-28 max-md:mt-10 max-md:ml-2.5">
    <div className="grow font-light text-stone-300">Home</div>{" "}
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/983c3fb962e36b673b1dee3246660f428c4dc6fe6553b819ffd7a6ecaa49b75b?"
      className="w-4 aspect-square"
    />{" "}
    <div className="grow font-bold text-neutral-100">Profile</div>
  </div>
</div>{" "}
<div className="self-center mt-11 w-full max-w-[1590px] max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
    <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center capitalize max-md:mt-10">
        <div className="flex flex-col px-6 py-12 w-full bg-white rounded-2xl shadow-lg max-md:px-5">
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="/Group 26086267.png"
              className="aspect-square w-[95px]"
            />{" "}
            <div className="flex flex-col flex-1 py-2.5 my-auto">
              <div className="text-lg font-semibold leading-9 whitespace-nowrap text-gray-950">
                Mohamed Ahmed Ali
              </div>{" "}
              <div className="mt-4 text-base leading-7 text-zinc-500">
                +20 1113 400 683
              </div>
            </div>
          </div>{" "}
          <div className="shrink-0 mt-8 h-1.5 bg-neutral-100 rounded-[50px]" />{" "}
          <Link href={"/myprofile"}>
          <div className={`flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold rounded-xl border border-solid  border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700 max-md:px-5 ${isActive('/myprofile') ? "bg-fuchsia-800 text-white":'bg-white text-neutral-700' }`}>
            <img
              loading="lazy"
              src="/profile.png"
              className="w-6 aspect-square"
             
            />{" "}
            <div className="flex-auto my-auto">Personal Information</div>
          </div>{" "}
          </Link>
          <Link href={"/myprofile/shippingAdresses"}>

          <div className={`flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold rounded-xl border border-solid  border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700 max-md:px-5 ${isActive('/myprofile/shippingAdresses') ? "bg-fuchsia-800 text-white":'bg-white text-neutral-700' }`}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e01cf6f86d46ae46d8b135d1bf0630daacde9b2fc056e9672a4cba18528b1d1?"
              className="w-6 aspect-square"
            />{" "}
            <div className="flex-auto self-start mt-2">
              Shipping Addresses
            </div>
          </div>{" "}
          </Link>
          <Link href={"/myprofile/PaymentMethods"}>

          <div className={`flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold rounded-xl border border-solid  border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700 max-md:px-5 ${isActive('/myprofile/PaymentMethods') ? "bg-fuchsia-800 text-white":'bg-white text-neutral-700' }`}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/306ae05855b4292558f451b65ab278e97c8b45a63382e2a1816ade848525988c?"
              className="w-6 aspect-square"
            />{" "}
            <div className="flex-auto self-start mt-2">
              Payment methods
            </div>
          </div>{" "}
          </Link>
          <Link href={"/myprofile"}>

          <div className={`flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold rounded-xl border border-solid  border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700 max-md:px-5 ${isActive('/myprofile/LatestOrders') ? "bg-fuchsia-800 text-white":'bg-white text-neutral-700' }`}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9689d3ce3f777f8ecc28f02117075da92e261bd522fef9296a658c0a3bcfbb?"
              className="w-6 aspect-square"
            />{" "}
            <div className="flex-auto my-auto">latest Orders</div>
          </div>{" "}
          </Link>
          <Link href={"/myprofile"}>

          <div className={`flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold rounded-xl border border-solid  border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700 max-md:px-5 ${isActive('/myprofile/TaskBuzzCredits') ? "bg-fuchsia-800 text-white":'bg-white text-neutral-700' }`}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/494d3d1f6f014ce76de9db32fcf848b07886f6daffd64af2a85c0aed871e1add?"
              className="w-6 aspect-square"
            />{" "}
        

            <div className="flex-auto my-auto">Task buzz credits</div>

          </div>{" "}
          </Link>
          <Link href={"/myprofile"}>

          <div className={`flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold rounded-xl border border-solid  border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700 max-md:px-5 ${isActive('/myprofile/TrackOrder') ? "bg-fuchsia-800 text-white":'bg-white text-neutral-700' }`}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fdb84b377d0240e731d723b6db4bd44bc9f8a95e6d6216d2897c2ae74f92c4?"
              className="w-6 aspect-square"
            />{" "}
            
            <div className="flex-auto my-auto">Track Order </div>
          </div>
          </Link>

        </div>
      </div>
    </div>{" "}










    {children}












  </div>
</div>{" "}

</div>

        

    
    </>
  );
}