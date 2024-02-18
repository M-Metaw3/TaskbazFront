



import  Personalinformation from "@/components/myprofile/personalinfo/Personalinformation";









import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Home() {
  return (
<>

<div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-7 max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl leading-5 text-center capitalize text-stone-950 max-md:max-w-full">
                latest Orders
              </div>{" "}
              <div className="shrink-0 mt-7 bg-zinc-100 h-[3px] rounded-[50px] max-md:max-w-full" />{" "}
              <div className="mt-4 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="z-10 w-full aspect-[1.82]"
                      />{" "}
                      <div className="flex flex-col px-2.5 pt-12 pb-4 mt-0 w-full bg-white rounded-2xl shadow-lg">
                        <div className="flex gap-5 justify-between mt-14 text-xs leading-5 max-md:mt-10">
                          <div className="font-bold text-lime-600 capitalize">
                            Job Completed{" "}
                          </div>{" "}
                          <div className="flex-auto text-neutral-700">
                            Sun, Jan 16 at 12:30 PM
                          </div>
                        </div>{" "}
                        <div className="mt-3.5 font-bold capitalize text-ellipsis text-stone-950">
                          1 cleaner with our supplier{" "}
                        </div>{" "}
                        <div className="flex gap-5 justify-between px-px mt-3 w-full text-sm capitalize">
                          <div className="flex flex-col">
                            <div className="flex gap-1.5 justify-between py-px leading-5 text-center whitespace-nowrap text-neutral-700">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e920bf6f3548ce479bc58aa8c5811beca757ecdea63a753864ed85ef1fb923d7?"
                                className="self-start aspect-square w-[18px]"
                              />{" "}
                              <div className="grow">
                                <span className="text-neutral-700">
                                  Amount pied
                                </span>{" "}
                                <span className="text-neutral-700">AED79</span>{" "}
                              </div>
                            </div>{" "}
                            <div className="flex gap-2 justify-between py-px mt-3 leading-[129%]">
                              <div className="grow whitespace-nowrap text-slate-600">
                                Cost :
                              </div>{" "}
                              <div className="flex-auto font-bold text-fuchsia-800">
                                320 EGP
                              </div>
                            </div>
                          </div>{" "}
                          <div className="flex gap-1.5 self-end mt-6 leading-7 text-center whitespace-nowrap text-stone-950">
                            <div>By</div>{" "}
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35b44ff05d116aa9f60cff35a87b9d0bf2624eb5f9ece4ef737cf4cdc764668b?"
                              className="self-start aspect-square w-[26px]"
                            />
                          </div>
                        </div>{" "}
                        <div className="flex justify-center items-center px-16 py-4 mt-3 w-full text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
                          <div className="flex gap-4">
                            <div>Reorder</div>{" "}
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/131d8bb3d0c0db9689b0c8b98a74fee078968adba75f67eaed2cde763187e97d?"
                              className="aspect-square w-[25px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="z-10 w-full aspect-[1.82]"
                      />{" "}
                      <div className="flex flex-col px-2.5 pt-12 pb-4 mt-0 w-full bg-white rounded-2xl shadow-lg">
                        <div className="flex gap-5 justify-between mt-14 text-xs leading-5 max-md:mt-10">
                          <div className="font-bold text-lime-600 capitalize">
                            Job Completed{" "}
                          </div>{" "}
                          <div className="flex-auto text-neutral-700">
                            Sun, Jan 16 at 12:30 PM
                          </div>
                        </div>{" "}
                        <div className="mt-3.5 font-bold capitalize text-ellipsis text-stone-950">
                          1 cleaner with our supplier{" "}
                        </div>{" "}
                        <div className="flex gap-5 justify-between px-px mt-3 w-full text-sm capitalize">
                          <div className="flex flex-col">
                            <div className="flex gap-1.5 justify-between py-px leading-5 text-center whitespace-nowrap text-neutral-700">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e920bf6f3548ce479bc58aa8c5811beca757ecdea63a753864ed85ef1fb923d7?"
                                className="self-start aspect-square w-[18px]"
                              />{" "}
                              <div className="grow">
                                <span className="text-neutral-700">
                                  Amount pied
                                </span>{" "}
                                <span className="text-neutral-700">AED79</span>{" "}
                              </div>
                            </div>{" "}
                            <div className="flex gap-2 justify-between py-px mt-3 leading-[129%]">
                              <div className="grow whitespace-nowrap text-slate-600">
                                Cost :
                              </div>{" "}
                              <div className="flex-auto font-bold text-fuchsia-800">
                                320 EGP
                              </div>
                            </div>
                          </div>{" "}
                          <div className="flex gap-1.5 self-end mt-6 leading-7 text-center whitespace-nowrap text-stone-950">
                            <div>By</div>{" "}
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e488eb33a813a9ddaa1025cc632e92cc9a44cbe8bb9c752a3535527bf9dd74c?"
                              className="self-start aspect-square w-[26px]"
                            />
                          </div>
                        </div>{" "}
                        <div className="flex justify-center items-center px-16 py-4 mt-3 w-full text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
                          <div className="flex gap-4">
                            <div>Reorder</div>{" "}
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/131d8bb3d0c0db9689b0c8b98a74fee078968adba75f67eaed2cde763187e97d?"
                              className="aspect-square w-[25px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="z-10 w-full aspect-[1.82]"
                      />{" "}
                      <div className="flex flex-col px-2.5 pt-12 pb-4 mt-0 w-full bg-white rounded-2xl shadow-lg">
                        <div className="flex gap-5 justify-between mt-14 text-xs leading-5 max-md:mt-10">
                          <div className="font-bold text-lime-600 capitalize">
                            Job Completed{" "}
                          </div>{" "}
                          <div className="flex-auto text-neutral-700">
                            Sun, Jan 16 at 12:30 PM
                          </div>
                        </div>{" "}
                        <div className="mt-3.5 font-bold capitalize text-ellipsis text-stone-950">
                          1 cleaner with our supplier{" "}
                        </div>{" "}
                        <div className="flex gap-5 justify-between px-px mt-3 w-full text-sm capitalize">
                          <div className="flex flex-col">
                            <div className="flex gap-1.5 justify-between py-px leading-5 text-center whitespace-nowrap text-neutral-700">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e920bf6f3548ce479bc58aa8c5811beca757ecdea63a753864ed85ef1fb923d7?"
                                className="self-start aspect-square w-[18px]"
                              />{" "}
                              <div className="grow">
                                <span className="text-neutral-700">
                                  Amount pied
                                </span>{" "}
                                <span className="text-neutral-700">AED79</span>{" "}
                              </div>
                            </div>{" "}
                            <div className="flex gap-2 justify-between py-px mt-3 leading-[129%]">
                              <div className="grow whitespace-nowrap text-slate-600">
                                Cost :
                              </div>{" "}
                              <div className="flex-auto font-bold text-fuchsia-800">
                                320 EGP
                              </div>
                            </div>
                          </div>{" "}
                          <div className="flex gap-1.5 self-end mt-6 leading-7 text-center whitespace-nowrap text-stone-950">
                            <div>By</div>{" "}
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0784f0dcd6d513325683b40fe1ad92e0c10198140326abb8a11102dbdd743e?"
                              className="self-start aspect-square w-[26px]"
                            />
                          </div>
                        </div>{" "}
                        <div className="flex justify-center items-center px-16 py-4 mt-3 w-full text-white whitespace-nowrap bg-fuchsia-800 rounded-xl max-md:px-5">
                          <div className="flex gap-4">
                            <div>Reorder</div>{" "}
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/131d8bb3d0c0db9689b0c8b98a74fee078968adba75f67eaed2cde763187e97d?"
                              className="aspect-square w-[25px]"
                            />
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
