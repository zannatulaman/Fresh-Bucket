/* eslint-disable react/jsx-no-undef */
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

import {  Checkbox, Divider, Flex, Input, message } from "antd";
import Form from "antd/es/form/Form";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};



const ForgetPassword = () => {
  return (
    <div className="auth-container">
    <div className="auth-wrapper">
      <Form className="auth-form"
            name="register-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"

      >
        <div className="auth-form-details">
          <h2>Forget Password</h2>
          <br />
          <p>Enter your account email address. We will send a confimation email <br /> to reset your password</p>
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
              type="email"
              className="default-input"
              placeholder="Enter your email"
              prefix={<MdOutlineMail size={20} />}
            />
          </Form.Item>
            <button className="primary-btn  w-100" style={{backgroundColor: "#ea4335"}}>Get Otp</button>
           
        
      </Form>
    </div>
    </div>
  )
}

export default ForgetPassword