



import  Personalinformation from "@/components/myprofile/personalinfo/Personalinformation";









import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Home() {
  return (
<>

<div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-7 max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl leading-5 text-center capitalize text-stone-950 max-md:max-w-full">
                Orders{" "}
              </div>{" "}
              <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-2 pt-6 pb-10 w-full bg-white rounded-2xl shadow-lg max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 justify-between px-4 py-4 bg-gray-800 rounded-xl max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col font-semibold text-white capitalize">
                          <div className="flex gap-1 justify-between whitespace-nowrap">
                            <div className="grow text-sm leading-5">
                              Order NO :
                            </div>{" "}
                            <div className="grow text-base leading-5">
                              #384754576
                            </div>
                          </div>{" "}
                          <div className="flex gap-1.5 justify-between mt-3.5">
                            <div className="flex-auto text-sm leading-5">
                              Order Amount :
                            </div>{" "}
                            <div className="grow text-base leading-5 whitespace-nowrap">
                              320 EGP
                            </div>
                          </div>
                        </div>{" "}
                        <div className="flex-auto self-start text-base text-stone-300">
                          Sun, Jan 16 at 12:30 PM
                        </div>
                      </div>{" "}
                      <div className="flex gap-3 justify-between pr-3 mt-6 text-xl capitalize bg-white rounded-xl max-md:flex-wrap max-md:max-w-full">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="max-w-full aspect-[1.14] w-[107px]"
                        />{" "}
                        <div className="flex flex-col flex-1 pr-16 my-auto">
                          <div className="whitespace-nowrap leading-[110%] text-slate-600">
                            Part-time Home Cleaners
                          </div>{" "}
                          <div className="flex gap-3 justify-between py-px mt-1.5 whitespace-nowrap leading-[90%] text-slate-600">
                            <div>Services:</div>{" "}
                            <div className="grow">Service 1, Service 2,...</div>
                          </div>{" "}
                          <div className="mt-1.5 font-semibold leading-5 text-yellow-700">
                            <span className="">Status: </span>
                            <span className="font-bold text-yellow-700">
                              In prgress
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="flex gap-5 justify-between pr-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-1 justify-between text-sm leading-5 text-fuchsia-800 capitalize">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/452b1e1be8f808f9480cd2c29f7a939afc7fe8cce7d77f5e2e99336e2b2b86f7?"
                            className="aspect-[0.87] w-[13px]"
                          />{" "}
                          <div className="flex-auto">
                            Company name :{" "}
                            <span className="font-bold">Maged ahmed </span>
                          </div>
                        </div>{" "}
                        <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab8621185cbdc9bdfe53bc639e76beb52eb7260ff42dcb3c84ff91382016160b?"
                            className="w-3.5 aspect-square"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a291f8605826ab60647a063656742df105c8044a30871aa2b717137166510216?"
                            className="w-3.5 aspect-square"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9945624dbbb3689ed0965956b47cfec8553e14066414636c7fa3ca097509a124?"
                            className="aspect-[1.08] w-[15px]"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f41d4d9b10e87f683ac9c9e9b8b84fba0ee789cab44ecbc19f2c0b12541b23ab?"
                            className="aspect-[1.08] w-[15px]"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97d2ef3fc26a9b80f3ceac0fb1c06bef1a624c5ec8a4d3fcfa3804ce01a33672?"
                            className="aspect-[1.08] w-[15px]"
                          />{" "}
                          <div className="grow">4.7</div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-2 pt-6 pb-10 w-full bg-white rounded-2xl shadow-lg max-md:mt-10 max-md:max-w-full">
                      <div className="flex flex-col p-4 bg-gray-800 rounded-xl max-md:max-w-full">
                        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                          <div className="flex gap-1 self-start font-semibold text-white capitalize whitespace-nowrap">
                            <div className="grow text-sm leading-5">
                              Order NO :
                            </div>{" "}
                            <div className="grow text-base leading-5">
                              #384754576
                            </div>
                          </div>{" "}
                          <div className="flex-auto text-base text-stone-300">
                            Sun, Jan 16 at 12:30 PM
                          </div>
                        </div>{" "}
                        <div className="flex gap-1.5 self-start mt-3.5 font-semibold text-white capitalize">
                          <div className="flex-auto text-sm leading-5">
                            Order Amount :
                          </div>{" "}
                          <div className="grow text-base leading-5 whitespace-nowrap">
                            320 EGP
                          </div>
                        </div>
                      </div>{" "}
                      <div className="flex gap-3 justify-between pr-3 mt-6 text-xl capitalize bg-white rounded-xl max-md:flex-wrap max-md:max-w-full">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="max-w-full aspect-[1.14] w-[107px]"
                        />{" "}
                        <div className="flex flex-col flex-1 pr-16 my-auto">
                          <div className="whitespace-nowrap leading-[110%] text-slate-600">
                            Part-time Home Cleaners
                          </div>{" "}
                          <div className="flex gap-3 justify-between py-px mt-1.5 whitespace-nowrap leading-[90%] text-slate-600">
                            <div>Services:</div>{" "}
                            <div className="grow">Service 1, Service 2,...</div>
                          </div>{" "}
                          <div className="mt-1.5 font-semibold leading-5 text-yellow-700">
                            <span className="">Status: </span>
                            <span className="font-bold text-yellow-700">
                              In prgress
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="flex gap-5 justify-between pr-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-1 justify-between text-sm leading-5 text-fuchsia-800 capitalize">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e08b4b0bba6d342f32f4ba909372546d95e9cc9e61c54b3e5e214b3471274b0?"
                            className="aspect-[0.93] w-[13px]"
                          />{" "}
                          <div className="flex-auto">
                            Company name :{" "}
                            <span className="font-bold">Maged ahmed </span>
                          </div>
                        </div>{" "}
                        <div className="flex gap-1.5 text-xl leading-8 whitespace-nowrap text-zinc-700">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb508e98b668b00c555fd7b90eb1c7fe5c83acc63f1b96fcf3239ed136fe322a?"
                            className="w-3.5 aspect-square"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e44eb7589fc41fd75e73cafdb428598940375cdb1ef6bb1276d6ff1ec1d436?"
                            className="w-3.5 aspect-square"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1244f5b18aa9e226725bc0dc50f275393188fe66cb905bcc7da50fa3932f517d?"
                            className="aspect-[1.08] w-[15px]"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c308cc00ef3d6552b71f286a2d4584d2b5f053524980414660a93cdee430a34?"
                            className="aspect-[1.08] w-[15px]"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd4f20827d1a6f698fc52999485343941cab83218c6bb859cce5b0a06b2a4e6?"
                            className="aspect-[1.08] w-[15px]"
                          />{" "}
                          <div className="grow">4.7</div>
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
