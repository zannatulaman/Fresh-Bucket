/* eslint-disable react/prop-types */
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FaDiceD6 } from "react-icons/fa6";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "sonner";

const Home = ({ product }) => {
  const [token, setToken] = useState(Cookies.get("auth_token"));
  const [isActiveBtn, setActiveBtn] = useState("medium");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/profile/get-profile",

          {
            headers: {
              "auth-token": `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response", response.data.profile);

        setUserData(response.data.profile);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [token]);

  if (!token) {
    return "Token not found";
  }

  console.log("Userdata", userData);

  const handleClick = (e) => {
    if (e === "small") {
      setActiveBtn(e);
    }
    if (e === "medium") {
      setActiveBtn(e);
    }
    if (e === "large") {
      setActiveBtn(e);
    }
    if (e === "x-large") {
      setActiveBtn(e);
    }
  };

  const handleOrder = async () => {
    const orderBody = {
      userId: userData.user,
      productId: product._id,
      quantity: 1,
      price: product.price,
    };

    console.log("Orderbody", orderBody);

    try {
      const response = await axios.post(
        "http://localhost:5000/order/create-order",
        orderBody,
        {
          headers: {
            "auth-token": `${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success(`${response.data.message}`);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  console.log("Product:", product);

  return (
    <div className="home">
      <div className="home-wrapper container">
        <div className="auth-wrapper">
          <div className="auth-form">
            <div className="grid grid-cols-2 grid-gap-30">
              <div className="grid-left">
                <img src={product?.image} alt="veggies" />
              </div>
              <div className="grid-right">
                <h1 className="ml-10">{product?.name}</h1>
                <span>
                  {" "}
                  &#9733; &#9733; &#9733; &#9733; &#9734;{" "}
                  <strong>(4.5/5)</strong>
                </span>
                <div className="flex align-items-center flex-gap-30">
                  <h2>$60.00</h2>
                  <h3>$120.00</h3>
                  <button className="discount">40% off</button>
                </div>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                  consequat nec, ultrices et ipsum. Nulla varius magna a
                  consequat pulvinar.
                </p>
                <hr />
                <div className="tags flex align-center justify-between">
                  <div>
                    <p>
                      <strong>Category:</strong> {product.type}
                    </p>
                    <p>
                      <strong>Tags:</strong> Vegetables Healthy chinese Green
                      Cabbage
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon className="icon" icon={faFacebook} />{" "}
                    <FontAwesomeIcon className="icon" icon={faTwitter} />{" "}
                    <FontAwesomeIcon className="icon" icon={faInstagram} />{" "}
                  </div>
                </div>
                <hr />
                <p>Choose Size</p>
                <div
                // className="all-buttons"
                >
                  <button
                    onClick={() => handleClick("small")}
                    className={
                      isActiveBtn === "small" ? "chooseBtn" : "all-buttons"
                    }
                  >
                    Small
                  </button>
                  <button
                    onClick={() => handleClick("medium")}
                    className={
                      isActiveBtn === "medium" ? "chooseBtn" : "all-buttons"
                    }
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => handleClick("large")}
                    className={
                      isActiveBtn === "large" ? "chooseBtn" : "all-buttons"
                    }
                  >
                    Large
                  </button>
                  <button
                    onClick={() => handleClick("x-large")}
                    className={
                      isActiveBtn === "x-large" ? "chooseBtn" : "all-buttons"
                    }
                  >
                    X-Large
                  </button>
                </div>
                <br />
                <hr />
                <p>Quantity</p>
                <div className="flex align-center  flex-gap-20">
                  <div className="quantity">
                    <button>-</button> 1 <button> + </button>
                  </div>
                  <h4>Out of Stock</h4>
                </div>
                <br />
                <br />
                <button className="buy-btn secondary-btn" onClick={handleOrder}>
                  {" "}
                  <FaDiceD6 /> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
