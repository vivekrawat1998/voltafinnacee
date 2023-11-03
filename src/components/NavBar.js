import { SiGitbook } from "react-icons/si";
import { BsTwitter, BsDiscord, BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function NavBar() {


  return (

<div>
<div className=" imagecontainer  bg-[url(https://volta.finance/lines.svg)]  bg-repeat-y bg-[#121216] text-white bg-center relative">
  <div className="imageconatiner-2 bg-[url(https://volta.finance/gradient-noise.webp)] h-auto min-h-[100%] bg-cover pb-10 ">

         <Nav/>
      
         
        <section className="grid h-screen -mt-[110px] place-items-center">
        <div className="py-8 px-4 mx-auto max-w-scree-xl text-center lg:py-16 lg:px-12">
          <img
            className="inline-flex justify-between items-ms-center mb-9"
            src="https://volta.finance/assets/LogoTypo-b410a310.svg"
            alt=""
          ></img>
            
          <h1 className="mb-10 text-4xl font-extrabold   leading-2  md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-[#00BFDC] from-[#00F29E]">
            Deposit and Borrow
            <br />
            Multiply Your Exposure to Crypto
          </h1>
          <p className="mb-8 text-base font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-50 ">
            Borrow VOLT stablecoin at 0% interest by depositing your crypto
            assets.
          </p>
          <div className="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
         
          <Link to="AutoCompound"  class="inline-flex justify-center items-center py-3 px-5 text-base font-semibold text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 bg-gradient-to-r to-[#00BFDC] from-[#00F29E] hover:bg-gradient-to-r focus:outline-none focus:ring-volta-warm dark:focus:ring-volta-cool">
           Auto-Compound GNS 
              <svg 
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg> 
            </Link>
            <button className="inline-flex justify-center items-center py-3 px-5  font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-500 bg-opacity-20">
              Borrow
            </button>
          </div>
          <div class="text-white font-bold text-xl lg:mb-8 inline-flex">
            Total Value Locked: $
            <div class="">
              <span class="">42,639.41</span>
            </div>
          </div>
        </div>
        <footer class="fixed flex bottom-0 h-[90px] w-full flex-row justify-center text-white gap-8">
          <a class="cursor-pointer block w-8 h-8" href="https://volta-finance.gitbook.io/voltafinance/protocol/general-introduction" >
            
            
      <SiGitbook className="h-10 w-10" /></a>
          <a class="cursor-pointer block w-8 h-8" href="https://twitter.com/volta_protocol" >
          <BsTwitter className="h-8 w-8"/>
          </a>
          <a class="cursor-pointer block w-8 h-8" href="https://discord.gg/qYEWSVahFh">
            <BsDiscord className="h-8 w-8"/>
          </a>
          <a class="cursor-pointer block w-8 h-8" href="https://t.me/VoltaFinance">
          <BsTelegram className="h-8 w-8"/>
          </a>
          </footer>
      </section>
</div>
</div>
</div>
)
}
export default NavBar;
