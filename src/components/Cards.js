import React, { useState } from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import Button from "./Button";
import ButtonTwo from "./ButtonTwo"

const Cards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); 
  const [isHovered, setIsHovered] = useState(false);
  const data = [
    {
      title: "GSM ",
      image: "./GLP-1764b964.png",
      titleT: "GLP",
      span: "swap glp to receive voltglp",
      spanT:" VoltGLP",
      component: "Volta",
      titlei :<Button/>
    },
    {
      title: "GLP ",
      image: "./voltGLP-04d2c7f7.png",
      titleT: "Volta",
      span: "swap voltglp to receive glp",
      spanT: "Glp",
      component: "GLP",
      titlei : <ButtonTwo/>
    },
    
    
  ];

  const handleCardToggle = (index) => {
    setSelectedCardIndex(index);
  };

  const { title, image, titleT, span,  component } =
    data[selectedCardIndex]; // Destructure data for the selected card

  return (
    <>
      <section key={selectedCardIndex} class="grid h-full place-items-center">
        <div class="flex justify-center m-5">
          <h1 class="block my-3 uppercase font-bold text-white bg-[#101012] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-regular px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <span class="font-bold">{title}</span>Wrapping
          </h1>
        </div>
        <div class="mx-auto justify-center items-center w-full md:inset-0 h-modal md:h-full">
          <div class="mx-auto first-letter:pl-4 w-full max-w-3xl h-full md:h-auto">
            <div class="relative p-4 bg-[#101012] rounded-lg shadow backdrop-blur-md dark:bg-volta-gray-800 border-2 border-gray-900 sm:p-5 p-t-10">
              <div class="flex justify-between items-center p-5 rounded-t border-b sm:mb-5 border-gray-900">
              {data.map((item, index) => (
                  index === selectedCardIndex && (
                    <div key={index}>
                      {item.titlei}
                    </div>
                  )
                ))}
                <div class="flex flex-col">
                  <h1 class="text-white text-sm font-light">
                    <span class="opacity-50">GLP Cap</span> 684.29{" "}
                    <span class="opacity-50">of</span> 50k GLP
                  </h1>
                  <div class="flex justify-end mt-2 items-right text-sm font-normal text-white">
                    1{" "}
                    <span class="mr-2 ml-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-[#00BFDC] from-[#00F29E]">
                      voltGLP
                    </span>{" "}
                    ≈ 1.000 GLP
                  </div>
                </div>
              </div>
              <div class="">
                <div class="flex justify-between items-center">
                  <div class="flex items-center mb-4">
                    <h1 class="text-white px-4">{span}</h1>
                  </div>
                  <div class="flex flex-col mb-2 px-4"></div>
                </div>
                <div class="flex justify-between px-5 items-center w-full h-[106px] bg-[#111114] rounded-lg border border-gray-900 cursor-pointer hover:bg-[#1A1B1F] ">
                  <div>
                    <div class="bg-[#101112] border border-gray-900 text-volta-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-volta-gray-700 dark:border-volta-gray-600 dark:placeholder-volta-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <div class="flex py-1 px-2">
                        <img
                          src={image}
                          class="mr-3 -ml-1 w-7 h-7"
                          alt=""
                        />
                        <div class="text-lg font-normal">{titleT}</div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <input
                      class="ml-2 p-0 pb-1 text-right overflow-hidden border-transparent float-right text-3xl font-semibold bg-transparent text-white"
                      type="number"
                      placeholder="0.0"
                      value="0"
                    />
                    <div class="flex justify-end">
                      <button class="ml-2 text-sm text-volta-warm max-w-fit">
                        Balance: 0.00
                      </button>
                    </div>
                  </div>
                </div>
                <div 
                  onClick={() =>
                    handleCardToggle(selectedCardIndex === 0 ? 1 : 0)
                  }
                  class="items-center w-full flex justify-center "
                >
  <div className="swap">
      <BiDownArrowAlt
        className={`text-5xl py-1 font-extrabold px-1 bg-[#1A1B1F] cursor-pointer rounded-[50%] border-2 border-gray-800 ${
          isHovered ? 'rotate-[-180deg] transition duration-[.5s]' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>

                </div>
                <div class="flex mt-0 justify-between px-5 items-center w-full h-[106px] bg-[#111114] rounded-lg border border-gray-900 cursor-pointer hover:bg-[#1A1B1F] dark:bg-volta-gray-700 hover:bg-volta-gray-100 dark:border-volta-gray-600 dark:hover:border-volta-gray-500 dark:hover:bg-volta-gray-600">
                  <div>
                    <div class="bg-[#101112] border border-gray-900 text-volta-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-volta-gray-700 dark:border-volta-gray-600 dark:placeholder-volta-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <div class="flex py-1 px-2">
                        <img
                          src={image}
                          class="mr-3 -ml-1 w-7 h-7"
                          alt=""
                        />
                        <div class="text-lg font-normal">{component}</div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <input
                      class="ml-2 p-0 pb-1 text-right overflow-hidden border-transparent float-right text-3xl font-semibold bg-transparent text-white"
                      type="number"
                      placeholder="0.0"
                      disabled=""
                      value=""
                    />
                    <h3 class="ml-2 text-sm text-right font-light text-white opacity-50">
                      Balance: 0.00
                    </h3>
                  </div>
                </div>
                <div class="flex justify-between pb-3 px-2">
                  <span class="block mt-6  px-2 text-xl font-medium text-volta-gray-900 dark:text-white">
                    Deposit Fees
                  </span>
                  <span class="block mt-3 mb-5 px-2 text-sm font-medium text-volta-gray-900 dark:text-white">
                    ≈ 0%
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <button
                    type="button"
                    class="text-volta-gray-100 w-full bg-[#1A1B1F] h-[50px] dark:bg-volta-gray-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    disabled=""
                  >
                    Swap
                  </button>
                </div>
                <div class="flex justify-center mt-3 items-center text-sm font-normal text-white">
                  <span class="mr-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-[#00BFDC] from-[#00F29E]">
                    22.21%
                  </span>{" "}
                  EST. APR
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
