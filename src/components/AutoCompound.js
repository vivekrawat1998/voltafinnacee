import Cards from "./Cards";
import Nav from "./Nav";
const AutoCompound = () => {


  return (

    <div className=" imagecontainer  bg-[url(https://volta.finance/lines.svg)]  bg-repeat-y bg-[#121216] text-white bg-center relative">
      <div className="imageconatiner-2 bg-[url(https://volta.finance/gradient-noise.webp)] h-auto min-h-[100%] bg-cover pb-10 ">
      <Nav/>
        <div>
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default AutoCompound;
