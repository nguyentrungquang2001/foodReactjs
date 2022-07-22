import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductHeader = () => {
  let b = JSON.parse(localStorage.getItem("cart"));
  const [slCart, setslCart] = useState(b.length);
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="row">
            <div className="col-2">
              <img src={require("../imge/shopeefoodvn.png")} alt="" />
            </div>
            <div className="col-8" />
            <div className="col-2 cartItem">
              <a href="#" className="Cart">
                <div className="cart">
                  <FaShoppingCart />
                </div>
              </a>
              <span>{slCart}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
