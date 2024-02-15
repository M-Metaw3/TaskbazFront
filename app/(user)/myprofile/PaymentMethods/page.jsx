



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
            Payment methods
          </div>{" "}
          <Link href={"/myprofile/(usersformpaymenteditingprofile/addnewcard"}>
          <div className="flex gap-2.5 justify-between px-12 py-5 text-base font-semibold text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
            <div className="grow my-auto">add new Card</div>{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59d1018a96176dbe9566ff52a09b7208e71e62a4ecbb52c5b2682ff4ea541693?"
              className="w-6 aspect-square"
            />
          </div>
          </Link>
        </div>{" "}
        <div className="shrink-0 mt-2.5 h-px bg-gray-200 rounded-2xl max-md:max-w-full" />{" "}
        <div className="px-5 mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-6 py-4 mx-auto w-full text-base font-semibold capitalize bg-white rounded-2xl shadow-lg text-neutral-400 max-md:pl-5 max-md:mt-10">
                <div className="flex gap-1 justify-between whitespace-nowrap text-slate-600">
                  <div className="flex flex-col flex-1 justify-center">
                    <div className="flex gap-2 justify-between py-2 rounded-md bg-stone-50">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea1f329bc5e2125be899219d21ac580c0fad3fc1ca7666b4a825996f5ecc1fcb?"
                        className="aspect-[1.59] w-[38px]"
                      />{" "}
                      <div className="flex-auto my-auto">MasterCard</div>
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ba4d05fe3a861972982888bfef264078f634e569f0f332d9f30febb40bcb5e4?"
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
                <div className="mt-2.5">
                  Security Code (CVV/CVC) : Date :
                </div>{" "}
                <div className="mt-2.5 font-medium text-zinc-800">
                  226
                </div>{" "}
                <div className="flex gap-1 justify-between mt-5 text-lg font-medium text-green-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40310c317fa8b2795688f47a80f2eb5ace03d381103839ea8d5aadf678e4f7ed?"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a04047212c92b8064c4f1c790a132b6b457a55a72ddd2344a88f2871bf27e03?"
                        className="aspect-[1.59] w-[38px]"
                      />{" "}
                      <div className="flex-auto my-auto">MasterCard</div>
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ba4d05fe3a861972982888bfef264078f634e569f0f332d9f30febb40bcb5e4?"
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
                <div className="mt-2.5">
                  Security Code (CVV/CVC) : Date :
                </div>{" "}
                <div className="mt-2.5 font-medium text-zinc-800">
                  226
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c2915f638b057435504e40394019e24ad7e3993bd72260cedaaffc5dba175a?"
                        className="aspect-[1.59] w-[38px]"
                      />{" "}
                      <div className="flex-auto my-auto">MasterCard</div>
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ba4d05fe3a861972982888bfef264078f634e569f0f332d9f30febb40bcb5e4?"
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
                <div className="mt-2.5">
                  Security Code (CVV/CVC) : Date :
                </div>{" "}
                <div className="mt-2.5 font-medium text-zinc-800">
                  226
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
