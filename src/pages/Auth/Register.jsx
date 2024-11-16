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

const Register = () => {
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
            <h1>Registration</h1>
            <p>To stay connected with us, please registration</p>
          </div>
         
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                type="text"
                className="default-input"
                placeholder="Enter your name"
                prefix={<FaRegUserCircle size={20} />}
              />
            </Form.Item>

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
            <Form.Item
              name="password"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your password!",
              //   },
              //   {
              //     min: 6,
              //     message: "Password should be 8 characters long",
              //   },
              // ]}
            >
              <Input.Password
                type="password"
                className="default-input"
                placeholder="Enter your password"
                prefix={<MdLock size={20} />}
              />

              <Form.Item>
                <Flex justify="space-between" align="center">
                  <Form.Item>
                    <Checkbox>Keep signed in to stay connected</Checkbox>
                  </Form.Item>

                  <Form.Item style={{ color: "#546a7e" }}>
                    <BiTargetLock /> Must be at least 8 characters
                  </Form.Item>
                </Flex>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <button className="primary-btn  w-100" style={{backgroundColor: "#ea4335"}}>Register</button>
              <Divider plain>Or Register with</Divider>
              <button className="google-btn  w-100" style={{backgroundColor: "#fef5f5"}}> <FcGoogle size={20}/> Continue with google</button>
             
            <p className="para">Already have an account? <Link>Login</Link></p>
            </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
