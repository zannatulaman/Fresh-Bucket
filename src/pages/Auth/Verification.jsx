import { Flex, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Verification = () => {
  const [otp, setOtp] = useState("");
  const [otpQuiry] = useSearchParams("");
  const navigate = useNavigate();

  const handleClick = async () => {
    // console.log("Otp", otp);

    const email = otpQuiry.get("email");
   

    try {
      const payLoad = {
        otp,
        email,
      };

      const {data} = await axios.post(
        "http://localhost:5000/api/user/verify",
        payLoad
      );

      console.log("Response", data.success);

      if (data.success) {
        toast.success("Otp verification successful");
        navigate(`/auth/login`);
      }
    } catch (error) {
      console.log("Verifing otp Error ", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-form">
          <div className="auth-form-details">
            <h2>Verification</h2>
            <p>
              Enter the 6-digit code that we sent to <br /> s*******0@gmail.com
            </p>
          </div>
          <Flex justify="center" className="verification">
            <Input.OTP length={6} onChange={(value) => setOtp(value)} />
          </Flex>
          <br />
          <center>
            <button
              className="primary-btn w-100"
              style={{ backgroundColor: "#ea4335" }}
              onClick={handleClick}
            >
              Submit
            </button>
            <p className="mt-10">OTP(One time password) valid for 5 minutes</p>
            <h6 className="mt-10" style={{ color: "#2b455d" }}>
              Didn’t receive your code, or did the code time expire? Get a new
              one.
            </h6>
            <p className="paragraph">
              <a href="">Get a new one</a>
            </p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Verification;
