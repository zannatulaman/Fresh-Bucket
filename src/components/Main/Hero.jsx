
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper container">
      {/* <div className="hero-grid grid grid-cols-2"> */}
        <div className="hero-details">
            <h2>A Sustainable Life with <br /> Fresh Fruits, Vegetables,<br /> and Healthy Foods</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus explicabo eos aperiam quibusdam, harum optio eveniet eligendi ab fuga ipsam laudantium possimus doloribus eum blanditiis atque enim, vero veritatis! Dolorum?</p>
            <button className="primary-btn mt-20">Subscribe  <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
        </div>
        <div className="hero-image">
              <img src="/images/hero/heroBanner.png" alt="" />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
