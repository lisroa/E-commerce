"use client";
import { Card } from "flowbite-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Cardd = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductDescription(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-purple-700 w-8 h-8 rounded-full m-2 p-3">
          <CheckIcon className="h-7 w-7 text-black cursor-pointer"></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-purple-500 w-8 h-8 rounded-full m-2 p-3"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <PlusIcon className="h-8 w-8 text-black cursor-pointer"></PlusIcon>
        </div>
      );
    }
  };

  return (
    <Card href="#" className="max-w-sm" onClick={() => showProduct(data.data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {" "}
          {data.data.category}{" "}
        </span>
        <img
          className="w-500 h-full object-cover rounded-lg"
          src={data.data.image}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title} </span>
        <span className="text-lg font-medium"> ${data.data.price} </span>
      </p>
    </Card>
  );
};

export default Cardd;

/*


 <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg mt-5"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {" "}
          {data.data.category}{" "}
        </span>
        <img
          className="w-500 h-full object-cover rounded-lg"
          src={data.data.image}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title} </span>
        <span className="text-lg font-medium"> ${data.data.price} </span>
      </p>
    </div>


    */
