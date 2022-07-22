import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

let listCart = [];

const ProductContent = () => {
  const [dataProduct, setdataProduct] = useState([]);
  const [limit, setlimit] = useState(5);
  const [list, setlist] = useState(0);
  const [slCart, setslCart] = useState(0);
  useEffect(() => {
    fetch("https://62cfbda11cc14f8c087c4451.mockapi.io/api/chauA")
      .then((response) => response.json())
      .then((data) => setdataProduct(data));
  }, []);

  const loadMode = () => {
    setlimit((pre) => pre + 5);
  };
  const handleList = (data) => {
    console.log(data);
    setlist((pre) => (pre = 1));
    setlimit((pre) => (pre = 5));
  };
  const handleList2 = () => {
    setlist((pre) => (pre = 2));
    setlimit((pre) => (pre = 5));
  };
  const handleList3 = () => {
    setlist((pre) => (pre = 3));
    setlimit((pre) => (pre = 5));
  };
  const handleList4 = () => {
    setlist((pre) => (pre = 4));
    setlimit((pre) => (pre = 5));
  };
  const handleList5 = () => {
    setlist((pre) => (pre = 5));
    setlimit((pre) => (pre = 5));
  };
  const handleList6 = () => {
    setlist((pre) => (pre = 6));
    setlimit((pre) => (pre = 5));
  };
  const carts = (id, img, name, price) => {
    listCart.push({ id, img, name, price });
    setslCart(listCart.length);
    localStorage.setItem("cart", JSON.stringify(listCart));
    console.log(slCart);
    return slCart;
  };
  return (
    <div className="container">
      <div className="navbar">
        <div className="row">
          <div className="col-2">
            <img src={require("../imge/shopeefoodvn.png")} alt="" />
          </div>
          <div className="col-8" />
          <div className="col-2 cartItem">
            <a href="/cart" className="Cart">
              <div className="cart">
                <FaShoppingCart />
              </div>
            </a>
            <span>{slCart}</span>
          </div>
        </div>
      </div>
      <div className="list" id="list">
        <div className="row" id="row">
          <div className="col-2">
            <div className="list">
              <buttom onClick={() => handleList("abc")}>
                <img src="https://images.pexels.com/photos/992820/pexels-photo-992820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <span>Món ăn châu Âu</span>
              </buttom>
            </div>
          </div>
          <div className="col-2">
            <div className="list">
              <buttom onClick={handleList2}>
                <img src="https://images.pexels.com/photos/992820/pexels-photo-992820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <span>Món ăn châu Á</span>
              </buttom>
            </div>
          </div>
          <div className="col-2">
            <div className="list">
              <buttom onClick={handleList3}>
                <img src="https://images.pexels.com/photos/992820/pexels-photo-992820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <span>Món ăn Địa Trung Hải</span>
              </buttom>
            </div>
          </div>
          <div className="col-2">
            <div className="list">
              <buttom onClick={handleList4}>
                <img src="https://images.pexels.com/photos/992820/pexels-photo-992820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <span>Món ăn Trung Quốc</span>
              </buttom>
            </div>
          </div>
          <div className="col-2">
            <div className="list">
              <buttom onClick={handleList5}>
                <img src="https://images.pexels.com/photos/992820/pexels-photo-992820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <span>Món ăn Nhật Bản</span>
              </buttom>
            </div>
          </div>
          <div className="col-2">
            <div className="list">
              <buttom onClick={handleList6}>
                <img src="https://images.pexels.com/photos/992820/pexels-photo-992820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <span>Món ăn Thái</span>
              </buttom>
            </div>
          </div>
        </div>
      </div>
      <div className="row content" id="row">
        {dataProduct
          .filter((i) => (list === 0 ? i.list > list : i.list === list))
          .slice(0, limit)
          .map((item) => (
            <div className="col-2" style={{ width: "19%" }} key={item.id}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <div className="start">
                    <AiFillStar color="#ffc107" /> 5
                  </div>
                  <p className="price">{item.price} đ</p>
                  <p className="card-text">{item.des}</p>
                  <div className="btn-add">
                    <buttom
                      className="btn btn-primary"
                      onClick={() =>
                        carts(item.id, item.img, item.name, item.price)
                      }
                    >
                      Add to Cart
                    </buttom>
                    <buttom
                      href="./information/index.html"
                      className="btn btn-primary "
                    >
                      Order Now
                    </buttom>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="loadMode">
        <div className="btn btn-outline-success btnMode" onClick={loadMode}>
          load mode
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
