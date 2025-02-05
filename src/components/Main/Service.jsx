

const Service = () => {
     
  return (
    <div className="service mt-30 container">
      <div className="service-flex flex align-center justify-between flex-wrap">
        <div className="service-items">
          <div className="service-image">
            <img src="images/service/delivery.png" alt="delivery" style={{backgroundColor: "#FBBC05"}}/>
          </div>
          <div className="details bg-lightCream">
            <p>Free Delivery</p>
            <h6><strong>From $99</strong></h6>
          </div>
        </div>

        <div className="service-items">
          <div className="service-image">
            <img src="images/service/feedback.png" alt="feedback" style={{backgroundColor: "#F49086"}}/>
          </div>
          <div className="details bg-lightPink">
            <p>99% Customer</p>
            <h6><strong>Customer Feedback</strong></h6>
          </div>
        </div>

        <div className="service-items">
          <div className="service-image">
            <img src="images/service/refresh.png" alt="refresh" style={{backgroundColor: "#D4A0F9"}}/>
          </div>
          <div className="details bg-lightPurple">
            <p>365 Days</p>
            <h6><strong>Free Return</strong></h6>
          </div>
        </div>

        <div className="service-items">
          <div className="service-image">
            <img src="images/service/payment.png" alt="payment" style={{backgroundColor: "#486bfb"}}/>
          </div>
          <div className="details bg-lightBlue">
            <p>Payment</p>
            <h6><strong>Secure System</strong></h6>
          </div>
        </div>

        <div className="service-items">
          <div className="service-image">
            <img src="images/service/safe.png" alt="safe" style={{backgroundColor: "#f66638"}}/>
          </div>
          <div className="details bg-pastelPink">
            <p>100% Safe</p>
            <h6><strong>Secure Shopping</strong></h6>
          </div>
        </div>
      </div>
    </div>
  );


};

export default Service;
