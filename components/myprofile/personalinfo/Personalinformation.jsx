

import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function Categoryname () {
  return (


<>



<div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
<div className="flex flex-col px-5 mt-2 max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-5 justify-between px-0.5 w-full text-center capitalize max-md:flex-wrap max-md:max-w-full">
    <div className="flex-auto my-auto text-2xl leading-5 text-stone-950">
      Personal Information
    </div>{" "}
    <div className="flex gap-4 justify-between text-base font-semibold max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-2.5 justify-between px-16 py-5 whitespace-nowrap rounded-xl border border-solid border-[color:var(--Gray-2,#7E7E7E)] text-zinc-500 max-md:px-5">
        <div className="grow my-auto">Edit profile</div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/85d5126f4eb250dae0d0f75f30e19bc96f36d3a78961e4cc4acffa30223d44df?"
          className="w-6 aspect-square"
        />
      </div>{" "}
      <div className="flex gap-2.5 justify-between px-20 py-5 text-red-500 rounded-xl border border-solid border-[color:var(--Red,#BE4545)] max-md:px-5">
        <div className="my-auto">Log out</div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/467cfa37de41e1c3f81db48fdf99093c2ed3edd1bec3f0636c5fa3d3734487b9?"
          className="w-6 aspect-square"
        />
      </div>
    </div>
  </div>{" "}
  <div className="shrink-0 mt-2.5 h-px bg-gray-200 rounded-2xl max-md:max-w-full" />{" "}
  <div className="flex gap-5 justify-between mt-5 text-base capitalize whitespace-nowrap text-zinc-900 max-md:flex-wrap max-md:max-w-full">
    <div className="grow justify-center items-start py-5 pr-16 pl-3.5 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5">
      Mohamed Ahmed Ali
    </div>{" "}
    <div className="grow justify-center items-start py-5 pr-16 pl-3.5 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5">
      010123456789
    </div>{" "}
    <div className="grow justify-center items-start py-5 pr-16 pl-3.5 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:pr-5">
      MohamedAhmedAli@user.com
    </div>
  </div>{" "}
  <div className="mt-12 text-2xl leading-5 text-center capitalize text-stone-950 max-md:mt-10 max-md:max-w-full">
    latest Orders
  </div>{" "}
  <div className="shrink-0 mt-7 bg-zinc-100 h-[3px] rounded-[50px] max-md:max-w-full" />{" "}
  <div className="mt-4 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow text-base max-md:mt-10">
          <img
            loading="lazy"
            src="/latestorder/Rectangle 3813 (1).png"
            className="z-10 w-full aspect-[1.82]"
          />{" "}
          <div className="flex flex-col px-2.5 pt-12 pb-4 mt-0 w-full bg-white rounded-2xl shadow-lg">
            <div className="flex gap-5 justify-between mt-14 text-xs leading-5 max-md:mt-10">
              <div className="font-bold text-lime-600 capitalize">
                Job Completed{" "}
              </div>{" "}
              <div className="flex-auto text-neutral-700">
                Sun, Jan 16 at 12:30 PM
              </div>
            </div>{" "}
            <div className="mt-3.5 font-bold capitalize text-ellipsis text-stone-950">
              1 cleaner with our supplier{" "}
            </div>{" "}
            <div className="flex gap-5 justify-between px-px mt-3 w-full text-sm capitalize">
              <div className="flex flex-col">
                <div className="flex gap-1.5 justify-between py-px leading-5 text-center whitespace-nowrap text-neutral-700">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e920bf6f3548ce479bc58aa8c5811beca757ecdea63a753864ed85ef1fb923d7?"
                    className="self-start aspect-square w-[18px]"
                  />{" "}
                  <div className="grow">
                    <span className="text-neutral-700">
                      Amount pied
                    </span>{" "}
                    <span className="text-neutral-700">AED79</span>{" "}
                  </div>
                </div>{" "}
                <div className="flex gap-2 justify-between py-px mt-3 leading-[129%]">
                  <div className="grow whitespace-nowrap text-slate-600">
                    Cost :
                  </div>{" "}
                  <div className="flex-auto font-bold text-fuchsia-800">
                    320 EGP
                  </div>
                </div>
              </div>{" "}
              <div className="flex gap-1.5 self-end mt-6 leading-7 text-center whitespace-nowrap text-stone-950">
                <div>By</div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a42e4ff9ff30d6261c787707faf7f7f2b95201a41ea7ed079f7bccd55c3809d?"
                  className="self-start aspect-square w-[26px]"
                />
              </div>
            </div>{" "}
            <div className="flex justify-center items-center px-16 py-4 mt-3 w-full text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
              <div className="flex gap-4">
                <div>Reorder</div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d1aa14a24067bdf852d2b90733d010a9aa2c995a8206d4ac3198bffe572128d?"
                  className="aspect-square w-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow text-base max-md:mt-10">
          <img
            loading="lazy"
            src="/latestorder/Rectangle 3813.png"
     
            className="z-10 w-full aspect-[1.82]"
          />{" "}
          <div className="flex flex-col px-2.5 pt-12 pb-4 mt-0 w-full bg-white rounded-2xl shadow-lg">
            <div className="flex gap-5 justify-between mt-14 text-xs leading-5 max-md:mt-10">
              <div className="font-bold text-lime-600 capitalize">
                Job Completed{" "}
              </div>{" "}
              <div className="flex-auto text-neutral-700">
                Sun, Jan 16 at 12:30 PM
              </div>
            </div>{" "}
            <div className="mt-3.5 font-bold capitalize text-ellipsis text-stone-950">
              1 cleaner with our supplier{" "}
            </div>{" "}
            <div className="flex gap-5 justify-between px-px mt-3 w-full text-sm capitalize">
              <div className="flex flex-col">
                <div className="flex gap-1.5 justify-between py-px leading-5 text-center whitespace-nowrap text-neutral-700">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e920bf6f3548ce479bc58aa8c5811beca757ecdea63a753864ed85ef1fb923d7?"
                    className="self-start aspect-square w-[18px]"
                  />{" "}
                  <div className="grow">
                    <span className="text-neutral-700">
                      Amount pied
                    </span>{" "}
                    <span className="text-neutral-700">AED79</span>{" "}
                  </div>
                </div>{" "}
                <div className="flex gap-2 justify-between py-px mt-3 leading-[129%]">
                  <div className="grow whitespace-nowrap text-slate-600">
                    Cost :
                  </div>{" "}
                  <div className="flex-auto font-bold text-fuchsia-800">
                    320 EGP
                  </div>
                </div>
              </div>{" "}
              <div className="flex gap-1.5 self-end mt-6 leading-7 text-center whitespace-nowrap text-stone-950">
                <div>By</div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3658d9389387672408d68c3dcbf26070273c492d9fd1f5c9ae76dc6d50d3882d?"
                  className="self-start aspect-square w-[26px]"
                />
              </div>
            </div>{" "}
            <div className="flex justify-center items-center px-16 py-4 mt-3 w-full text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
              <div className="flex gap-4">
                <div>Reorder</div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d1aa14a24067bdf852d2b90733d010a9aa2c995a8206d4ac3198bffe572128d?"
                  className="aspect-square w-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow text-base max-md:mt-10">
          <img
            loading="lazy"
            src="/latestorder/Rectangle 3813 (2).png"
            
            className="z-10 w-full aspect-[1.82]"
          />{" "}
          <div className="flex flex-col px-2.5 pt-12 pb-4 mt-0 w-full bg-white rounded-2xl shadow-lg">
            <div className="flex gap-5 justify-between mt-14 text-xs leading-5 max-md:mt-10">
              <div className="font-bold text-lime-600 capitalize">
                Job Completed{" "}
              </div>{" "}
              <div className="flex-auto text-neutral-700">
                Sun, Jan 16 at 12:30 PM
              </div>
            </div>{" "}
            <div className="mt-3.5 font-bold capitalize text-ellipsis text-stone-950">
              1 cleaner with our supplier{" "}
            </div>{" "}
            <div className="flex gap-5 justify-between px-px mt-3 w-full text-sm capitalize">
              <div className="flex flex-col">
                <div className="flex gap-1.5 justify-between py-px leading-5 text-center whitespace-nowrap text-neutral-700">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e920bf6f3548ce479bc58aa8c5811beca757ecdea63a753864ed85ef1fb923d7?"
                    className="self-start aspect-square w-[18px]"
                  />{" "}
                  <div className="grow">
                    <span className="text-neutral-700">
                      Amount pied
                    </span>{" "}
                    <span className="text-neutral-700">AED79</span>{" "}
                  </div>
                </div>{" "}
                <div className="flex gap-2 justify-between py-px mt-3 leading-[129%]">
                  <div className="grow whitespace-nowrap text-slate-600">
                    Cost :
                  </div>{" "}
                  <div className="flex-auto font-bold text-fuchsia-800">
                    320 EGP
                  </div>
                </div>
              </div>{" "}
              <div className="flex gap-1.5 self-end mt-6 leading-7 text-center whitespace-nowrap text-stone-950">
                <div>By</div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/da88f0493f989c4466bd5da146ec4d94a8c1d2e9b1dfef04a1856bf54192ec43?"
                  className="self-start aspect-square w-[26px]"
                />
              </div>
            </div>{" "}
            <div className="flex justify-center items-center px-16 py-4 mt-3 w-full text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
              <div className="flex gap-4">
                <div>Reorder</div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/131d8bb3d0c0db9689b0c8b98a74fee078968adba75f67eaed2cde763187e97d?"
                  className="aspect-square w-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> 











</>


  );
}