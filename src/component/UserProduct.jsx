import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import user1 from "../assets/users/user1.jpeg";
import user2 from "../assets/users/user2.jpeg";
import user3 from "../assets/users/user3.jpeg";
import user4 from "../assets/users/user4.jpeg";
import user5 from "../assets/users/user5.jpeg";
import user6 from "../assets/users/user6.jpeg";
import user7 from "../assets/users/user7.jpeg";
import user8 from "../assets/users/user8.jpeg";
import user9 from "../assets/users/user9.jpeg";
import user10 from "../assets/users/user10.jpeg";
import product1 from "../assets/product/product1.jpeg";
import product2 from "../assets/product/product2.jpeg";
import product3 from "../assets/product/product3.jpeg";
import product4 from "../assets/product/product4.jpeg";
import product5 from "../assets/product/product5.jpeg";
import product6 from "../assets/product/product6.jpeg";
import product7 from "../assets/product/product7.jpeg";
import product8 from "../assets/product/product8.jpeg";
import product9 from "../assets/product/product9.jpeg";
import product10 from "../assets/product/product10.jpeg";

const UserProduct = () => {
  const productData = [
    {
      userImage: user1,
      userName: "garyKemp1",
      productImage: product1,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 4,
    },
    {
      userImage: user2,
      userName: "garyKemp1",
      productImage: product2,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 4,
    },
    {
      userImage: user3,
      userName: "garyKemp1",
      productImage: product3,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 4,
    },
    {
      userImage: user4,
      userName: "garyKemp1",
      productImage: product4,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 8,
    },
    {
      userImage: user5,
      userName: "garyKemp1",
      productImage: product5,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 2,
    },
    {
      userImage: user6,
      userName: "garyKemp1",
      productImage: product6,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 3,
    },
    {
      userImage: user7,
      userName: "garyKemp1",
      productImage: product7,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 0,
    },
    {
      userImage: user8,
      userName: "garyKemp1",
      productImage: product8,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 8,
    },
    {
      userImage: user9,
      userName: "garyKemp1",
      productImage: product9,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 2,
    },
    {
      userImage: user10,
      userName: "garyKemp1",
      productImage: product10,
      productName: "cream ribbed long sleeve zip up street",
      productPrice: "$50.00",
      productPriceDiscount: "$40.00",
      productTag: "T / S",
      likes: 1,
    },
  ];
  const userName = "ganjasvtg";
  const [products, setProducts] = useState(productData);

  const handleLike = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].likes += 1;
    setProducts(updatedProducts);
  };
  return (
    <>
      <section className="user-product-section m-5 mt-[40px]">
        <section className="user-profile flex justify-between px-3">
          <section className="flex items-center">
            <img className="h-12 w-12 rounded-full" src={user1} alt="user1" />
            <section className="grid">
              <p className="text-md font-bold">{userName}</p>
              <section className="text-lg text-[rgb(249,187,66)] flex items-center  ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-md text-[rgb(82,119,174)]">118</span>
              </section>
            </section>
          </section>
          <section>
            <button className="bg-transparent border-[rgb(0,118,131)] border-2 rounded-md py-1 px-3">
              Explore closet
            </button>
          </section>
        </section>
        {/* <p className="text-xl font-bold">User Product</p> */}
        <section className="product-container grid grid-cols-5 gap-5 max-sm:grid-cols-2 max-md:grid-cols-3">
          {products.map((data, index) => (
            <section key={index} className="product-card grid">
              {/* user info */}
              <section className="user-info flex gap-2 text-gray-600 font-semibold items-center m-2">
                <img
                  className="rounded-full h-8 w-8"
                  src={data.userImage}
                  alt="user-image"
                />
                <p className="text-sm">{data.userName}</p>
              </section>

              {/* product image */}
              <section className="relative">
                <img src={data.productImage} alt="product" />

                {/* Like button */}
                <button
                  className="absolute bottom-2 right-2 bg-white rounded-full flex items-center gap-1 px-2 py-1 shadow-md hover:shadow-lg hover:bg-gray-100"
                  onClick={() => handleLike(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 20.27l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-600">
                    {data.likes}
                  </span>
                </button>
              </section>

              {/* product info */}
              <section className="product-info pt-2 text-sm text-gray-500">
                <p>{data.productName}</p>
                <p className="mb-3">{data.productTag}</p>
                <p>{data.productPrice}</p>
                <p className="text-[rgb(0,118,131)] text-lg">
                  {data.productPriceDiscount}
                </p>
              </section>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default UserProduct;
