



import  Personalinformation from "@/components/myprofile/personalinfo/Personalinformation";






import Link from 'next/link';



import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Home() {
  return (
<>

<div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-2 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-5 w-full text-center capitalize max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto my-auto text-2xl leading-5 text-stone-950">
            Shipping Addresses
          </div>{" "}
          <Link href={"/myprofile/(usersformpaymenteditingprofile/editadress"}>
          <div className="flex gap-2.5 justify-between px-8 py-5 text-base font-semibold text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
            <div className="grow my-auto">add new address</div>{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/026520e292240e5817d2c3b0ded0c088076bb1d1156b5864610712cb17064b6b?"
              className="w-6 aspect-square"
            />
          </div>
          </Link>
        </div>{" "}
        <div className="shrink-0 mt-2.5 h-px bg-gray-200 rounded-2xl max-md:max-w-full" />{" "}
        <div className="mt-5 max-w-full w-[774px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center shadow-lg max-md:mt-10">
                <div className="flex flex-col px-6 py-4 w-full bg-white rounded-2xl shadow-lg max-md:pl-5">
                  <div className="flex gap-5 justify-between">
                    <img
                      loading="lazy"
                      src="/Profile/Frame (2).png"

                      className="max-w-full aspect-[1.02] w-[108px]"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/897bd5e1388c81a5735c72940ea423f6d1f12785d52d5498f71d05896be7b1b3?"
                      className="self-start aspect-[2.33] w-[92px]"
                    />
                  </div>{" "}
                  <div className="mt-4 text-2xl font-medium leading-5 capitalize text-zinc-800">
                    mohamed Ahmed Ali
                  </div>{" "}
                  <div className="mt-2.5 text-base font-semibold capitalize text-zinc-800">
                    +20 1113 400 324{" "}
                  </div>{" "}
                  <div className="mt-2 text-base font-medium capitalize text-zinc-800">
                    Cairo
                  </div>{" "}
                  <div className="mt-2 text-base font-medium capitalize text-zinc-800">
                    Nasser City
                  </div>{" "}
                  <div className="mt-2 text-base font-medium capitalize text-zinc-800">
                    Mohamed Farid
                  </div>{" "}
                  <div className="mt-2 text-base font-medium capitalize text-zinc-800">
                    15 Building
                  </div>{" "}
                  <div className="flex gap-1 justify-between mt-5 text-lg font-medium text-green-600 capitalize">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/514c012f5eccd0a63a776d981247f9e2ac8d68289d9f112c130f8146479e0232?"
                      className="self-start w-5 aspect-square"
                    />{" "}
                    <div className="flex-auto">Default address</div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center shadow-lg max-md:mt-10">
                <div className="flex flex-col px-6 pt-4 pb-12 w-full bg-white rounded-2xl shadow-lg max-md:pl-5">
                  <div className="flex gap-5 justify-between">
                    <img
                      loading="lazy"
                      src="/Profile/Frame (2).png"
                      className="max-w-full aspect-[1.02] w-[108px]"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/897bd5e1388c81a5735c72940ea423f6d1f12785d52d5498f71d05896be7b1b3?"
                      className="self-start aspect-[2.33] w-[92px]"
                    />
                  </div>{" "}
                  <div className="mt-4 text-2xl font-medium leading-5 capitalize text-zinc-800">
                    Ahmed Esaam{" "}
                  </div>{" "}
                  <div className="mt-2.5 text-base font-semibold capitalize text-zinc-800">
                    +20 1113 400 324{" "}
                  </div>{" "}
                  <div className="mt-2 text-base font-medium capitalize text-zinc-800">
                    Cairo
                  </div>{" "}
                  <div className="mt-2 text-base font-medium capitalize text-zinc-800">
                    Nasser City
                  </div>{" "}
                  <div className="mt-2 text-base font-medium capitalize text-zinc-800">
                    Mohamed Farid
                  </div>{" "}
                  <div className="mt-2 mb-3 text-base font-medium capitalize text-zinc-800">
                    15 Building
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
