import React, { useContext } from "react";
import { SingleProductContext } from "../../Contexts/SingleContext";
// import selectImage from ''
function Images({ product }) {
  // console.log(product?.images);
  const { selectedImage, selectImage, changeSelect } = useContext(SingleProductContext);

  return (
    <div className="flex space-x-2 justify-evenly md:space-x-1 w-full mt-3">
      {product &&
        product?.images?.map((image) => {
          // console.log(image);
          return (
            <div key={image.id}>
              <img
                src={image.url}
                alt="image"
                className="w-full md:w-[7.5rem] h-16 md:h-20 cursor-pointer"
                onClick={() => {
                  selectImage(image.url);
                  changeSelect(true);
                }}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Images;
