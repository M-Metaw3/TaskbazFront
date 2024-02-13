


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';



import React from 'react';

export default  function Category  () {
  return (

<Box>
  <Box w={"100%"}>
  <img
      loading="lazy"
      src="/Rectangle 3823.png"
      className="w-full aspect-[10]"
    />
  </Box>
<Box
border={"1px solid red"}
width={{xl:"100%",lg:"100%"}}
display={"flex"}
my={"35px"}
mx={"auto"}
justifyContent={"center"}
flexWrap={'wrap'}
>

<Box
width={{xl:"25%",sm:'100%'}}
border={"1px solid red"}
mr={"10px"}
>
<div className="flex flex-col justify-center max-w-full">
      <div className="flex flex-col px-3.5 py-4 w-full bg-white rounded-2xl shadow-lg">
        <div className="flex gap-2 self-start text-lg leading-5 text-center capitalize whitespace-nowrap text-stone-950">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5746ea82c748e47102b4aeb9e02316bd6ab53fc77427945cd42836f3da2b2b5f?"
            className="w-6 aspect-square"
          />
          <div>Filter</div>
        </div>
        <div className="mt-4 max-w-full h-0.5 rounded-3xl bg-neutral-100 w-[328px]" />
        <div className="mt-4 text-lg font-semibold leading-5 text-slate-600">
          Price
        </div>
        <div className="flex gap-5 justify-between py-0.5 pr-1.5 mt-4 w-full font-semibold whitespace-nowrap">
          <div className="flex gap-5 justify-between items-start">
            <div className="flex flex-col self-end mt-12 text-xs leading-4 text-stone-950">
              <div className="shrink-0 h-5 bg-fuchsia-800 rounded-full" />
              <div className="mt-1">0</div>
            </div>
            <div className="flex flex-col self-start text-sm leading-4 text-white">
              <div className="justify-center items-center px-2.5 h-11 bg-fuchsia-800 rounded-2xl aspect-square">
                500
              </div>
              <div className="self-center mt-2 bg-amber-600 rounded-md h-[11px] w-[3px]" />
            </div>
          </div>
          <div className="flex flex-col self-end mt-12 text-xs leading-4 text-stone-950">
            <div className="shrink-0 h-5 rounded-full bg-zinc-300" />
            <div className="mt-1">5000</div>
          </div>
        </div>
        <div className="flex gap-1 pr-20 mt-4 whitespace-nowrap text-zinc-800">
          <div className="grow my-auto text-base">from</div>
          <div className="flex flex-col flex-1 justify-center text-xs font-semibold leading-4">
            <div className="justify-center py-4 pr-3 pl-14 bg-white rounded-lg border border-solid border-[color:var(--Gray-5,#E0E0E0)]">
              EGP
            </div>
          </div>
          <div className="my-auto text-base text-stone-950">to</div>
          <div className="flex flex-col flex-1 justify-center font-semibold">
            <div className="flex gap-1.5 justify-between px-8 py-4 bg-white rounded-lg border border-solid border-[color:var(--Gray-5,#E0E0E0)]">
              <div className="text-base">to</div>
              <div className="text-xs leading-4">EGP</div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-lg font-semibold leading-5 text-slate-600">
          Offers
        </div>
        <div className="flex gap-2.5 justify-between mt-5">
          <div className="flex flex-col justify-center aspect-square">
            <div className="shrink-0 h-7 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)]" />
          </div>
          <div className="flex-auto my-auto text-sm leading-5 capitalize text-zinc-800">
            Best Selling
          </div>
        </div>
        <div className="flex gap-2.5 justify-between mt-5">
          <div className="flex flex-col justify-center aspect-square">
            <div className="shrink-0 h-7 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)]" />
          </div>
          <div className="flex-auto my-auto text-sm leading-5 capitalize text-zinc-800">
            with Offer
          </div>
        </div>
        <div className="flex gap-2.5 justify-between mt-5">
          <div className="flex flex-col justify-center aspect-square">
            <div className="shrink-0 h-7 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)]" />
          </div>
          <div className="flex-auto my-auto text-sm leading-5 capitalize text-zinc-800">
            Without Offer
          </div>
        </div>
        <div className="justify-center items-center px-16 py-5 mt-20 text-base font-semibold text-center text-white capitalize bg-fuchsia-800 rounded-xl">
          Apply{" "}
        </div>
        <div className="justify-center items-center px-16 py-5 mt-4 text-base font-semibold text-center capitalize rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400">
          Rest{" "}
        </div>
      </div>
    </div>
</Box>

<Box
border={"1px solid black"}
width={{xl:"70%",sm:'100%'}}

>
<Text ml={"10px"} mb={"10px"}>


<div className="text-2xl leading-5 text-center capitalize max-w-[329px] text-stone-950">
      <span className="font-bold">  Cleaning</span> Search Results: 14{" "}
    </div>
</Text>

<Box
w={{xl:"93%",lg:"90%"}}
>

<div className="flex flex-col justify-center w-full">
      <div className="px-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-10">
              <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                  <img
                    loading="lazy"
                    src="/Rectangle 3837 (2).png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                    Most popular
                  </div>
                </div>
                <div className="flex flex-col px-3 mt-3">
                  <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                    <div className="grow">4.7</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/037c99fe52903485a74dc0e7409883528c87c0334209e8b4c0191c847b07e275?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa069de1a87fcdbadebeb23437723b246d00dd409c0d870c2906d156e2ffbaa0?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e965a00ea09b1fba71dcc3160aeaa0e81bf6103546be0aefd06b7ff315d7668e?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b111921592299d55d4069529a2fca044ff27e78fac2776fa5a9c39ee433a9d5c?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7d70940f1690778d47d0935e977eeeb214888009032b9bf2c574d5688b5950?"
                      className="w-1 aspect-[0.29]"
                    />
                  </div>
                  <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
                    <div className="flex flex-col flex-1">
                      <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                        Part-time Home Cleaners
                      </div>
                      <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                        Cleaning{" "}
                      </div>
                    </div>
                    <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
                      20-50 LE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-10">
              <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                  <img
                    loading="lazy"
                    src="/Rectangle 3837 (2).png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                    Most popular
                  </div>
                </div>
                <div className="flex flex-col px-3 mt-3">
                  <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                    <div className="grow">4.7</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b4b0be65da1534523a1302f362abb11f6331c704b2e7e95ead2a4a3925088e3?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5712d8ae9b3eb683d06767e1edceace81f5d350fcb44162fc6fa2d2b2670a58?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/281b64a2da29bc93be34059c9de72a8f72229725e8ecfeb624c206747eb1e61d?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d42a7c906f7e13b90069044352f640b705fbc9df5d49226857ce9419f64ebdad?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/883c0a86a6a0bca772834395c6a90a6afe1dc8bde7600a52b3f114cdb6d49e6e?"
                      className="w-1 aspect-[0.29]"
                    />
                  </div>
                  <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
                    <div className="flex flex-col flex-1">
                      <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                        Part-time Home Cleaners
                      </div>
                      <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                        Cleaning{" "}
                      </div>
                    </div>
                    <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
                      20-50 LE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-10">
              <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                  <img
                    loading="lazy"
                    src="/Rectangle 3837 (2).png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                    Most popular
                  </div>
                </div>
                <div className="flex flex-col px-3 mt-3">
                  <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                    <div className="grow">4.7</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b8f317fa49d2da870fbc57ce2a347d6661585e3be0e6e96e1730f0cbddd220?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/96ccf5b3d27ba3f1612e179d4f69cae4bc4f302ca6d4783dfa15127980b744c8?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e6af86a1151f4baf8ae5a4f6b063ae9a1d309e88b2b054fc3ce586f689ac5cd?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c96c09de39a39c6d82ee94c2cbe6ee4898a6859a74c5648d392b5eefbd1a146?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4417aefd0a1c9008f0bec74ca713bd7776589c7dff4a9bd91f9f46d63f405702?"
                      className="w-1 aspect-[0.29]"
                    />
                  </div>
                  <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
                    <div className="flex flex-col flex-1">
                      <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                        Part-time Home Cleaners
                      </div>
                      <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                        Cleaning{" "}
                      </div>
                    </div>
                    <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
                      20-50 LE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-9 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-10">
              <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                  <img
                    loading="lazy"
                    src="/Rectangle 3837 (2).png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                    Most popular
                  </div>
                </div>
                <div className="flex flex-col px-3 mt-3">
                  <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                    <div className="grow">4.7</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d1e0e3e45baa568f8aa7c29c8039e3664daf363171cb2891d90052da5ab3c3e?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79a20161875098871a1b1d7404cf046fbdcdd43a0b9c24c7ab33d57a9c35e19?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc390fa33d0377889510d4e5cabf75645b60d6dbac42977d1fcff82a5f1e8e8?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f25c4991689c8201d21cc22837af1645bc343cffa37fc97487c6241e3fbe3b9?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/72d836ab1b92a919a4276aa5683a7615b04ca59be820ac0ddac43ea10782e15b?"
                      className="w-1 aspect-[0.29]"
                    />
                  </div>
                  <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
                    <div className="flex flex-col flex-1">
                      <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                        Part-time Home Cleaners
                      </div>
                      <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                        Cleaning{" "}
                      </div>
                    </div>
                    <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
                      20-50 LE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-10">
              <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                  <img
                    loading="lazy"
                    src="/Rectangle 3837 (2).png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                    Most popular
                  </div>
                </div>
                <div className="flex flex-col px-3 mt-3">
                  <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                    <div className="grow">4.7</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b535e02fde398aa45d6820a6e2d1bf0ba24bbbeb386e9ad3b58b42522e4f7824?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c14df4ddb1e937affd334f3dd25c2e1a2a3b2d83330f87b3957497b123d2a82a?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddbe39222cac9c5dd182a0a0ddd822059568c3d119538f5486b16c6e87ba9c8?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b267d82ab678d418c449abf58dc603e3098dd06f01d4e7cb67f98e9ccd51ace4?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ede76eeeca28f09fc0a70f1edcf2734d0182f6b17de3a87218bd5d175e465cd?"
                      className="w-1 aspect-[0.29]"
                    />
                  </div>
                  <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
                    <div className="flex flex-col flex-1">
                      <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                        Part-time Home Cleaners
                      </div>
                      <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                        Cleaning{" "}
                      </div>
                    </div>
                    <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
                      20-50 LE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-10">
              <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                  <img
                    loading="lazy"
                    src="/Rectangle 3837 (2).png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                    Most popular
                  </div>
                </div>
                <div className="flex flex-col px-3 mt-3">
                  <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                    <div className="grow">4.7</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/92e893de7e9218ea3c30c793693cd05e7d86bbc59fde9235b73d4e20e2bffd84?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8c4c46e7231d496252ba30d4c3020b2b92e433e3f06044a87ac07a1dd8df3e?"
                      className="w-3.5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d11754f0a58cc58e1eb88f2bbf56c070b6d0a9d6b26db1c8bc12a1859cae55d?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/018cd898723f24e09eb2afaa4632501c2972b05b2c9dd2dbe0ad9c64cf4ec966?"
                      className="aspect-[1.08] w-[15px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/31ae575615d1fce9f57d935b21a2d77436e4f35ecdb130897709eec7fc751288?"
                      className="w-1 aspect-[0.29]"
                    />
                  </div>
                  <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
                    <div className="flex flex-col flex-1">
                      <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                        Part-time Home Cleaners
                      </div>
                      <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                        Cleaning{" "}
                      </div>
                    </div>
                    <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
                      20-50 LE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center self-center px-1 mt-9 max-w-full text-xl whitespace-nowrap text-stone-950 w-[234px]">
        <div className="flex gap-4 items-center px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6e2c87caab525dfa3c06f1f4e7e0360b1abbfe325923523d82033e0b527145b?"
            className="self-stretch aspect-square w-[34px]"
          />
          <div className="self-stretch my-auto text-fuchsia-800">1</div>
          <div className="self-stretch my-auto">2</div>
          <div className="self-stretch my-auto">3</div>
          <div className="self-stretch my-auto">4</div>
          <div className="self-stretch my-auto">.....</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6819e41e566bc283cc2392721228bdeae19aaefbab68f64668e4c5e4945bee82?"
            className="self-stretch aspect-square w-[34px]"
          />
        </div>
      </div>
    </div>

</Box>
</Box>


</Box>

</Box>



  );
}