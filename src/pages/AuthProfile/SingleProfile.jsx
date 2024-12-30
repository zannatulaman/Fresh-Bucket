import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Col, Form, Input, Row } from "antd";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

const SingleProfile = () => {
  const [isActiveButton, setIsActiveButton] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("auth_token"));
  const [userData, setUserData] = useState(null);

  console.log("UserData", userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/profile/create",
          {},

          {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response", response.data);

        setUserData(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [token]);

  const handleClick = (e) => {
    if (e === "basicInformation") {
      setIsActiveButton(e);
    }

    if (e === "orderList") {
      setIsActiveButton(e);
    }
  };

  return (
    <div className="profile">
      <div className="auth-wrapper">
        <div className="auth-form">
          <div className="d-flex align-center flex-gap-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/66f5/3a1f/f627a86c924360d22d7555d4cb40d56b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GjKj~ZKluXfJ5cLwUXtBPEjbVhc9Arx0V28qjwRfVrA1tXMbKO3KBbNXc2~KW42MC~D~LmcW36KNmf4DDi9ZUe6mA7LMYXeYEVzyKZtRbW4YdRBLOxbu5m8l5eaAt6SIWza7Mi0USYUU3TQe-cZppAyZ-XFzcfeKTKN6hpbgliJa1wA20a7JO9bqu~CJwiwK5ulKRMxAT-IiO3-0I3WogAOLhlz7vaHO21UCYn9iRcK-WN1ugd3-EaGABJsgMu8WBag8q4XSvteXvMv9aS3~P2s5-IWSU2u7-bmUZ13Q99qBTITvz0tmEJCl~zprqTOUmZL41ZzgmKZXPuha6uG~ZQ__"
              alt="gentle-man"
            />
            <div className="profile-details">
              <h2>Tahsan Rahman Khan</h2>
              <p>tahsan@gmail.com</p>
            </div>
          </div>
          <div className="profile-btn mt-30">
            <button
              className={
                isActiveButton === "basicInformation"
                  ? "secondary-btn"
                  : "non-active-btn"
              }
              onClick={() => handleClick("basicInformation")}
            >
              <FaRegUser /> Basic Information
            </button>
            <button
              className={
                isActiveButton === "orderList"
                  ? "secondary-btn"
                  : "non-active-btn"
              }
              onClick={() => handleClick("orderList")}
            >
              <CiMenuBurger />
              Order List
            </button>
          </div>
          <div className="profile-information d-flex align-center justify-between mt-30">
            <h1>Personal Information</h1>
            <button className="secondary-btn">
              <FaEdit />
              Edit
            </button>
          </div>
          <div>
            <Form
              className="vertical"
              layout="vertical"
              name="register-form"
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row gutter={16}>
                <Col span={12}>
                  {/* <Form.Item
                    className="firstName"
                    label={
                      <span style={{ color: "#0B2A46E5", fontWeight: "500" }}>
                        First Name
                      </span>
                    }
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "First Name is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="default-input"
                      placeholder="Enter your first name"
                    />
                  </Form.Item> */}
                  <h1 style={{ color: "black" }}>{userData?.firstName}</h1>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <span style={{ color: "#0B2A46E5", fontWeight: "500" }}>
                        Last Name
                      </span>
                    }
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Last Name is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="default-input"
                      placeholder="Enter your last name"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    style={{ margin: "0px" }}
                    label={
                      <span style={{ color: "#0B2A46E5", fontWeight: "500" }}>
                        Email
                      </span>
                    }
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email address",
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      className="default-input"
                      placeholder="Enter your email"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    style={{ margin: "0px" }}
                    label={
                      <span style={{ color: "#0B2A46E5", fontWeight: "500" }}>
                        Date of Birth
                      </span>
                    }
                    name="dob"
                    rules={[
                      {
                        required: true,
                        message: "Date of Birth is required",
                      },
                    ]}
                  >
                    <Input
                      type="date"
                      className="default-input"
                      placeholder="Enter your date of birth"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    style={{ margin: "0px" }}
                    label={
                      <span style={{ color: "#0B2A46E5", fontWeight: "500" }}>
                        Mobile Number
                      </span>
                    }
                    name="mobile"
                    rules={[
                      {
                        required: true,
                        message: "Mobile Number is required",
                      },
                    ]}
                  >
                    <Input
                      type="tel"
                      className="default-input"
                      placeholder="Enter your mobile number"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    style={{ margin: "0px" }}
                    label="Gender"
                    name="gender"
                    rules={[
                      {
                        required: true,
                        message: "Gender is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="default-input"
                      placeholder="Enter your gender"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="memberSince"
                label={
                  <span style={{ color: "#0B2A46E5", fontWeight: "500" }}>
                    Member Since
                  </span>
                }
                style={{ margin: "0px" }}
              >
                <Input
                  type="date"
                  className="default-input"
                  placeholder="Enter membership start date"
                  title="Enter membership start date"
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
