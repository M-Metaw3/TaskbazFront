


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function Homesection2  () {
  return (
<>
<div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-2 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between px-5 text-center capitalize max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto text-2xl leading-5 text-stone-950">
                Edit address
              </div>{" "}
              <div className="justify-center items-center px-16 py-5 text-base font-semibold text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
                Add address
              </div>
            </div>{" "}
            <div className="shrink-0 mt-2.5 h-px bg-gray-200 rounded-2xl max-md:max-w-full" />{" "}
            <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1 px-5 max-md:max-w-full">
                <div className="text-sm font-medium leading-5 text-zinc-800 max-md:max-w-full">
                  Full Name
                </div>{" "}
                <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-2.5 text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:max-w-full">
                  Enter Full Name
                </div>
              </div>{" "}
              <div className="flex flex-col flex-1 px-5 max-md:max-w-full">
                <div className="text-sm font-medium leading-5 text-zinc-800 max-md:max-w-full">
                  Area
                </div>{" "}
                <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-2.5 text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:max-w-full">
                  Enter your Area
                </div>
              </div>
            </div>{" "}
            <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1 px-5 max-md:max-w-full">
                <div className="text-sm font-medium leading-5 text-zinc-800 max-md:max-w-full">
                  Mobile Number
                </div>{" "}
                <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-2.5 text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:max-w-full">
                  Enter mobile number
                </div>
              </div>{" "}
              <div className="flex flex-col flex-1 px-5 max-md:max-w-full">
                <div className="text-sm font-medium leading-5 text-zinc-800 max-md:max-w-full">
                  Street Name
                </div>{" "}
                <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-2.5 text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:max-w-full">
                  Enter street name
                </div>
              </div>
            </div>{" "}
            <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1 px-5 max-md:max-w-full">
                <div className="text-sm font-medium leading-5 text-zinc-800 max-md:max-w-full">
                  City
                </div>{" "}
                <div className="flex gap-5 justify-between py-5 pr-20 pl-5 mt-2.5 text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="flex-auto self-start mt-2">
                    -- Select the City --{" "}
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7ea0c447c37ccda59fdccfbc4e66ed05997d1b51d28fcdb9b14b972a57f5292?"
                    className="w-6 aspect-square"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col flex-1 self-start px-5 max-md:max-w-full">
                <div className="text-sm font-medium leading-5 text-zinc-800 max-md:max-w-full">
                  Building Name / NO.
                </div>{" "}
                <div className="justify-center items-start py-5 pr-16 pl-3.5 mt-2.5 text-base capitalize bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] text-neutral-400 max-md:pr-5 max-md:max-w-full">
                  Enter Building Name
                </div>
              </div>
            </div>{" "}
            <div className="flex gap-2 self-end mt-9 mr-36 text-lg font-semibold leading-5 capitalize whitespace-nowrap text-slate-600 max-md:mr-2.5">
              <div className="w-8 h-8 rounded-lg border-solid border-[1.5px] border-[color:var(--G-Soft,#D2D2D2)]" />{" "}
              <div className="grow self-start mt-3.5">
                Use as my default address.
              </div>
            </div>
          </div>
        </div>




{/* 
        <Input
            type="text"
            placeholder="Enter Building Name"
            bg="bg-white"
            rounded="2xl"
            border="1px solid var(--Gray-4,#C3C3C3)"
            text="text-neutral-400"
            maxW="full"
            p="8"
            pr="16"
            pl="3.5"
          /> */}
</>
  );
}