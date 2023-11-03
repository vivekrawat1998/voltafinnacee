import React from "react";

const Button = () => {
  return (
    <div className= " zero flex">
    <img
      src="/GLP-1764b964 (1).png"
      class="mr-2 w-7 h-7"
      alt=""
    />
    <h3 class="text-xl font-semibold text-volta-gray-900 dark:text-white inline">
   GLP
    </h3>
    <div class="ml-2 mt-0.5">
      <svg
        class="w-6 text-white"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        ></path>
      </svg>
    </div>
    <h3 class="ml-2 text-xl font-semibold text-primary-600 text-transparent bg-clip-text bg-gradient-to-r to-[#00BFDC] from-[#00F29E]">
      VoltGLP
    </h3>
  </div>


      
    

  );
};

export default Button;
