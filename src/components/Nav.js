import { useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Modal from "./Modal";



function Nav() {
const [isIconHidden, setIsIconHidden] = useState();
const [showModal, setshowModal] = useState(false);
const onopen = () => setshowModal(true);
const onclose = () => setshowModal(false)

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
 
  <div className="bg-cover pb-10">
    <header className="">
      <nav className="bg-black px-4 border-gray-200 lg:px-6 py-2.5 dark:bg-volta-gray-900 border-b border-b-gray-100">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to = "/" className="flex items-center">
            <img
              className="mr-3 h-6 sm:h-9"
              src="https://volta.finance/volta.svg"
              alt="logo"
            ></img>
            <span className="self-center text-xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-[#00BFDC] from-[#00F29E]">
              {" "}
              Volta Finance
            </span>
          </Link>
         
          <div
            onClick={handleButtonClick}
            className="flex items-center lg:order-2"
          >
             <div className="">
              <button onClick={onopen} className="bg-[#3FA0E4] p-2 tracking-tight rounded-md text-white font-extrabold"> Connect</button>
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
                <Link to="Vault" className="block py-2 pr-4 pl-3 rounded border-b border-gray-800 text-[#777779] hover:text-white lg:border-b-0">
                  Vaults
                </Link>
              </li>
              <li>
                <Link to ="/LoginPage" className="block py-2 pr-4 pl-3 rounded border-b border-gray-800 text-[#777779] hover:text-white lg:border-b-0">
                  Swap
                </Link>
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
    <div>
    </div>
         {showModal && <Modal onclose={onclose}/>}
    </div>
  
  ) }


  export default Nav