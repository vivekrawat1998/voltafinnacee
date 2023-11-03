import React from "react";

const VaultCards = () => {
  const datas = [
    {
      span: "gDAI",
      image: "./download.png",
    },
    {
      span: "voltGLP",
      image: "./voltGLP-04d2c7f7 (2).png",
    },
    {
      span: "voltGNS",
      image: "./voltGNS-ecbe9ad6.svg",
    },
    {
      span: "voltGMX",
      image: "./voltGMX-3a71824f.png",
    },
   
  ];

  return (
    <>
      {datas.map((data, index) => (
        <div key={index} class="w-[320px] px-8 py-7 bg-[#121216] border border-gray-900  rounded-lg shadow dark:bg-volta-gray-700 hover:bg-volta-gray-100 dark:border-volta-gray-600">
          <div class="flex mb-2 text-2xl font-medium text-volta-gray-900 dark:text-white">
            <img
              src={data.image}
              class="mr-3 -ml-1 w-10 h-10"
              alt=""
            />
            <span>{data.span}</span>
          </div>
          <div class="flex flex-col mt-4 font-light text-base text-gray-400">
            <div class="flex justify-between my-1">
              <div>Minimum Collateral %</div>
              <div>110%</div>
            </div>
            <div class="flex justify-between my-1">
              <div>Repayment Fee</div>
              <div>0.5%</div>
            </div>
            <div class="flex justify-between my-1">
              <div>Deposit Fee</div>
              <div>0%</div>
            </div>
            <div class="flex justify-between my-1">
              <div>Minimum Debt</div>
              <div>0 VOLT</div>
            </div>
            <div class="flex justify-between my-1">
              <div>Available VOLT</div>
              <div>114958.08 VOLT</div>
            </div>
          </div>
          <div class="flex flex-col mt-8 pt-2">
            <div class="mx-auto w-full">
              <button
                type="button"
                class="font-semibold text-base text-gray-900 w-full bg-gradient-to-r from-[#00F29E] to-[#00BFDC] hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-volta-warm dark:focus:ring-volta-cool rounded-lg px-6 py-3 text-center mr-0 mb-2"
              >
                Create Vault
              </button>
            </div>
          </div>
        </div>
      ))}
      </>
  );
};

export default VaultCards;
