import { Box ,Input } from '@chakra-ui/react'
import { CircularProgress,InputLeftElement, CircularProgressLabel,InputGroup,Select,Button , Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Image from 'next/image';
export default function Homesection4OurClientsReviws() {
  return (
<>



<div className="flex flex-col justify-center px-0.5">
  <div className="flex flex-col px-5 py-12 bg-neutral-100 max-md:max-w-full">
    <div className="self-center mt-14 text-4xl text-center capitalize whitespace-nowrap leading-[48.62px] text-stone-950 max-md:mt-10">
      Our clients reviews{" "}
    </div>
    {/* <Box display={'flex'}  flexWrap={'wrap'}>
     */}
    <Box display={'flex'} >

    <Box  className="mt-14 mb-5 max-md:mt-10 max-md:max-w-full">
      <Box className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

        <Box className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-center px-10 py-5 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/Group 26086267.png"
              className="max-w-full rounded-full aspect-square w-[172px]"
            />
            <div className="flex flex-col justify-center self-stretch px-12 py-px mt-8 text-center max-md:px-5 max-md:max-w-full">
              <div className="self-center text-2xl font-bold text-fuchsia-800">
                Jone
              </div>
              <div className="mt-6 text-3xl text-neutral-700 max-md:max-w-full">
                The Services is awesome! Everything works perfectly
              </div>
            </div>
            <div className="flex gap-2 justify-center items-start py-3 mt-8 text-4xl text-center whitespace-nowrap text-neutral-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82040db3e0a0fe9182917d3e0af58851b621e3fa0794ea6885a31c1c85c1e00c?"
                className="w-8 aspect-[1.14]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdee965b09e65ddf9f9408b13521e5b6c32ade66ffc1099d3d06d4a691b59ae6?"
                className="w-8 aspect-[1.14]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb6feb1587237afc8d835ab2c634453c555d94fd16b6bed2ed5c52a8a8218e3?"
                className="w-8 aspect-[1.14]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6201a2cfd332b0f785ea30b5cbfc7a1af2fd9e6be58eec0970402dba98eaec5?"
                className="w-8 aspect-[1.14]"
              />
              <div className="grow self-stretch">4.5</div>
            </div>
            <div className="mt-8 text-xs leading-5 whitespace-nowrap text-neutral-700">
              Sun, Jan 16 at 12:30 PM
            </div>
          </div>
          
        </Box>

        
  
      </Box>
    </Box>
    <div className="mt-14 mb-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

        <div className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-center px-10 py-5 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/Ellipse 65.png"
              className="max-w-full rounded-full aspect-square w-[172px]"
            />
            <div className="flex flex-col justify-center self-stretch px-12 py-px mt-8 text-center max-md:px-5 max-md:max-w-full">
              <div className="self-center text-2xl font-bold text-fuchsia-800">
                Jone
              </div>
              <div className="mt-6 text-3xl text-neutral-700 max-md:max-w-full">
                The Services is awesome! Everything works perfectly
              </div>
            </div>
            <div className="flex gap-2 justify-center items-start py-3 mt-8 text-4xl text-center whitespace-nowrap text-neutral-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82040db3e0a0fe9182917d3e0af58851b621e3fa0794ea6885a31c1c85c1e00c?"
                className="w-8 aspect-[1.14]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdee965b09e65ddf9f9408b13521e5b6c32ade66ffc1099d3d06d4a691b59ae6?"
                className="w-8 aspect-[1.14]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb6feb1587237afc8d835ab2c634453c555d94fd16b6bed2ed5c52a8a8218e3?"
                className="w-8 aspect-[1.14]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6201a2cfd332b0f785ea30b5cbfc7a1af2fd9e6be58eec0970402dba98eaec5?"
                className="w-8 aspect-[1.14]"
              />
              <div className="grow self-stretch">4.5</div>
            </div>
            <div className="mt-8 text-xs leading-5 whitespace-nowrap text-neutral-700">
              Sun, Jan 16 at 12:30 PM
            </div>
          </div>
          
        </div>

        
  
      </div>
    </div>
    <div className="mt-14 mb-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

        <div className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-center px-10 py-5 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/Ellipse 64.png"
              className="max-w-full rounded-full aspect-square w-[172px]"
            />
            <div className="flex flex-col justify-center self-stretch px-12 py-px mt-8 text-center max-md:px-5 max-md:max-w-full">
              <div className="self-center text-2xl font-bold text-fuchsia-800">
                Jone
              </div>
              <div className="mt-6 text-3xl text-neutral-700 max-md:max-w-full">
                The Services is awesome! Everything works perfectly
              </div>
            </div>
            <div className="flex gap-2 justify-center items-start py-3 mt-8 text-4xl text-center whitespace-nowrap text-neutral-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82040db3e0a0fe9182917d3e0af58851b621e3fa0794ea6885a31c1c85c1e00c?"
                className="w-8 aspect-[1.14]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdee965b09e65ddf9f9408b13521e5b6c32ade66ffc1099d3d06d4a691b59ae6?"
                className="w-8 aspect-[1.14]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb6feb1587237afc8d835ab2c634453c555d94fd16b6bed2ed5c52a8a8218e3?"
                className="w-8 aspect-[1.14]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6201a2cfd332b0f785ea30b5cbfc7a1af2fd9e6be58eec0970402dba98eaec5?"
                className="w-8 aspect-[1.14]"
              />
              <div className="grow self-stretch">4.5</div>
            </div>
            <div className="mt-8 text-xs leading-5 whitespace-nowrap text-neutral-700">
              Sun, Jan 16 at 12:30 PM
            </div>
          </div>
          
        </div>

        
  
      </div>
    </div>
      </Box>






  </div>
</div>






</>
  );
}
