

import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';
import Link from 'next/link';



import React from 'react';

export default  function Categoryname () {
  return (



<div className="flex flex-col bg-neutral-100">

<div className="flex overflow-hidden relative flex-col items-start px-16 pt-12 pb-6 w-full text-lg font-light whitespace-nowrap min-h-[195px] max-md:px-5 max-md:max-w-full">
  <img
    loading="lazy"
    src="/category/Rectangle 3823 (2).png"
    className="object-cover absolute inset-0 size-full"
  />{" "}
  <div className="flex relative gap-0.5 mt-28 ml-28 max-md:mt-10 max-md:ml-2.5">
    <div className="grow text-stone-300">Home</div>{" "}
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/39cf4f7d7fcdd371fec9f3ca3fdafc2f3d153866c396bee3c3f7dce595448904?"
      className="w-4 aspect-square"
    />{" "}
    <div className="text-stone-300">Category’s</div>{" "}
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/39cf4f7d7fcdd371fec9f3ca3fdafc2f3d153866c396bee3c3f7dce595448904?"
      className="w-4 aspect-square"
    />{" "}
    <div className="grow font-bold text-white">Cleaning</div>
  </div>
</div>{" "}
<div className="self-center mt-11 w-full max-w-[1590px] max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
    <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-10">
        <div className="flex flex-col px-3.5 py-4 w-full bg-white rounded-2xl shadow-lg">
          <div className="flex gap-2 self-start text-lg leading-5 text-center capitalize whitespace-nowrap text-stone-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5746ea82c748e47102b4aeb9e02316bd6ab53fc77427945cd42836f3da2b2b5f?"
              className="w-6 aspect-square"
            />{" "}
            <div>Filter</div>
          </div>{" "}
          <div className="mt-4 max-w-full h-0.5 rounded-3xl bg-neutral-100 w-[328px] max-md:mr-2.5" />{" "}
          <div className="mt-4 text-lg font-semibold leading-5 text-slate-600">
            Price
          </div>{" "}
          <div className="flex gap-5 justify-between py-0.5 pr-1.5 mt-4 w-full font-semibold whitespace-nowrap">
            <div className="flex gap-5 justify-between items-start">
              <div className="flex flex-col self-end mt-12 text-xs leading-4 text-stone-950 max-md:mt-10">
                <div className="shrink-0 h-5 bg-fuchsia-800 rounded-full" />{" "}
                <div className="mt-1">0</div>
              </div>{" "}
              <div className="flex flex-col self-start text-sm leading-4 text-white">
                <div className="justify-center items-center px-2.5 h-11 bg-fuchsia-800 rounded-2xl aspect-square">
                  500
                </div>{" "}
                <div className="self-center mt-2 bg-amber-600 rounded-md h-[11px] w-[3px]" />
              </div>
            </div>{" "}
            <div className="flex flex-col self-end mt-12 text-xs leading-4 text-stone-950 max-md:mt-10">
              <div className="shrink-0 h-5 rounded-full bg-zinc-300" />{" "}
              <div className="mt-1">5000</div>
            </div>
          </div>{" "}
          <div className="flex gap-1 pr-20 mt-4 whitespace-nowrap text-zinc-800 max-md:pr-5">
            <div className="grow my-auto text-base">from</div>{" "}
            <div className="flex flex-col flex-1 justify-center text-xs font-semibold leading-4">
              <div className="justify-center py-4 pr-3 pl-14 bg-white rounded-lg border border-solid border-[color:var(--Gray-5,#E0E0E0)] max-md:pl-5">
                EGP
              </div>
            </div>{" "}
            <div className="my-auto text-base text-stone-950">to</div>{" "}
            <div className="flex flex-col flex-1 justify-center font-semibold">
              <div className="flex gap-1.5 justify-between px-8 py-4 bg-white rounded-lg border border-solid border-[color:var(--Gray-5,#E0E0E0)] max-md:px-5">
                <div className="text-base">to</div>{" "}
                <div className="text-xs leading-4">EGP</div>
              </div>
            </div>
          </div>{" "}
          <div className="mt-8 text-lg font-semibold leading-5 text-slate-600">
            Offers
          </div>{" "}
          <div className="flex gap-2.5 justify-between mt-5">
            <div className="flex flex-col justify-center aspect-square">
              <div className="shrink-0 h-7 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)]" />
            </div>{" "}
            <div className="flex-auto my-auto text-sm leading-5 capitalize text-zinc-800">
              Best Selling
            </div>
          </div>{" "}
          <div className="flex gap-2.5 justify-between mt-5">
            <div className="flex flex-col justify-center aspect-square">
              <div className="shrink-0 h-7 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)]" />
            </div>{" "}
            <div className="flex-auto my-auto text-sm leading-5 capitalize text-zinc-800">
              with Offer
            </div>
          </div>{" "}
          <div className="flex gap-2.5 justify-between mt-5">
            <div className="flex flex-col justify-center aspect-square">
              <div className="shrink-0 h-7 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)]" />
            </div>{" "}
            <div className="flex-auto my-auto text-sm leading-5 capitalize text-zinc-800">
              Without Offer
            </div>
          </div>{" "}
          <div className="justify-center items-center px-16 py-5 mt-20 text-base font-semibold text-center text-white capitalize bg-fuchsia-800 rounded-xl max-md:px-5 max-md:mt-10">
            Apply{" "}
          </div>{" "}
          <div className="justify-center items-center px-16 py-5 mt-4 text-base font-semibold text-center capitalize rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400 max-md:px-5">
            Rest{" "}
          </div>
        </div>{" "}
        <div className="flex flex-col px-3.5 pt-3 pb-7 mt-5 w-full text-lg capitalize bg-white rounded-2xl shadow-lg">
          <div className="flex gap-2 self-start text-center leading-[121%] text-stone-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4d1fb7cd6a31bff29e061d8bed31df91c4058424ea4a27f70164527d954565?"
              className="w-6 aspect-square"
            />{" "}
            <div className="flex-auto">Other Category’s </div>
          </div>{" "}
          <div className="shrink-0 mt-4 h-0.5 rounded-3xl bg-neutral-100" />{" "}
          <div className="flex gap-5 justify-between mt-4">
            <div className="flex flex-col flex-1 text-center leading-[156%]">
              <div className="flex gap-4 justify-between">
                <div className="grow justify-center px-2.5 py-1.5 text-green-600 bg-green-100 rounded-2xl">
                  Cleaning{" "}
                </div>{" "}
                <div className="grow justify-center px-2.5 py-1.5 text-teal-600 whitespace-nowrap bg-cyan-100 rounded-2xl">
                  Renovation
                </div>
              </div>{" "}
              <div className="flex gap-4 justify-between mt-3 whitespace-nowrap">
                <div className="grow justify-center px-2.5 py-1.5 text-pink-800 bg-pink-200 rounded-2xl">
                  General
                </div>{" "}
                <div className="grow justify-center px-2.5 py-1.5 text-yellow-700 bg-orange-100 rounded-2xl">
                  Moving
                </div>
              </div>{" "}
              <div className="justify-center px-2.5 py-1.5 mt-3 text-violet-900 bg-violet-200 rounded-2xl">
                Nannies and maids
              </div>
            </div>{" "}
            <div className="flex gap-0 self-end mt-32 whitespace-nowrap leading-[111%] text-slate-600 max-md:mt-10">
              <div className="grow my-auto">See all</div>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5937e8a8200135a217b696cc23ec304c32e7839b5241a2fb3cf787f88ef71df0?"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-5 w-full text-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto my-auto text-2xl leading-5 capitalize text-stone-950">
            Cleaning
          </div>{" "}
          <div className="flex gap-3 justify-between text-xl leading-8 max-md:flex-wrap max-md:max-w-full">
            <div className="grow my-auto text-stone-950">Sort by :</div>{" "}
            <div className="flex flex-col flex-1 justify-center text-zinc-900 max-md:max-w-full">
              <div className="flex gap-0 rounded-xl bg-zinc-300 max-md:flex-wrap max-md:max-w-full">
                <div className="grow justify-center px-3 py-3 text-white bg-fuchsia-800 rounded-xl">
                  Most popular
                </div>{" "}
                <div className="grow justify-center px-9 py-3 bg-white max-md:px-5">
                  Top sale
                </div>{" "}
                <div className="grow justify-center px-6 py-3 bg-white max-md:px-5">
                  High Price
                </div>{" "}
                <div className="grow justify-center px-3.5 py-3 bg-white rounded-none">
                  Lowest Price
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="px-5 mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <Link href={"/servicies/1"}>
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                  <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                    <img
                      loading="lazy"
                      src="/Rectangle 3837 (3).png"
                      className="object-cover absolute inset-0 size-full"
                    />{" "}
                    <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                      Most popular
                    </div>
                  </div>{" "}
                  <div className="flex flex-col px-3 mt-3">
                    <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                      <div className="grow">4.7</div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ae7d0b7fce6b96fb88bc895b0085f3e261a083b764e7eb396229ad21f18c14?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/57bab82a071fc58aa3b23430ebbebd278048e6b1d7d1771865109c4d3806684a?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43cbc8cda507b54456d912985c2423f7b9eb429d9a85490fd1cf2f2b0c2b0323?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f0f25a7ccaffd800236fc8599e542411809a43346832d06e97d3e23b036b91a?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/273459cf528586768a107cd1df6438c781f3cde0276c87a50059a84f6fbc20ca?"
                        className="w-1 aspect-[0.29]"
                      />
                    </div>{" "}
                    <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
                      <div className="flex flex-col flex-1">
                        <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                          Part-time Home Cleaners
                        </div>{" "}
                        <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                          Cleaning{" "}
                        </div>
                      </div>{" "}
                      <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
                        20-50 LE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link >
            </div>{" "}

            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                  <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                    <img
                      loading="lazy"
                      src="/Rectangle 3837 (3).png"
                      className="object-cover absolute inset-0 size-full"
                    />{" "}
                    <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                      Most popular
                    </div>
                  </div>{" "}
                  <div className="flex flex-col px-3 mt-3">
                    <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                      <div className="grow">4.7</div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1178fb56183805ade509e71c4c5fe2dbe798b6f32f4348d62b58b4a0124ac92?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34562321a0c6b8e3f3a8adc0feb838ba13fcfb6f787c8f0c3e05cfa3a850340b?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/550298379d9150f975b32f04aaf2ee608c915178a10f82aae4eb50dfd8f50c53?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fdd1fc95ca3780cc990efb8d3af3e8d598089fa40fdb2b3b6d3fa7b64703fe4?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b283198a98461cb3f9f69243dedbadf9795edd67432945959c7ef38a6cf9ad59?"
                        className="w-1 aspect-[0.29]"
                      />
                    </div>{" "}
                    <div className="flex gap-5 justify-between pt-1.5 mt-7 text-center capitalize">
                      <div className="flex flex-col">
                        <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                          Related Services
                        </div>{" "}
                        <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                          Cleaning{" "}
                        </div>
                      </div>{" "}
                      <div className="self-end mt-12 text-xl leading-7 text-fuchsia-900 max-md:mt-10">
                        20-50 LE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                  <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                    <img
                      loading="lazy"
                      src="/Rectangle 3837 (3).png"
                      className="object-cover absolute inset-0 size-full"
                    />{" "}
                    <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                      Most popular
                    </div>
                  </div>{" "}
                  <div className="flex flex-col px-3 mt-3">
                    <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                      <div className="grow">4.7</div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d104ebc9bfd287f35d31dc31f176790f655fd5f55053021f09e3e0b8a382df5c?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/275bde11f4a803e28a88c4ea0888cf94d8019091c8a264a218076b0061056cb5?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d125ae0b382c41ea6f3131f8564ecfc779fceb437292ed31779562031fd1e2b?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c0f01d9f05c3d28421b8059e217a4de676a7d3dc993d5ceb11bfafc36760245?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b7d3ac023be2153998865e82aa47ce9170a8b43de85eaad6a59b7bb379a9d1d?"
                        className="w-1 aspect-[0.29]"
                      />
                    </div>{" "}
                    <div className="flex gap-5 justify-between pt-1.5 mt-7 text-center capitalize">
                      <div className="flex flex-col">
                        <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                          Deep Cleaning
                        </div>{" "}
                        <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                          Cleaning{" "}
                        </div>
                      </div>{" "}
                      <div className="self-end mt-12 text-xl leading-7 text-fuchsia-900 max-md:mt-10">
                        20-50 LE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="px-5 mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                  <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                    <img
                      loading="lazy"
                      src="/Rectangle 3837 (3).png"
                      className="object-cover absolute inset-0 size-full"
                    />{" "}
                    <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                      Most popular
                    </div>
                  </div>{" "}
                  <div className="flex flex-col px-3 mt-3">
                    <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                      <div className="grow">4.7</div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/42e2d562a26989d63a23819a053fa1098ada79f9317a757bba4c419dbb19f2bf?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/292d84c46b916754175011b0d5240f421e37385ae5d6f47fd75bd0fc0ff5eae2?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2537dcd5416b36668c6e5465b71ded6840a7790d7a076bc7027fe90ccd33c2b5?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe3d3291f95b5396aaaee864129f4579035cd2fa418494b17b69fb2470f9cdc2?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5255abe0fce1cea58a1f11fe1e224995f83d04ebc3754ac426f984419d86d2cd?"
                        className="w-1 aspect-[0.29]"
                      />
                    </div>{" "}
                    <div className="flex gap-5 justify-between pt-1.5 mt-7 text-center capitalize">
                      <div className="flex flex-col">
                        <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                          Deep Cleaning
                        </div>{" "}
                        <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                          Cleaning{" "}
                        </div>
                      </div>{" "}
                      <div className="self-end mt-12 text-xl leading-7 text-fuchsia-900 max-md:mt-10">
                        20-50 LE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                  <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                    <img
                      loading="lazy"
                      src="/Rectangle 3837 (3).png"
                      className="object-cover absolute inset-0 size-full"
                    />{" "}
                    <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                      Most popular
                    </div>
                  </div>{" "}
                  <div className="flex flex-col px-3 mt-3">
                    <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                      <div className="grow">4.7</div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee0b01ba51fee96ac5c122785dc872d45f2c741f451a681ea6b0567ecac23eeb?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af3d62ddba5b6a400b95c4db4e0132d7723784b0b8d087139a109a41c859f44?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef7c112c687b32de528d85371fdf76473b92bf20e17451b8d13a4207687043f?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8efad9eb7aeb9b12e34b5e0c572e85df6ed9584c983494170b8e3ae80276fd41?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e151181df8aeaad3be17244078b0320cc234b0857a92d53a87a8701d1e2a8bba?"
                        className="w-1 aspect-[0.29]"
                      />
                    </div>{" "}
                    <div className="flex gap-5 justify-between pt-1.5 mt-7 text-center capitalize">
                      <div className="flex flex-col">
                        <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                          Deep Cleaning
                        </div>{" "}
                        <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                          Cleaning{" "}
                        </div>
                      </div>{" "}
                      <div className="self-end mt-12 text-xl leading-7 text-fuchsia-900 max-md:mt-10">
                        20-50 LE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                  <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                    <img
                      loading="lazy"
                      src="/Rectangle 3837 (3).png"
                      className="object-cover absolute inset-0 size-full"
                    />{" "}
                    <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                      Most popular
                    </div>
                  </div>{" "}
                  <div className="flex flex-col px-3 mt-3">
                    <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                      <div className="grow">4.7</div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/05a9c4db1402f8297edcd1990c0c79b7119ceb9445bf9d7c33c18dfd05c8f7ba?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e561618d3fbd0f205a85b928170205b59ff389fc04fa8ff18b53ef7c1aac73c?"
                        className="w-3.5 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef958f535212a4ca385ef19c208f11782335aa609480e33788d0152ba1a94eb1?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a53ec3d7e217b29abe0853083ffbbb8e761a1af9d3302ee79eaf6d728061f30d?"
                        className="aspect-[1.08] w-[15px]"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7466f76af6cbad5abe6b19952e860d38f2c626853144cb5da486a521847c0041?"
                        className="w-1 aspect-[0.29]"
                      />
                    </div>{" "}
                    <div className="flex gap-5 justify-between pt-1.5 mt-7 text-center capitalize">
                      <div className="flex flex-col">
                        <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                          Deep Cleaning
                        </div>{" "}
                        <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                          Cleaning{" "}
                        </div>
                      </div>{" "}
                      <div className="self-end mt-12 text-xl leading-7 text-fuchsia-900 max-md:mt-10">
                        20-50 LE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col justify-center self-center px-1 mt-9 max-w-full text-xl whitespace-nowrap text-stone-950 w-[234px]">
          <div className="flex gap-4 items-center px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55765dfd174859508a10d22e462614a3b05458abb0c66b14784f409ce51d0fc2?"
              className="self-stretch aspect-square w-[34px]"
            />{" "}
            <div className="self-stretch my-auto text-fuchsia-800">1</div>{" "}
            <div className="self-stretch my-auto">2</div>{" "}
            <div className="self-stretch my-auto">3</div>{" "}
            <div className="self-stretch my-auto">4</div>{" "}
            <div className="self-stretch my-auto">.....</div>{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ecd6abe2cde25beff5eb39362972725e20a1e89e7e021974a6c4c4bf3fe804?"
              className="self-stretch aspect-square w-[34px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>{" "}

</div>

  );
}