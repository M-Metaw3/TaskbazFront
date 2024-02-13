import { Box ,Input } from '@chakra-ui/react'
import { CircularProgress,InputLeftElement, CircularProgressLabel,InputGroup,Select,Button , Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Image from 'next/image';
export default function Footer() {
  return (
<>



{/* <div className="flex flex-col pt-12 mt-20 w-full bg-slate-950 max-md:mt-10 max-md:max-w-full"> */}

<div className="flex flex-col justify-center">
<div className="flex flex-col pt-12 w-full bg-slate-950 max-md:max-w-full">
  <div className="self-center mt-1 w-full max-w-[1479px] max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <div className="px-5 max-md:max-w-full">
            <div className="flex justify-center gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee59263bb4b2568c8d2ab1e32a219095f1d5943c38ef165104793104ac2e8c7?"
                  className="max-w-full aspect-[1.45] w-[119px] max-md:mt-7"
                />
              </div>
              <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                <div className="text-lg text-white capitalize max-md:mt-7 max-md:max-w-full">
                  We, at P.Zone, pride ourselves in delivering the finest
                  quality suited for our customers' needs and will go to
                  great lengths to ensure their service satisfaction.As a
                  leading industry player, we strive to provide top-rated
                  services{" "}
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex gap-4 justify-between px-5 mt-6 text-base leading-6 text-zinc-50 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb82795c8d274c1ca4bc261737d4fb834cd5c16a108fdf8c7eab30faa95e9acc?"
              className="self-start w-7 aspect-square"
            />{" "}
            <div className="flex-auto max-md:max-w-full">
              <span className="">Phone</span>
              <br />
              <span className="">
                General Manager: Mrs. Magda Abdel-Razek
              </span>
              <br />
              <span className="">
                (+2) 01222285276 - 01222285279 - 01222274885
              </span>
            </div>
          </div>{" "}
          <div className="flex gap-4 justify-between pr-5 mt-7 text-base leading-6 text-zinc-50 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/360ad47aef564a262f113c1b2d89f71f6cd184c41f44d2da6265cdc8a6c9dfe7?"
              className="self-start w-7 aspect-square"
            />{" "}
            <div className="flex-auto max-md:max-w-full">
              <span className="">Email Address</span>
              <br />
              <span className="">ceo@bigtime-int.com</span>
              <br />
              <span className="">
                gm@bigtime-int.com - sales@bigtime-int.com
              </span>
            </div>
          </div>{" "}
          <div className="flex gap-5 justify-between px-5 mt-12 max-w-full w-[215px] max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/913c588312d1a9c472fd7e244e6a57592f6592167e67e438e466e4a768e6755e?"
              className="flex-1 shrink-0 w-full aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a83ee10220fc9180601b0b03828045bebf3d873917abc32381033335ad31cb0?"
              className="flex-1 shrink-0 w-full aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f23bcbebe46f36848896383987693058fc05eddc19f87f5b4705bb37c1f762?"
              className="flex-1 shrink-0 w-full aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a400263b3253d42fd34c5f6d0812e8459fd693e995b45d14d79d9f967123c2a?"
              className="flex-1 shrink-0 w-full aspect-square"
            />
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
        <div className="max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-base capitalize text-stone-300 max-md:mt-10">
                <div className="text-2xl text-white">Categories </div>{" "}
                <div className="mt-4 whitespace-nowrap">
                  Maintenance Services
                </div>{" "}
                <div className="mt-4 whitespace-nowrap">
                  Renovation Services
                </div>{" "}
                <div className="mt-4 whitespace-nowrap">
                  Engineering services
                </div>{" "}
                <div className="mt-4">Cleaning Services </div>{" "}
                <div className="mt-4">Moving Services </div>{" "}
                <div className="mt-4">General Services </div>{" "}
                <div className="mt-4">Salon Services</div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
              <div className="px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base capitalize whitespace-nowrap text-stone-300 max-md:mt-10">
                      <div className="text-2xl text-white">Career</div>{" "}
                      <div className="mt-4">hired</div>{" "}
                      <div className="mt-4">See our jobs</div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base capitalize text-stone-300 max-md:mt-10">
                      <div className="text-2xl text-white">Service</div>{" "}
                      <div className="mt-4">Hire professional</div>{" "}
                      <div className="mt-4 whitespace-nowrap">
                        Book a new request
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base capitalize text-stone-300 max-md:mt-10">
                      <div className="text-2xl text-white">FQA</div>{" "}
                      <div className="mt-4">Contact us</div>{" "}
                      <div className="mt-4">Who are we ? </div>{" "}
                      <div className="mt-4 whitespace-nowrap">
                        Terms & conditions{" "}
                      </div>{" "}
                      <div className="mt-4">Privacy & Policy </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  <div className="justify-center text-center items-center px-16 py-5 mt-14 w-full text-base underline capitalize bg-gray-900 text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <span className="text-zinc-500">© 2023 All right reserved by </span>
    <span className="text-zinc-500">Task buzz International</span>
    <span className="text-zinc-500">Developed By </span>
    <a
      href="https://knocktarget.com/"
      className="underline text-zinc-500"
      target="_blank"
    >
      Knock Target
    </a>
  </div>
</div>
</div>






</>
  );
}
