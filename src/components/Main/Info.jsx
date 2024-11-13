
import { GiDiamonds } from "react-icons/gi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Info = () => {
  return (
    <div className="info  mt-30">
      <div className="info__wrapper">
        <div className="grid grid-cols-3 grid-gap-20">
          <div className="info__veggiesImage flex align-center justify-center">
               <img src="/images/info/infoVeggies.png" alt="veggies-picture" />
          </div>
          <div className="info__details mt-20 flex flex-column align-center justify-center">
            <p className="paragraph">
              <GiDiamonds className="diamondIcon"></GiDiamonds>FRESH FROM OUR
              FIRM <GiDiamonds className="diamondIcon"></GiDiamonds>
            </p>
              <h1>Trusted Organic Food <br /> Store Conscious</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione, eum nihil debitis reiciendis voluptate placeat at molestias? Rerum, soluta!</p>
              <button className="secondary-btn mt-20">Subscribe  <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
          </div>
          <div className="info__manImage">
                <img src="/images/info/infoMan.png" alt="man-picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
