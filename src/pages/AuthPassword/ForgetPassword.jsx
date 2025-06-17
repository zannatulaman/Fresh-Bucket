/* eslint-disable react/jsx-no-undef */

import { Input } from "antd";
import Form from "antd/es/form/Form";
import axios, { Axios } from "axios";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import Cookies from "js-cookie";
import { toast } from "sonner";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ForgetPassword = () => {
  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/forget-password",
        values
      );

      if (response.data.success) {
        toast.success("Otp sent successfully! check your email ");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <Form
          className="auth-form"
          name="register-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="auth-form-details">
            <h2>Forget Password</h2>
            <br />
            <p>
              Enter your account email address. We will send a confimation email{" "}
              <br /> to reset your password
            </p>
          </div>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Not a valid email",
              },
            ]}
          >
            <Input
              name="email"
              type="email"
              className="default-input"
              placeholder="Enter your email"
              prefix={<MdOutlineMail size={20} />}
              // onChange={(e)=> setEmail(e.target.value)}
            />
          </Form.Item>
          <button
            className="primary-btn  w-100"
            style={{ backgroundColor: "#ea4335" }}
          >
            Get Otp
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
