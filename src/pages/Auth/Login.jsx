/* eslint-disable react/jsx-no-undef */
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

import { Checkbox, Divider, Flex, Input } from "antd";
import Form from "antd/es/form/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        values
      );

      console.log("data", data.token);

      if (data.success) {
         localStorage.setItem("auth_token", data.token);
         

        toast.success("User login successful");
        navigate(`/auth/profile`);
      }
    } catch (error) {
      console.log("User logged in error", error);
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
            <h2>Log in</h2>
            <p>To stay connected with us, please registration</p>
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
          <Form.Item
            style={{ margin: "0px" }}
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
            Log in
          </button>
          <Divider plain>Or Log in with</Divider>
          <button
            className="google-btn  w-100"
            style={{ backgroundColor: "#fef5f5" }}
          >
            {" "}
            <FcGoogle size={20} /> Continue with google
          </button>

          <p className="para">
            Don’t have an account? Register?
            <Link to={"/auth/register"}>Register</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
