import { GiDiamonds } from "react-icons/gi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
// import data from "../../staticData/product.json";
import { useState } from "react";
import products from "../../staticData/product";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(products);
  const [viewItem, setviewItem] = useState(4);
  const [isClick, setIsClick] = useState(true);

  const handleClick = () => {
    setIsClick(!isClick);
    setviewItem(viewItem === 4 ? product.length : 4);
  };

  console.log("View item", viewItem);

  return (
    <div className="product mt-30 container">
      <div className="product_wrapper">
        <div className="flex align-center justify-between flex-wrap">
          <div>
            <p className="paragraph">
              {" "}
              <GiDiamonds className="diamondIcon"></GiDiamonds>FRESH FROM OUR
              FIRM <GiDiamonds className="diamondIcon"></GiDiamonds>{" "}
            </p>
            <h1 className="heading">Related Product</h1>
          </div>
          <div>
            <button
              className={isClick ? "secondary-btn" : "primary-btn"}
              onClick={handleClick}
              // className="secondary-btn"
            >
              {viewItem === 4 ? "View More" : "View Less"}{" "}
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
            </button>
          </div>
        </div>
        <div className="flex align-center justify-between mt-20 flex-wrap">
          {product?.slice(0, viewItem).map((item) => {
            return (
              <Link
                to={`/product/description/${item.id}`}
                key={item.id}
                className="product-items mt-20"
              >
                <div className="flex align-center justify-center">
                  <button className="discount-btn">{item.discount}%</button>
                  <button className="arrow-btn">
                    {" "}
                    <MdOutlineArrowOutward />{" "}
                  </button>
                </div>
                <img src={item.image} alt={item.type} />
                <div className="mt-2">
                  <h6>{item.name}</h6>
                  <hr className="hr-line" />
                  <h1 className="price">
                    {/* {item.price - item.price * (item.discount / 100)}{" "} */}
                    {item.price}
                    <span className="span">{item.price}</span>
                    <span className="span-star">{item.stars}</span>
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
