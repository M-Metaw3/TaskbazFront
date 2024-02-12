import { Box ,Input } from '@chakra-ui/react'
import { CircularProgress,InputLeftElement, CircularProgressLabel,InputGroup,Select,Button , Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Image from 'next/image';
export default function Homesection() {
  return (
<>

<Box margin="auto"  className="flex flex-col justify-center bg-white">
      <Box   className="overflow-hidden px-10 py-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-lg leading-5 text-center text-amber-600 capitalize max-md:max-w-full">
                <span className="font-bold">Task buzz</span> Provide all kinds
                of services{" "}
              </div>
              <div className="mt-8  text-black text-6xl text-fuchsia-800 capitalize leading-[83px] max-md:max-w-full max-md:text-4xl max-md:leading-[64px]">
                From the comfort of your home <br />
                Getting your{" "}
                <span className="font-bold text-fuchsia-800">tasks done</span>
              </div>
              <div className="flex flex-col px-4 py-6 mt-8 bg-white rounded-2xl shadow-lg max-md:pr-5 max-md:max-w-full">
              <Box className="flex flex-col justify-center items-start py-6 pr-16 pl-5 text-xl leading-5 capitalize rounded-2xl shadow-sm bg-zinc-50 text-zinc-500 max-md:pr-5 max-md:max-w-full">
  <InputGroup w={'100%'}>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/34bc5291cb3964784fdf8e77f79420683454a52334a3770f298007ab2a799bea?"
      className="w-7 aspect-[1.16]"
    />
    <InputLeftElement pointerEvents='none'>
      {/* You can add any icon or content here if needed */}
    </InputLeftElement>
    <Input
      placeholder='  Search For the service you want.....'
      className="flex gap-1.5 border-none w-full"
      style={{ borderColor: 'transparent' }}
    />
  </InputGroup>
</Box>

                <div className="flex gap-4 justify-between mt-3.5 text-base capitalize text-zinc-500 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
  <Box border={"1px solid red"} className="flex gap-5 justify-between py-5 pr-14 pl-4 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
    <Select
      size='lg'
      placeholder='-- Select the Category --'
      className="flex-auto self-start mt-2 border-none w-full outline-none"
    >
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  </Box>
</div>
                  <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
  <Box border={"1px solid red"} className="flex gap-5 justify-between py-5 pr-14 pl-4 bg-white rounded-2xl border border-solid border-[color:var(--Gray-4,#C3C3C3)] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
    <Select
      size='lg'
      placeholder='-- Select the Category --'
      className="flex-auto self-start mt-2 border-none w-full outline-none"
    >
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  </Box>
</div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-10 w-full whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-1 my-auto text-zinc-800">
                    <div className="my-auto text-xl">from</div>
                    <div className="flex flex-col flex-1 justify-center text-base font-semibold leading-5">
                      <div className="justify-center items-start py-5 pr-4 pl-20 bg-white rounded-xl border-solid border-[1.3px] border-[color:var(--Gray-5,#E0E0E0)] max-md:pl-8">
                        EGP
                      </div>
                    </div>
                    <div className="my-auto text-xl text-stone-950">to</div>
                    <div className="flex flex-col flex-1 justify-center font-semibold">
                      <div className="flex gap-2.5 justify-between px-10 py-5 bg-white rounded-xl border-solid border-[1.3px] border-[color:var(--Gray-5,#E0E0E0)] max-md:px-5">
                        
                        <div className="text-base leading-5">EGP</div>
                      </div>
                    </div>



                    {/* <div className="flex flex-col flex-1 justify-center text-base font-semibold leading-5">
  <input
    type="text"
    className="justify-center items-start py-5 pr-4 pl-20 bg-white rounded-xl border-solid border-[1.3px] border-[color:var(--Gray-5,#E0E0E0)] max-md:pl-8"
    value="EGP"
    readOnly
  />
</div> */}

                  </div>
                
                  <button className="justify-center items-center px-16 py-5 text-base font-semibold text-center text-white capitalize bg-fuchsia-800 rounded-xl max-md:px-5 ">
                    Search
                  </button>
                
                </div>
              </div>
              <Box   className="flex gap-3.5 self-start mt-9 text-lg capitalize whitespace-nowrap text-gray-950">
              <AvatarGroup size='md' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>
                <div className="flex flex-col flex-1">
                  <div>Our Client’s reviews</div>
                  <div className="flex gap-1.5 justify-between pr-16 mt-1 max-md:pr-5">
                    <div className="grow">4.8</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3859efbbdab92b7ec6ca9aefdb03d58e6825d17344df5d0c51b0e707ae3e9897?"
                      className="my-auto aspect-[5.88] w-[83px]"
                    />
                  </div>
                </div>
              </Box>
              <Box   className="flex gap-0 mt-10 max-w-full w-[312px]">
              <Image
                  className="flex-1 shrink-0 w-full aspect-[2.94]"

        src="/App Store PNG.png" // path from the public directory
        alt="Example Image"
        width={500} // specify the width
        height={300} // specify the height
      />
        <Image
                  className="flex-1 shrink-0 w-full aspect-[2.94]"

        src="/Play Store PNG.png" // path from the public directory
        alt="Example Image"
        width={500} // specify the width
        height={300} // specify the height
      />
              </Box>
            </div>
          </div>
         
          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
     
                 <img
             
                  className="grow w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
             // path from the public directory

        src="/Group 26086731.png" // path from the public directory
        alt="Example Image"
        width={500} // specify the width
        height={300} // specify the height
      />
          </div>
        </div>
      </Box>
    </Box>






</>
  );
}
