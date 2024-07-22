import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Images from "./Images";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CartContext } from "../../Contexts/CartContex";
import { WishlistContext } from "../../Contexts/WishlistContext";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isloading, setisLoading] = useState(false);

  // product.quantity = 1;
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const fetchProduct = async () => {
    setisLoading(true);
    const data = await fetch(`http://localhost:5000/api/products/${productId}`);
    const response = await data.json();
    setProduct(response?.product);
    setisLoading(false);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="w-[85%] mx-auto mt-10 mb-20 md:mb-[20rem]">
      {isloading ? (
        <div>Loading...</div>
      ) : (
        <main className="md:flex space-x-7">
          <div className="image ">
            <img
              src={product.image}
              // src={isSelected ? selectedImage : product.images && product?.images[0]?.url}
              alt={` ${product.name} Image`}
              className=" object-cover w-full md:w-[40rem] h-[17rem] md:h-[70vh]"
            />
            {/* <Images product={product} /> */}
          </div>
          <div className="my-8 md:my-0 md:w-[40%] lg:w-[30%]">
            <h1 className=" capitalize text-xl md:text-2xl font-bold p">{product.name}</h1>
            <h1 className="text-yellow-700 font-bold text-xl">
              ${product?.price?.toLocaleString()}
            </h1>

            <div className="star flex space-x-3 items-center">
              <p className="pt-1">({product.rating}) customer rating</p>
            </div>
            <p className="py-3 lg:text-xl">{product.description}</p>
            <div className="sku flex list-none space-x-8 font-bold ">
              <li>SKU:</li>
              <li>{product._id}</li>
            </div>
            <div className="company flex list-none font-bold capitalize py-1 space-x-5">
              <li>Brand:</li>
              <li>{product.brand}</li>
            </div>
            <div
              className={
                product.inStock ? "flex list-none font-bold py-1 capitalize space-x-5" : "hidden"
              }>
              <li>Stock:</li>
              <li>{product.inStock > 0 ? "Available" : "Out of Stock"}</li>
            </div>
            {/* <div className="sku py-1 items-center font-bold capitalize  flex list-none space-x-4">
            <li>colors:</li>
            <ul className="flex space-x-1">
              {product?.colors?.map((color, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`bg-[${color}] h-5 md:h-10 md:w-10 rounded w-5 border-2 border-gray-400`}
                    />
                  </div>
                );
              })}
            </ul>
          </div> */}

            <div className="btn flex list-none space-x-4 mt-5 ">
              <li>
                <button
                  onClick={() => addToCart(product._id)}
                  className="flex space-x-2 text-white bg-yellow-700 py-2 px-3 rounded-md shadow font-semibold">
                  <FaShoppingCart fontSize={20} className="pt-1" /> <span>Add To Cart</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => addToWishlist({ productId: product._id })}
                  className=" text-white bg-yellow-700 py-2 px-3 rounded-md shadow font-semibold mt-1">
                  <FaHeart fontSize={20} />
                </button>
              </li>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default SingleProduct;
