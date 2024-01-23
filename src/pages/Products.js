// eslint-disable react-hooks/exhaustive-deps
import React, { useState } from "react";
import { productDetails } from "../config/constants";

function Products() {
  const [state, setState] = useState({
    currentProductIndex: 0,
  });
  const handleProductChange = (event) => {
    setState({ ...state, currentProductIndex: event?.target?.id });
  };
  const productList = () => {
    let productInfo = [];
    let productList = [];
    productDetails.forEach((product, index) => {
      productInfo.push(product);
      productList.push(
        <div className="border-b-2 hover:bg-[#fa5f0b] text-2xl">
          <button
            className="w-full flex items-start capitalize p-6"
            id={index}
            onClick={handleProductChange}
          >
            {product.name}
          </button>
        </div>
      );
    });
    setState({
      ...state,
      productDetails: productInfo,
      productList,
    });
  };
  if (state.productList === undefined) productList();
  return (
    <div id="products">
      <div className="w-full h-full">
        <div className="w-full h-[150px] bg-backgroundSecondaryNavbar text-textPrimary grid justify-center items-center">
          <div className="w-full grid gap-5">
            <p className="text-6xl font-bold">Products</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-start gap-20 sm:m-20 sm:ml-36">
          <div>
            <div className="border-b-4 rounded-sm border-[#fa5f0b] p-3 text-5xl text-center">
              Products
            </div>
            <div className="overflow-y-scroll h-[500px]">
              {state.productList}
            </div>
          </div>
          <div className="ml-5 sm:ml-36">
            <div>
              <div className="text-3xl font-bold capitalize">
                {state?.productDetails?.[state.currentProductIndex].name}
              </div>
              <div>
                <span className="text-2xl text-wrap font-roboto">
                  {
                    state?.productDetails?.[state.currentProductIndex]
                      .description
                  }
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5">
                {state?.productDetails?.[state.currentProductIndex].images.map(
                  (imagePath) => (
                    <img
                      className="w-[300px] h-[300px] rounded-md my-5"
                      src={imagePath}
                      alt=""
                    ></img>
                  )
                )}
              </div>
              <div className="flex justify-start items-center gap-5 text-2xl">
                Material Used:
                <span className="text-2xl text-wrap font-roboto">
                  {
                    state?.productDetails?.[state.currentProductIndex]
                      .materialUsed
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
