


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';


import Link from 'next/link';




import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Home() {
  return (
<>
<div className="flex flex-col px-6 pt-7 pb-12 bg-white rounded-2xl shadow-lg max-w-full max-md:px-5">
      <div className="mx-4 max-w-full bg-fuchsia-800 h-[7px] rounded-[41px] w-[730px] max-md:mr-2.5" />
      <div className="flex flex-col items-start py-7 pr-20 pl-4 mt-9 text-base font-semibold text-center capitalize rounded-2xl border border-solid bg-neutral-100 border-[color:var(--Gray-3,#969696)] max-md:pr-5 max-md:max-w-full">
        <div className="text-xl leading-4 text-stone-950 max-md:max-w-full">
          Your order Summry
        </div>
        <div className="flex gap-2.5 items-start pr-2 mt-4 text-white whitespace-nowrap leading-[83%]">
          <div className="grow justify-center self-stretch px-3 py-5 text-xl bg-fuchsia-800 rounded-xl">
            Book By Size
          </div>
          <div className="grow justify-center px-3 py-3.5 bg-fuchsia-800 rounded-xl">
            1 Hour{" "}
          </div>
          <div className="grow justify-center px-3 py-3.5 bg-fuchsia-800 rounded-xl">
            1 Cleaner{" "}
          </div>
        </div>
        <div className="flex gap-2.5 mt-2 whitespace-nowrap">
          <div className="grow justify-center px-3 py-3.5 leading-3 bg-fuchsia-800 rounded-xl text-neutral-200">
            Yes i need them <span className=" text-neutral-200">(+10 AED)</span>
          </div>
          <div className="justify-center px-3 py-3.5 text-white bg-fuchsia-800 rounded-xl leading-[83%]">
            Weekly
          </div>
        </div>
      </div>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base capitalize max-md:mt-9">
              <div className="text-stone-950">Get A discount </div>
              <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-5 whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5">
                Discount code{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base capitalize max-md:mt-9">
              <div className="text-stone-950">Task buzz credits</div>
              <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-5 whitespace-nowrap bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5">
                -100 AED
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 justify-between px-5 py-4 w-full bg-white rounded-2xl shadow-lg max-md:pl-5 max-md:mt-9">
              <div className="flex flex-col flex-1 text-base font-semibold capitalize text-neutral-400">
                <div className="flex gap-2 justify-between py-2 whitespace-nowrap rounded-md bg-stone-50 text-slate-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd69de665eea0a4d5e184f8c5e2d8864ccdd6987a68f250173268024bdb7584b?"
                    className="aspect-[1.59] w-[38px]"
                  />
                  <div className="flex-auto my-auto">MasterCard</div>
                </div>
                <div className="mt-3">Name on Card :</div>
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  Ahmed Esaam{" "}
                </div>
                <div className="mt-2.5">Expiry Date :</div>
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  11/25
                </div>
                <div className="mt-2.5 whitespace-nowrap">
                  Security Code (CVV/CVC) : Date :
                </div>
                <div className="mt-2.5 font-medium text-zinc-800">226</div>
                <div className="flex gap-1 justify-between mt-5 text-lg font-medium text-green-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e259b5d96137f919353cdcb28bacaaff78ee754baa5ebf0e812aaf6ea5e818a?"
                    className="self-start w-5 aspect-square"
                  />
                  <div className="flex-auto">Default address</div>
                </div>
              </div>
              <div className="flex flex-col justify-center self-start mt-2 aspect-square">
                <div className="flex flex-col justify-center p-1.5 rounded-full aspect-square stroke-[1px]">
                  <div className="shrink-0 h-3.5 bg-fuchsia-900 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 justify-between px-5 py-4 w-full text-base font-semibold capitalize bg-white rounded-2xl shadow-lg text-neutral-400 max-md:pl-5 max-md:mt-9">
              <div className="flex flex-col flex-1">
                <div className="flex gap-2 justify-between py-2 whitespace-nowrap rounded-md bg-stone-50 text-slate-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8e874ebc7ebeb56e76e6720038e9c697bae008985aa0068f6208fed86c7a343?"
                    className="aspect-[1.59] w-[38px]"
                  />
                  <div className="flex-auto my-auto">MasterCard</div>
                </div>
                <div className="mt-3">Name on Card :</div>
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  Ahmed Esaam{" "}
                </div>
                <div className="mt-2.5">Expiry Date :</div>
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  11/25
                </div>
                <div className="mt-2.5 whitespace-nowrap">
                  Security Code (CVV/CVC) : Date :
                </div>
                <div className="mt-2.5 font-medium text-zinc-800">226</div>
                <div className="flex gap-1 justify-between mt-5 text-lg font-medium text-green-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e259b5d96137f919353cdcb28bacaaff78ee754baa5ebf0e812aaf6ea5e818a?"
                    className="self-start w-5 aspect-square"
                  />
                  <div className="flex-auto">Default address</div>
                </div>
              </div>
              <div className="self-start mt-2 w-6 h-6 rounded-full stroke-[1px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-4 text-base font-semibold text-center text-fuchsia-900 capitalize whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2.5 justify-between px-14 py-5 rounded-xl max-md:px-5">
          <div className="grow my-auto">New card</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be61fe463c616dc3d18c22c2f5ec5bbdb4f284545233d72728272e57ed074889?"
            className="w-6 aspect-square"
          />
        </div>
        <div className="flex gap-2.5 justify-between px-14 py-5 rounded-xl border border-solid border-[color:var(--bw-black,#0F1010)] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5a63722df2c6964da990cb0f319acf1ff997297cef41453e0193a65caac231f?"
            className="w-6 aspect-square"
          />
          <div className="grow my-auto">Apple pay</div>
        </div>
        <div className="grow justify-center px-11 py-5 text-white bg-fuchsia-800 rounded-xl max-md:px-5">
          Cash on delivery{" "}
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-4 font-bold capitalize text-stone-950 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-base tracking-wide leading-6">
          Total Order amount{" "}
        </div>
        <div className="flex-auto text-4xl tracking-wider leading-6">
          73 AED
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-7 text-base font-semibold text-center capitalize whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="grow justify-center items-center px-16 py-5 rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400 max-md:px-5">
          Back
        </div>
        <Link href={"/checkout/checkoutstepseven"} className="grow justify-center items-center px-16 py-5 text-white bg-fuchsia-800 rounded-xl max-md:px-5">
          Processed to book
        </Link>
      </div>
    </div>



</>
  );
}
