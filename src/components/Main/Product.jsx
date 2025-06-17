import { useEffect, useState } from "react";
import axios from "axios";
import { GiDiamonds } from "react-icons/gi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Product = () => {
  const [isActiveButton, setIsActiveButton] = useState("all");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/get/p2")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts =
    isActiveButton !== "all"
      ? product.filter((item) => item.type === isActiveButton)
      : product;

  const handleFilter = (type) => {
    setIsActiveButton(type);
  };

  return (
    <div className="product2">
      <div className="product2-wrapper mt-30 container">
        <div className="flex align-center justify-between flex-wrap">
          <div className="datails">
            <p className="paragraph">
              <GiDiamonds className="diamondIcon" />
              FRESH FROM OUR FARM
              <GiDiamonds className="diamondIcon" />
            </p>
            <h1 className="heading">Best Organic Products</h1>
          </div>

          <div className="buttons">
            {["all", "vegetable", "fruit", "bread"].map((type) => (
              <button
                key={type}
                className={
                  isActiveButton === type ? "secondary-btn" : "non-active-btn"
                }
                onClick={() => handleFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="main-grid mt-30">
          <div className="grid grid-cols-3">
            {filteredProducts.map((item) => (
              <div key={item._id} className="product2-items">
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
            Subscribe <FaRegArrowAltCircleRight />
          </button>
        </center>
      </div>
    </div>
  );
};

export default Product;
