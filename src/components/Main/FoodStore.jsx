import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";
import { MdOutlineArrowOutward } from "react-icons/md";

const FoodStore = () => {
  return (
    <div className="product mt-30 container">
      <div className="">
        <div>
          <p className="paragraph">
            {" "}
            <GiDiamonds className="diamondIcon"></GiDiamonds>FRESH FROM OUR FIRM{" "}
            <GiDiamonds className="diamondIcon"></GiDiamonds>{" "}
          </p>
          <h1 className="heading">Trusted Organic Food Store Conscious</h1>
        </div>

        <div className="flex align-center flex-gap-20">
          <div className="curb-image">
            <div className="curb-image_text">
              <p>
                Explore our <br /> solutions
              </p>
              <button className="arrow-btn">
                <MdOutlineArrowOutward />
              </button>
            </div>
            <img src="/public/images/food-store/Union.png" alt="" />
          </div>

          <div className="flex flex-direction-column flex-gap-20">
            <div className="rounded-image flex align-center flex-gap-20">
              <img
                src="/public/images/food-store/Ellipse 5.png"
                alt="rounded-image"
              />
              <p>
                The titles are organized to emphasize different aspects of the
                organic offerings, starting from the overall concept of a
                sustainable life to the specific components such as fresh
                vegetables, fruits, and healthy foods.
              </p>
            </div>

            <div className="flex align-center flex-gap-20">
              <img
                src="/public/images/food-store/Rectangle 38.png"
                alt="rectangle-imge"
              />
              <img
                src="/public/images/food-store/Rectangle 39.png"
                alt="rectangle39-img"
              />
            </div>

            <div className="all-items">
              <div className="category">
                <div className="flex align-center flex-gap-30">
                  <p>
                    <img
                      src="/public/images/food-store/check-circle.png"
                      alt="check-circle"
                    />
                    fruits
                  </p>

                  <p>
                    <img
                      src="/public/images/food-store/check-circle.png"
                      alt="check-circle"
                    />
                    Breads
                  </p>
                  <p>
                    <img
                      src="/public/images/food-store/check-circle.png"
                      alt="check-circle"
                    />
                    Juices
                  </p>
                  <p>
                    <img
                      src="/public/images/food-store/check-circle.png"
                      alt="check-circle"
                    />
                    Juices
                  </p>
                </div>

                <div className="flex align-center flex-gap-30">
                  <p>
                    <img
                      src="/public/images/food-store/check-circle.png"
                      alt="check-circle"
                    />
                    Vegestables
                  </p>
                  <p>
                    <img
                      src="/public/images/food-store/check-circle.png"
                      alt="check-circle"
                    />
                    Dried
                  </p>
                  <p>
                    <img
                      src="/public/images/food-store/check-circle.png"
                      alt="check-circle"
                    />
                    Dried
                  </p>
                  <img src="/public/images/food-store/tomato.png" alt="" />
                </div>
                <button className="secondary-btn">
                  Subscribe{" "}
                  <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodStore;
