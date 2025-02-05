import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer mt-30">
        <div className="footer_wrapper container">
          <div className="grid grid-cols-4 grid-gap-30">
            <div className="description">
              <img
                src="/public/images/footer/footerImage.png"
                alt="footer-img"
              />
              <p className="para">
                It is a long established fact that a reader will be distracted
                by the readable looking at its layout.
              </p>
              <h6>
                Follow Us : <FontAwesomeIcon icon={faFacebook} />{" "}
                <FontAwesomeIcon icon={faTwitter} />{" "}
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </h6>
            </div>
            <div className="description">
              <h3>Categories</h3>
              <br />
              <p>About Us</p>
              <p>Shop</p>
              <p>Contact Us</p>
              <p>Resources</p>
            </div>
            <div className="description">
              <h3>My Account</h3>
              <br />
              <p>Support</p>
              <p>Your quotes</p>
              <p>Track your order</p>
            </div>
            <div className="description">
              <h3>Contact</h3>
              <br />
              <p>techserve4u@gmail.com</p>
              <p>+123-589-9763</p>
              <p>King Street, Malbourne Australia</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="bottom-footer-wrapper container">
          <div className="flex align-center justify-between">
            <p className="bottom-footer-para">
              2024. All right reserved design by techserve4u
            </p>
            <p className="bottom-footer-para">
              Setting & Privacy Faqs Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer