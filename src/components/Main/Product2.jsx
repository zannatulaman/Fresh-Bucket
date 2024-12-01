import { GiDiamonds } from "react-icons/gi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import Product from "./Product";
import { product } from "../../staticData/data";

const Product2 = () => {
  const [isActiveButton, setIsActiveButton] = useState("all");
  const [productList, setProductList] = useState();
  const [productItem, setProductItem] = useState(product);

  console.log("productItem", productItem);

  const handleClick = (e) => {
    // console.log('Event', e);

    if (e === "all") {
      setIsActiveButton(e);
    }
    if (e === "vegetable") {
      setIsActiveButton(e);
    }
    if (e === "fruit") {
      setIsActiveButton(e);
    }
    if (e === "bread") {
      setIsActiveButton(e);
    }
  };

  const handleFilter = (type) => {
    // console.log('Type', type);

    if (!type) {
      setProductItem(productList);
    } else {
      const filterProduct = productList.filter((item) => item.type === type);
      setProductItem(filterProduct);
    }
  };

  return (
    <div className="product2">
      <div className="product2-wrapper mt-30 container">
        <div className="flex align-center justify-between flex-wrap">
          <div className="datails">
            <p className="paragraph">
              <GiDiamonds className="diamondIcon"></GiDiamonds>FRESH FROM OUR
              FIRM <GiDiamonds className="diamondIcon"></GiDiamonds>
            </p>
            <h1 className="heading">Best Organic Products</h1>
          </div>
          <div className="buttons">
            <button
              className={
                isActiveButton === "all" ? "secondary-btn" : "non-active-btn"
              }
              onClick={() => {
                handleClick("all");
                handleFilter("all");
              }}
            >
              All
            </button>
            <button
              className={
                isActiveButton === "vegetable"
                  ? "secondary-btn"
                  : "non-active-btn"
              }
              onClick={() => {
                handleClick("vegetable");
                handleFilter("vegetable");
              }}
            >
              Vegetable
            </button>
            <button
              className={
                isActiveButton === "fruit" ? "secondary-btn" : "non-active-btn"
              }
              onClick={() => {
                handleClick("fruit");
                handleFilter("fruit");
              }}
            >
              Fruit
            </button>
            <button
              className={
                isActiveButton === "bread" ? "secondary-btn" : "non-active-btn"
              }
              onClick={() => handleClick("bread")}
            >
              Bread
            </button>
          </div>
        </div>

        <div className="main-grid mt-30">
          <div className="grid grid-cols-3">
            {productItem.map((item) => (
              <div key={item.id} className="product2-items">
                <div className="flex align-center justify-center flex-gap-20 flex-wrap">
                  <img src={item.image} alt={item.type} />
                  <div className="another-details mt-30">
                    <h6>{item.name}</h6>
                    <h6>${item.price}</h6>
                    <h5 className="heading5">
                      &#9733; &#9733; &#9733; &#9733; <strong>&#9734;</strong>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="midbannerInfo">
            <img
              className="banner-image"
              src="/images/product2/midBannerInfo.png"
              alt="Banner-info"
            />
            <div className="midbanner-details">
              <h6 className="special-offer">Special Offer</h6>
              <h1 className="discount">50% off</h1>
              <button className="shop-now secondary-btn">
                Shop now &rarr;
              </button>
            </div>
          </div>
        </div>

        <center>
          <button className="secondary-btn mt-20">
            Subscribe <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
          </button>
        </center>
      </div>
    </div>
  );
};

export default Product2;
