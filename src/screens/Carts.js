import React, { useState, useEffect } from "react";
import ProductHeader from "../components/ProductHeader";

const Carts = () => {
  let b = JSON.parse(localStorage.getItem("cart"));
  const [dataCart, setdataCart] = useState(b);
  const [sums, setsums] = useState();
  const plus = (data) => {
    let y = dataCart.map((item) => {
      return item.id === data ? { ...item, quety: item.quety + 1 } : item;
    });
    setdataCart(y);
  };
  const minus = (data) => {
    let y = dataCart.map((item) => {
      return item.id === data ? { ...item, quety: item.quety - 1 } : item;
    });
    setdataCart(y);
  };

  useEffect(() => {
    let n = dataCart.map((item) => {
      return { ...item, quety: 1 };
    });
    setdataCart(n);
    console.log();
  }, []);
  let sum = [];
  let tong = 0;
  useEffect(() => {
    for (let i = 0; i < dataCart.length; i++) {
      sum.push(dataCart[i].price * dataCart[i].quety);
    }
    for (let i = 0; i < sum.length; i++) {
      tong += sum[i];
    }
    setsums(tong);
  });
  const remove = () => {
    alert("đặt hàng thành công");
    window.localStorage.removeItem("cart");
  };
  return (
    <div>
      <ProductHeader />
      <div className="container">
        {dataCart.map((item) => (
          <div className="row">
            <div className="col-2">
              <div className="cartItem1">
                <img src={item.img} />
              </div>
            </div>
            <div className="col-2">
              <div className="cartItem1">
                <span>{item.name}</span>
              </div>
            </div>
            <div className="col-2">
              <div className="cartItem1">
                <span id="price">{item.price * item.quety} đ</span>
              </div>
            </div>
            <div className="col-3 inputBtn">
              <div className="cartItem1Btn">
                <buttom className="btn" onClick={() => minus(item.id)}>
                  -
                </buttom>
                <input type="text" min="0" value={item.quety} />
                <buttom className="btn" onClick={() => plus(item.id)}>
                  +
                </buttom>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-2">
              <div className="cartItem">
                {/* <buttom className="btn"> xoa</buttom> */}
              </div>
            </div>
          </div>
        ))}
        <div className="cartFooter">
          <div className="footer">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-3">
                <spanr>Tổng giá tiền :{sums} </spanr>
              </div>
              <div className="col-3"></div>
              <div className="col-3">
                <a href="/">
                  <buttom className="btn btn-outline-success" onClick={remove}>
                    Thanh Toán
                  </buttom>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
