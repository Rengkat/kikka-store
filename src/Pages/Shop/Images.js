import React from "react";

function Images({ product }) {
  return (
    <div className="flex space-x-2 justify-evenly md:space-x-1 w-full mt-3">
      {product &&
        product?.images?.map((image) => {
          return (
            <div key={image.id}>
              <img
                src={image.url}
                alt="image"
                className="w-full md:w-[7.5rem] h-16 md:h-20"
              />
            </div>
          );
        })}
    </div>
  );
}

export default Images;
