/* eslint-disable react/jsx-no-undef */
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

import { Checkbox, Divider, Flex, Input, } from "antd";
import Form from "antd/es/form/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/register",
        values
      );

      console.log("data", data);

      if (data.success) {
        toast.success("User register successful");
        navigate(`/auth/verify?email=${values.email}`);
      }
    } catch (error) {
      console.log("User registered error", error);
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
            <h2>Registration</h2>
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
          <Form.Item style={{ margin: "0px" }} name="password">
            <Input.Password
              type="password"
              className="default-input"
              placeholder="Enter your password"
              prefix={<MdLock size={20} />}
            />
          </Form.Item>
          <Flex justify="space-between" align="center">
            <Checkbox>Keep signed in to stay connected</Checkbox>
            <div style={{ color: "#546a7e" }}>
              <BiTargetLock />
              Must be at least 8 characters
            </div>
          </Flex>

          <br />
          <button
            className="primary-btn  w-100"
            style={{ backgroundColor: "#ea4335" }}
          >
            Register
          </button>
          <Divider plain>Or Register with</Divider>
          <button
            className="google-btn  w-100"
            style={{ backgroundColor: "#fef5f5" }}
          >
            {" "}
            <FcGoogle size={20} /> Continue with google
          </button>

          <p className="para">
            Already have an account? <Link to={"/auth/login"}>Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
