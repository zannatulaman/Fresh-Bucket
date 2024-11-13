
import { GiDiamonds } from "react-icons/gi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const InfoYear = () => {
  return (
    <div className="info-year mt-30 container">
        <div className="info-year__wrapper">
                <div className="grid grid-cols-2">
                      <div className="info-year__image">
                         {/* <img src="images/infoYear/grape.png" alt="" /> */}
                         <img className="bigPlate" src="images/infoYear/dinnerFood.png" alt="Dinner-food" />
                         {/* <img className="smallPlate" src="images/infoYear/dinnerFood2.png" alt="" />   */}
                      </div>

                      <div className="info-year__details mt-20 flex flex-column align-center justify-center">
                      <p className="styled-text"><GiDiamonds className='gi-diamonds'></GiDiamonds><span>2024</span>
                      <GiDiamonds className='gi-diamonds'></GiDiamonds></p>
                       <h1>International Year of Fruits <br /> & Vegetables</h1>
                       <p className="styled-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti dicta consequuntur exercitationem suscipit tenetur assumenda consectetur praesentium laudantium nobis.</p>
                       <button className="primary-btn mt-20">Subscribe  <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
                      </div>
                </div>
        </div>
         
    </div>
  )
}

export default InfoYear