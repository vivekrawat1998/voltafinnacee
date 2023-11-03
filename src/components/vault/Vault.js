import React from "react";
import { useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import VaultCards from "./VaultCards";

const Vault = () => {
  const [isIconHidden, setIsIconHidden] = useState(true);
  const handleButtonClick = () => {
    setIsIconHidden(!isIconHidden);

    if (isIconHidden === false) {
      gsap.to("#dopdown", 2, {
        opacity: 4,
        x: 4,
        stagger: true,
      });
    } else {
      gsap.from("#dopdown", 4, {
        opacity: 0,
        x: 0,
      });
    }
  };

  return (
    <div className=" imagecontainer  bg-[url(https://volta.finance/lines.svg)]  bg-repeat-y bg-[#121216] text-white bg-center relative">
      <div className="imageconatiner-2 bg-[url(https://volta.finance/gradient-noise.webp)] h-auto min-h-[100%] bg-cover pb-10 ">
        <div className="bg-cover pb-10">
          <header className="">
            <nav className="bg-black px-4 border-gray-200 lg:px-6 py-2.5 dark:bg-volta-gray-900 border-b border-b-gray-100">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                  <img
                    className="mr-3 h-6 sm:h-9"
                    src="https://volta.finance/volta.svg"
                    alt="logo"
                  ></img>
                  <span className="self-center text-xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#00F29E] to-[#00BFDC]">
                    {" "}
                    Volta Finance
                  </span>
                </Link>

                <div
                  onClick={handleButtonClick}
                  className="flex items-center lg:order-2"
                >
                  <div className="">
                    <button className="bg-[#3FA0E4] p-2 tracking-tight rounded-md text-white font-extrabold">
                      {" "}
                      Connect
                    </button>
                  </div>
                  <button
                    data-collapse-target="mobile-menu-2"
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-volta-gray-500 rounded-lg lg:hidden hover:bg-volta-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-volta-gray-400 dark:hover:bg-volta-gray-700 dark:focus:ring-volta-gray-600"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      className="hidden w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div
                  className={`flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
                    isIconHidden ? "hidden" : "block"
                  }`}
                  id="mobile-menu-2"
                >
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                      <button className="block py-2 pr-4 pl-3 rounded border-b border-gray-800 text-[#777779] hover:text-white lg:border-b-0">
                        Wrapper
                      </button>
                    </li>
                    <li>
                      <Link
                        to="valutsSec"
                        className="block py-2 pr-4 pl-3 rounded border-b border-gray-800 text-[#777779] hover:text-white lg:border-b-0"
                      >
                        Vaults
                      </Link>
                    </li>
                    <li>
                      <button className="block py-2 pr-4 pl-3 rounded border-b border-gray-800 text-[#777779] hover:text-white lg:border-b-0">
                        Swap
                      </button>
                    </li>
                    <li>
                      <button className="block py-2 pr-4 pl-3 rounded border-b border-gray-800 text-[#777779] hover:text-white lg:border-b-0">
                        Stake
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
           
            <div className="mx-w-7xl mx-auto">
              <section className="grid h-full place-items-center">
                <div class="flex justify-center m-5">
                  <h1 class="block my-3 uppercase font-normal text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <span class="font-medium">VAULTS</span> Overview
                  </h1>
                </div>
                <div className="mx-auto flex justify-center items-center w-full md:inset-0 h-modal md:h:full">
                  <div className="mx-auto w-full max-w-[1100px] h-auto">
                    <div class="relative  bg-[#151013] rounded-lg shadow dark:backdrop-blur-md dark:bg-gray-800 border border-gray-900 sm:p-5 p-t-10">
                      <div class="my-8 mx-7">
                        <div className="flex justify-between items-center">
              <div className="flex items-center mt-2 mb-5">
                <h1 className="flex flex-col gap-0 font-normal text-white bg-[#151013] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <span className="font-medium text-base uppercase text-left">
                    Create New Vault
                  </span>
                  <div className="flex flex-col mt-2 font-light text-base dark:text-gray-400"></div>
                </h1>
              </div>
            </div>
                          <div className="flex flex-wrap gap-5 ">
                            <VaultCards />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </section>
                </div>
            </div>
          </div>
  );
};

export default Vault;
