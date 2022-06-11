import { Link } from "react-router-dom";

function HeroText({ heading1, heading2, paragraph }) {
  return (
    <div className=" absolute top-[15%] p-8 z-20">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold py-0"> {heading1}</h1>
        <h1 className="text-4xl md:text-6xl font-bold uppercase">{heading2}</h1>
        <p className="w-[90%]  md:w-[60%] text-2xl pt-3 pl-1 ">{paragraph}</p>
        <button className=" bg-yellow-700 transition-all ease-linear duration-700 text-white py-3 px-4 mt-5 rounded-md shadow-md font-semibold hover:bg-black">
          <Link to="/shop"> Shop Now</Link>
        </button>
      </div>
    </div>
  );
}

export default HeroText;
