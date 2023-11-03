import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import QrCode from "./QrCode";
import Manual from "./Manual";

const Modal = ({ onclose }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const data = [
    {
      image: <Manual />,
    },
    {
      image: <QrCode />,
    },
  ];

  const handleCardToggle = (index) => {
    setSelectedCardIndex(index);
  };

  const { image } = data[selectedCardIndex];

  return (
    <div
      className="absolute flex gap-2 text-red-500 z-10 left-1/2 top-1/2  bg-[#1E1A1E] w-[800px]
    h-[80vh] -translate-x-1/2 -translate-y-1/2"
    >
      <AiOutlineClose
        onClick={onclose}
        className="absolute left-[750px] top-2 text-[2px]  text-gray-300  bg-[#353136] rounded-[50%] w-7 h-7"
      />

      <div className="h-[80vh] w-[300px] border-e border-gray-800">
        <h1 className="font-bold text-white text-2xl p-5">Connect a Wallet</h1>
        <span className="p-5 font-bold text-gray-300 text-lg">popular</span>
        <div className="pt-2">
          <ul className="text-white font-bold px-5 place-items-center">
            <li
              onClick={() =>
                handleCardToggle(selectedCardIndex === 0 ? 1 : 0)
              }
              className="hover:bg-[#2E3036] h-10 rounded-md place-items-center"
            >
              Rainbow
            </li>
            <li className="h-10 hover:bg-[#2E3036] rounded-md ">
              coinbase wallet
            </li>
            <li className="hover:bg-[#2E3036] h-10 place-items-center rounded-md">
              MetaMask
            </li>
            <li className="hover:bg-[#2E3036] h-10 rounded-md">
              WalletConnect
            </li>
          </ul>
        </div>
      </div>
      <div
        key={selectedCardIndex}
        className="h-full w-[70%] flex flex-col gap-20 items-center text-white"
      >
        {data.map((item, index) => {
          return index === selectedCardIndex && <div key={index}>{image}</div>;
        })}
      </div>
    </div>
  );
};

export default Modal;
