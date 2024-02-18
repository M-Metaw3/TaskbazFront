

import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function Categoryname () {
  return (


<>

<div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">

<div className="flex flex-col self-center mt-11 w-full max-w-[1590px] max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          
            <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-3.5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between px-5 capitalize max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto text-2xl leading-5 text-stone-950">
                    Wallet{" "}
                  </div>{" "}
                  <div className="justify-center px-16 py-5 text-base font-semibold text-center text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:pr-6 max-md:pl-6">
                    Send gift card
                  </div>
                </div>{" "}
                <div className="shrink-0 mt-2 h-px bg-gray-200 rounded-2xl max-md:max-w-full" />{" "}
                <div className="flex flex-col items-start py-5 pr-20 pl-5 mt-8 max-w-full text-sm font-semibold text-center text-black capitalize bg-white rounded-2xl shadow-lg w-[366px] max-md:px-5">
                  <div className="text-base text-neutral-700">
                    Avaliable balance{" "}
                  </div>{" "}
                  <div className="mt-7 text-5xl leading-5 text-stone-950 max-md:text-4xl max-md:leading-5">
                    <span className="text-amber-600">150</span>{" "}
                    <span className="text-4xl  text-stone-950">AED</span>
                  </div>{" "}
                  <div className="mt-7 leading-[143%]">50 AED Avilaible</div>{" "}
                  <div className="mt-3 whitespace-nowrap leading-[143%]">
                    100 AED from task buzz credits{" "}
                  </div>
                </div>{" "}
                <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-6 pt-6 pb-12 w-full capitalize bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-9 max-md:max-w-full">
                        <div className="text-lg font-bold leading-5 text-fuchsia-800 max-md:max-w-full">
                          Packages to earn credits
                        </div>{" "}
                        <div className="shrink-0 mt-5 h-px bg-fuchsia-900 bg-opacity-60 max-md:max-w-full" />{" "}
                        <div className="flex gap-5 justify-between mt-9 max-md:flex-wrap max-md:max-w-full">
                          <div className="flex flex-col">
                            <div className="text-lg font-medium leading-5 text-slate-600">
                              Package name{" "}
                            </div>{" "}
                            <div className="mt-4 text-base text-gray-600 whitespace-nowrap">
                              you will earn +1000 AED credits
                            </div>
                          </div>{" "}
                          <div className="self-start text-lg font-semibold leading-5 text-slate-600">
                            600 AED
                          </div>
                        </div>{" "}
                        <div className="shrink-0 mt-5 h-px bg-neutral-400 bg-opacity-30 max-md:max-w-full" />{" "}
                        <div className="flex gap-5 justify-between mt-5 text-lg leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                          <div className="flex-auto font-medium">
                            Package name{" "}
                          </div>{" "}
                          <div className="font-semibold">600 AED</div>
                        </div>{" "}
                        <div className="mt-4 text-base text-gray-600 max-md:max-w-full">
                          you will earn +1000 AED credits
                        </div>{" "}
                        <div className="shrink-0 mt-5 h-px bg-neutral-400 bg-opacity-30 max-md:max-w-full" />{" "}
                        <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
                          <div className="flex flex-col">
                            <div className="text-lg font-medium leading-5 text-slate-600">
                              Package name{" "}
                            </div>{" "}
                            <div className="mt-4 text-base text-gray-600 whitespace-nowrap">
                              you will earn +1000 AED credits
                            </div>
                          </div>{" "}
                          <div className="self-start text-lg font-semibold leading-5 text-slate-600">
                            600 AED
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-6 pt-5 pb-11 w-full capitalize bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-9 max-md:max-w-full">
                        <div className="text-lg font-bold leading-5 text-fuchsia-800 max-md:max-w-full">
                          Task buzz credits
                        </div>{" "}
                        <div className="shrink-0 mt-6 h-px bg-fuchsia-900 bg-opacity-60 max-md:max-w-full" />{" "}
                        <div className="flex gap-5 justify-between mt-9 text-lg leading-5 text-black max-md:flex-wrap max-md:max-w-full">
                          <div className="flex-auto">Service Name</div>{" "}
                          <div className="font-semibold">600 AED</div>
                        </div>{" "}
                        <div className="mt-5 text-base font-medium leading-5 text-red-500 max-md:max-w-full">
                          exp on Dec 04 , 2023
                        </div>{" "}
                        <div className="shrink-0 mt-4 h-px bg-neutral-400 bg-opacity-30 max-md:max-w-full" />{" "}
                        <div className="flex gap-5 justify-between mt-5 text-lg leading-5 text-black max-md:flex-wrap max-md:max-w-full">
                          <div className="flex-auto">Service Name</div>{" "}
                          <div className="font-semibold">600 AED</div>
                        </div>{" "}
                        <div className="mt-5 text-base font-medium leading-5 text-red-500 max-md:max-w-full">
                          exp on Dec 04 , 2023
                        </div>{" "}
                        <div className="shrink-0 mt-4 h-px bg-neutral-400 bg-opacity-30 max-md:max-w-full" />{" "}
                        <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
                          <div className="flex flex-col">
                            <div className="text-lg leading-5 text-black">
                              Service Name
                            </div>{" "}
                            <div className="mt-5 text-base font-medium leading-5 text-red-500 whitespace-nowrap">
                              exp on Dec 04 , 2023
                            </div>
                          </div>{" "}
                          <div className="self-start text-lg font-semibold leading-5 text-black">
                            600 AED
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex gap-5 justify-between px-5 mt-24 capitalize max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="flex-auto my-auto text-2xl leading-5 text-stone-950">
                    My saved card
                  </div>{" "}
                  <div className="justify-center px-14 py-5 text-base font-semibold text-center text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
                    Add a new card
                  </div>
                </div>{" "}
                <div className="shrink-0 mt-6 h-px bg-gray-200 rounded-2xl max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-end px-5 max-w-full w-[1182px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-6 py-4 mx-auto w-full text-base font-semibold capitalize bg-white rounded-2xl shadow-lg text-neutral-400 max-md:pl-5 max-md:mt-10">
                <div className="flex gap-1 justify-between whitespace-nowrap text-slate-600">
                  <div className="flex flex-col flex-1 justify-center">
                    <div className="flex gap-2 justify-between py-2 rounded-md bg-stone-50">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e665649100af59e5f0172e1d25eb08fbf2b6e775fc1eb29ec34b0b2c67527ab3?"
                        className="aspect-[1.59] w-[38px]"
                      />{" "}
                      <div className="flex-auto my-auto">MasterCard</div>
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6bed45c416b295e0d11abbb6707888b3d0ddd646fcb3d76b4ec7b2fded86b29?"
                    className="w-10 aspect-square"
                  />
                </div>{" "}
                <div className="mt-3">Name on Card :</div>{" "}
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  Ahmed Esaam{" "}
                </div>{" "}
                <div className="mt-2.5">Expiry Date :</div>{" "}
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  11/25
                </div>{" "}
                <div className="mt-2.5">Security Code (CVV/CVC) : Date :</div>{" "}
                <div className="mt-2.5 font-medium text-zinc-800">226</div>{" "}
                <div className="flex gap-1 justify-between mt-5 text-lg font-medium text-green-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/efb89b7ca05dce76f3d31ddf532546d212e1e9c311bafcb1a229f5cfe28e771b?"
                    className="self-start w-5 aspect-square"
                  />{" "}
                  <div className="flex-auto">Default address</div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-6 pt-4 pb-12 mx-auto w-full text-base font-semibold capitalize bg-white rounded-2xl shadow-lg text-neutral-400 max-md:pl-5 max-md:mt-10">
                <div className="flex gap-1 justify-between whitespace-nowrap text-slate-600">
                  <div className="flex flex-col flex-1 justify-center">
                    <div className="flex gap-2 justify-between py-2 rounded-md bg-stone-50">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f986938143054c8720bf1af24cfa209ede5110313bb025c0733373bec009ed9?"
                        className="aspect-[1.59] w-[38px]"
                      />{" "}
                      <div className="flex-auto my-auto">MasterCard</div>
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6bed45c416b295e0d11abbb6707888b3d0ddd646fcb3d76b4ec7b2fded86b29?"
                    className="w-10 aspect-square"
                  />
                </div>{" "}
                <div className="mt-3">Name on Card :</div>{" "}
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  Ahmed Esaam{" "}
                </div>{" "}
                <div className="mt-2.5">Expiry Date :</div>{" "}
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  11/25
                </div>{" "}
                <div className="mt-2.5">Security Code (CVV/CVC) : Date :</div>{" "}
                <div className="mt-2.5 font-medium text-zinc-800">226</div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-6 pt-4 pb-12 mx-auto w-full text-base font-semibold capitalize bg-white rounded-2xl shadow-lg text-neutral-400 max-md:pl-5 max-md:mt-10">
                <div className="flex gap-1 justify-between whitespace-nowrap text-slate-600">
                  <div className="flex flex-col flex-1 justify-center">
                    <div className="flex gap-2 justify-between py-2 rounded-md bg-stone-50">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/16ffd760530013825a9c408def1d203846768485cd19679387331a9f58e19899?"
                        className="aspect-[1.59] w-[38px]"
                      />{" "}
                      <div className="flex-auto my-auto">MasterCard</div>
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6bed45c416b295e0d11abbb6707888b3d0ddd646fcb3d76b4ec7b2fded86b29?"
                    className="w-10 aspect-square"
                  />
                </div>{" "}
                <div className="mt-3">Name on Card :</div>{" "}
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  Ahmed Esaam{" "}
                </div>{" "}
                <div className="mt-2.5">Expiry Date :</div>{" "}
                <div className="mt-2.5 text-2xl font-medium leading-5 text-zinc-800">
                  11/25
                </div>{" "}
                <div className="mt-2.5">Security Code (CVV/CVC) : Date :</div>{" "}
                <div className="mt-2.5 font-medium text-zinc-800">226</div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      </div>{" "}

          </>













  );
}