


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function Navbar  () {
  return (



    <div className="flex flex-col justify-center">
      <div className="pr-7 w-full bg-white shadow-sm max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between items-center text-base leading-6 capitalize text-gray-950 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/18bac309c301db4b6398c55bf181ba6ba3a58be85b910ed323518266187a3b7c?"
                className="self-stretch max-w-full aspect-[1.27] fill-white w-[145px]"
              />
              <div className="self-stretch my-auto font-bold text-fuchsia-800">
                Home
              </div>
              <div className="flex-auto self-stretch my-auto">My Bookings</div>
              <div className="self-stretch my-auto">Category's</div>{" "}
              <div className="self-stretch my-auto">Contact us</div>{" "}
              <div className="grow self-stretch my-auto whitespace-nowrap">
                About us
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 self-stretch my-auto whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="justify-center px-4 py-5 my-auto text-base font-semibold text-center text-white capitalize bg-fuchsia-800 rounded-xl">
                join as Service provider
              </div>{" "}
              <div className="flex gap-3 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col flex-1 justify-center my-auto text-base capitalize bg-white text-zinc-500">
                  <div className="flex flex-col justify-center py-4 w-full rounded-2xl border border-solid bg-zinc-50 border-[color:var(--Gray-2,#7E7E7E)]">
                    <div className="flex gap-1.5 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4d5bbd6666edbef154e5a47429ed5138c703d2d42c7ccf80e25a62b7301b8c3?"
                        className="w-6 aspect-square"
                      />{" "}
                      <div className="flex-auto my-auto">Search...</div>
                    </div>
                  </div>
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9339a37db7cfe3629ebce54a663e6f76eee38c71d275668a6de76de8b6d3d0f4?"
                  className="my-auto w-14 aspect-square"
                />{" "}
                <div className="flex gap-0 self-start px-3 py-5 text-base capitalize text-gray-950">
                  <div className="grow my-auto">EN</div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e219b116fba2ca047e0737584acf5b6813599f6eb38105c163f8830337e8ea71?"
                    className="w-6 aspect-square"
                  />
                </div>{" "}
                <div className="flex gap-2 justify-between">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="w-16 rounded-full aspect-square"
                  />{" "}
                  <div className="flex gap-5 pt-2 pr-4 my-auto">
                    <div className="flex flex-col flex-1">
                      <div className="text-sm text-zinc-900">Welcome</div>{" "}
                      <div className="mt-1 text-lg text-zinc-900">
                        Mohamed Ahmed
                      </div>
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28740ab97823d9cfa4443b9ea34dd900aa63f7a15b8e5c6ed87d4483517d347?"
                      className="my-auto w-4 aspect-[2] stroke-[1.5px] stroke-zinc-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}