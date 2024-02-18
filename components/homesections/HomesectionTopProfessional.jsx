import { Box ,Input } from '@chakra-ui/react'
import { CircularProgress,InputLeftElement, CircularProgressLabel,InputGroup,Select,Button , Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Image from 'next/image';
import Link from 'next/link';

export default function HomesectionTopProfessional() {
  return (
<>



<div className="flex flex-col">
      <div className="flex gap-5 justify-between px-5 w-full text-black capitalize max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-3xl">Top professional </div>
        <Link href={"/"} className="self-start text-xl">See all</Link>
      </div>
      <div className="px-5 mt-7 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <Link href={"/"} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center capitalize max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pb-4 bg-white rounded-2xl shadow-lg max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/Rectangle 3821.png"
                  className="w-full border-b border-solid aspect-[1.06] border-b-[color:var(--Gray-5,#E5E5E5)] max-md:max-w-full"
                />
                <div className="flex flex-col px-4 mt-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 leading-[143%]">
                      <div className="text-4xl whitespace-nowrap text-stone-950">
                        Mohamed Emad
                      </div>
                      <div className="mt-5 text-xl font-bold text-fuchsia-800">
                        mechanical{" "}
                      </div>
                      <div className="flex gap-1.5 justify-between pr-20 mt-3.5 text-lg whitespace-nowrap text-gray-950 max-md:pr-5">
                        <div>4.8</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be3f0800c59a266fb1bb84b7557d92c46067ea78c29ed3b1e33de90f5bbf7b7?"
                          className="my-auto aspect-[6.25] w-[83px]"
                        />
                      </div>
                    </div>
                    <div className="flex-auto self-end mt-20 text-base font-bold leading-4 text-fuchsia-800 max-md:mt-10">
                      20-30 L.E / hour
                    </div>
                  </div>
                  <div className="justify-center items-center self-end px-16 py-5 mt-3 max-w-full text-base font-semibold text-center whitespace-nowrap rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400 w-[250px] max-md:px-5">
                    Hire Now{" "}
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center capitalize max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pb-4 bg-white rounded-2xl shadow-lg max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/Rectangle 3821.png"
                  
                  className="w-full border-b border-solid aspect-[1.06] border-b-[color:var(--Gray-5,#E5E5E5)] max-md:max-w-full"
                />
                <div className="flex flex-col px-4 mt-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 leading-[143%]">
                      <div className="text-4xl whitespace-nowrap text-stone-950">
                        Mohamed Emad
                      </div>
                      <div className="mt-5 text-xl font-bold text-fuchsia-800">
                        mechanical{" "}
                      </div>
                      <div className="flex gap-1.5 justify-between pr-20 mt-3.5 text-lg whitespace-nowrap text-gray-950 max-md:pr-5">
                        <div>4.8</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be3f0800c59a266fb1bb84b7557d92c46067ea78c29ed3b1e33de90f5bbf7b7?"
                          className="my-auto aspect-[6.25] w-[83px]"
                        />
                      </div>
                    </div>
                    <div className="flex-auto self-end mt-20 text-base font-bold leading-4 text-fuchsia-800 max-md:mt-10">
                      20-30 L.E / hour
                    </div>
                  </div>
                  <div className="justify-center items-center self-end px-16 py-5 mt-3 max-w-full text-base font-semibold text-center whitespace-nowrap rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400 w-[250px] max-md:px-5">
                    Hire Now{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center capitalize max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pb-4 bg-white rounded-2xl shadow-lg max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/Rectangle 3821.png"
                  
                  className="w-full border-b border-solid aspect-[1.06] border-b-[color:var(--Gray-5,#E5E5E5)] max-md:max-w-full"
                />
                <div className="flex flex-col px-4 mt-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 leading-[143%]">
                      <div className="text-4xl whitespace-nowrap text-stone-950">
                        Mohamed Emad
                      </div>
                      <div className="mt-5 text-xl font-bold text-fuchsia-800">
                        mechanical{" "}
                      </div>
                      <div className="flex gap-1.5 justify-between pr-20 mt-3.5 text-lg whitespace-nowrap text-gray-950 max-md:pr-5">
                        <div>4.8</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be3f0800c59a266fb1bb84b7557d92c46067ea78c29ed3b1e33de90f5bbf7b7?"
                          className="my-auto aspect-[6.25] w-[83px]"
                        />
                      </div>
                    </div>
                    <div className="flex-auto self-end mt-20 text-base font-bold leading-4 text-fuchsia-800 max-md:mt-10">
                      20-30 L.E / hour
                    </div>
                  </div>
                  <div className="justify-center items-center self-end px-16 py-5 mt-3 max-w-full text-base font-semibold text-center whitespace-nowrap rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400 w-[250px] max-md:px-5">
                    Hire Now{" "}
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
