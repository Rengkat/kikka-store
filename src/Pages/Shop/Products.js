import { useContext } from "react";
import { Link } from "react-router-dom";
import { SingleProductContext } from "../../Contexts/SingleContext";
import {
  FiveStars,
  FourStars,
  FourStarsHalf,
  ThreeStars,
  ThreeStarsHalf,
  TwoStarsHalf,
} from "./ShopStar";

const rating = (price) => {
  if (price < 30000) return <TwoStarsHalf />;
  if (price > 30000 && price < 50000) return <ThreeStars />;
  if (price > 50000 && price < 70000) return <ThreeStarsHalf />;
  if (price > 70000 && price < 800000) return <FourStars />;
  if (price > 80000 && price < 900000) return <FourStarsHalf />;
  if (price > 90000) return <FiveStars />;
};

function Products({ product }) {
  const { name, image, price, _id } = product;

  return (
    <div>
      <div className="text-center">
        <Link to={`/singleProduct/${_id}`}>
          <img
            src={image}
            alt={`${name} Image`}
            className=" w-full h-[10rem] md:h-[18rem]  object-cover"
          />
          <div className="py-5">
            <h1 className=" capitalize font-light text-xl md:text-2xl">{name}</h1>
            {rating(price)}
            <h1 className="font-semibold text-xl">${price.toLocaleString()}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Products;
