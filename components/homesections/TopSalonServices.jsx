import { Box ,Input } from '@chakra-ui/react'
import { CircularProgress,InputLeftElement, CircularProgressLabel,InputGroup,Select,Button , Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Image from 'next/image';
export default function TopSalonServices() {
  return (
<>



<div className="flex flex-col my-10">
  <div className="w-full text-3xl font-semibold leading-5 my-10 text-center capitalize text-stone-950 max-md:max-w-full">
    Top Salon Services{" "}
  </div>
  <div className="flex gap-5 justify-between px-5 py-4 mt-14 max-w-full text-base font-semibold capitalize whitespace-nowrap bg-white rounded-xl shadow-sm text-slate-600 w-[391px] max-md:pl-5 max-md:mt-10">
    <div className="flex gap-4 justify-between">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/25708952bf592f8251aa30cb00d822fb545193d768c0f9b52dc796afd7d7a6e3?"
        className="aspect-[0.97] w-[31px]"
      />
      <div className="grow my-auto">Salon Services</div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69ee02acad4dc2b68d66527fd9bf62e50501e590b18bb5a852b1a57b1479b0d?"
      className="my-auto w-5 aspect-square"
    />
  </div>
  <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
        <div className="grow px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10">
                <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
                  <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
                    <img
                      loading="lazy"
                      src="/salon/Rectangle 3837 (4).png"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/498f83439342ebaa7b02ef6a7c3ef30dbe47f6e63589a13775b207dd216385a5?"
                        className="w-3.5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c868e0462cddfe7133eb3d1d26d98b118a690f1ab6d83efd801bc2ab4602caa2?"
                        className="w-3.5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1568bedd9fb2e46104c7f83f9855f3006dec3c3403b52881bf7e3e45131c06fa?"
                        className="aspect-[1.08] w-[15px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7702f54259161b69ae10d446b0bdbae0aefcb6e4539ca48e0d298cdfa1245e56?"
                        className="aspect-[1.08] w-[15px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1733f3e8865d85ca5335973c1d6db6b757ac096c40e16ed453b571fb01fe9ff?"
                        className="w-1 aspect-[0.29]"
                      />
                    </div>
                    <div className="flex gap-5 justify-between pt-2 mt-7 text-center capitalize">
                      <div className="flex flex-col">
                        <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                          Mani-Pedi Combo
                        </div>
                        <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                          Cleaning{" "}
                        </div>
                      </div>
                      <div className="self-end mt-12 text-xl leading-7 text-fuchsia-900 max-md:mt-10">
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
                      src="/salon/Rectangle 3837 (5).png"
                   
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
                      Most popular
                    </div>
                  </div>
                  <div className="flex flex-col px-3 mt-3">
                    <div className="flex gap-1.5 self-start pr-20 text-xl leading-8 whitespace-nowrap text-zinc-700 max-md:pr-5">
                      <div className="grow">4.7</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/02c9367856b372e19fbf3f3303e9ef9404740de6435858e34d15de434e870251?"
                        className="w-3.5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad874ccfe2cfac968cdcd48ccb6992221f422e75ed230f3733a9f350c60bf35?"
                        className="w-3.5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df140f293ff6cf056a1037dae828212d22403e1620b4b7e8fba6182696502598?"
                        className="aspect-[1.08] w-[15px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e97c4e7a4cb854eec775a08bebfae7229a9d13d42fbbca75f8e2b8e16d1f2814?"
                        className="aspect-[1.08] w-[15px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/33ad25edacde77b3cf7fb95ca0499d121d6fb119ffd2d3df8bde991063e7b58c?"
                        className="w-1 aspect-[0.29]"
                      />
                    </div>
                    <div className="mt-8 text-xl leading-7 text-center capitalize text-stone-950">
                      Father & Son Mani-Pedi Combo
                    </div>
                    <div className="flex gap-5 justify-between mt-2.5 text-center capitalize">
                      <div className="justify-center px-2.5 py-1.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                        Cleaning{" "}
                      </div>
                      <div className="self-start mt-3 text-xl leading-7 text-fuchsia-900">
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
                      src="/salon/Rectangle 3837 (6).png"
                      
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/70886cdeb4718ae499d832242711ff6a25c8f5d4b4a246cc01d514ba19b2b14d?"
                        className="w-3.5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/177c3f50c516d4f01e741fdf10eeee2ef469875aecf9c6adbf907b0d8f03e40b?"
                        className="w-3.5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3992550145a70b30027a77b5ec094f2fe1147b187b3f98795dc52bffd93806?"
                        className="aspect-[1.08] w-[15px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/46ced017cba0d049ae4f275dcd467014803f50b15981050bf615e396aac3a9df?"
                        className="aspect-[1.08] w-[15px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/45d7a649cc33a4c5ee6bef52227873c8f8d21e6d3a29b7905e88c49269b21ebe?"
                        className="w-1 aspect-[0.29]"
                      />
                    </div>
                    <div className="flex gap-0 justify-between pt-2 mt-7 text-center capitalize">
                      <div className="flex flex-col flex-1">
                        <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                          Father & Son Haircut Combo{" "}
                        </div>
                        <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                          Cleaning{" "}
                        </div>
                      </div>
                      <div className="grow self-start mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
                        20-50 LE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow justify-center max-md:mt-10">
          <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
            <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
              <img
                loading="lazy"
                src="/salon/Rectangle 3837 (7).png"
                
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/847a9c25f06a1ef0b82e24709f45ff3540203acaf729c02f0b068c55208c1387?"
                  className="w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f6f5f1f1871d6040562f97ddec3dfe7f8b84c12a483920bb77a3b51c53f2249?"
                  className="w-3.5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f4a19c8230a11f72edd0f777f488bbc4d69a27f11ab8dbc8e076a77389d5c98?"
                  className="aspect-[1.08] w-[15px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ccb33ff15590d8ded2250a4ed8e4fbb377ce74a3e24714e68f2980516a613d?"
                  className="aspect-[1.08] w-[15px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/edee769ef103c7287ba36d3ce7bb2d5f91f0034bfca17602d6139280ff9bd449?"
                  className="w-1 aspect-[0.29]"
                />
              </div>
              <div className="flex gap-5 justify-between pt-2 mt-7 text-center capitalize">
                <div className="flex flex-col">
                  <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
                    Refresh Combo
                  </div>
                  <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
                    Cleaning{" "}
                  </div>
                </div>
                <div className="self-end mt-12 text-xl leading-7 text-fuchsia-900 max-md:mt-10">
                  20-50 LE
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
