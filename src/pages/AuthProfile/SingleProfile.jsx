import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Col, Form, Input, Row } from "antd";
import Cookies from "js-cookie";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const SingleProfile = () => {
  const [isActiveButton, setIsActiveButton] = useState(null);
  const [token, setToken] = useState(Cookies.get("auth_token"));
  const [userData, setUserData] = useState(null);

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   dob: "",
  //   mobile: "",
  //   gender: "",
  //   memberSince: "",
  // });

  console.log("UserData", userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/profile/get-profile",

          {
            headers: {
              "auth-token": `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response", response.data.profile);

        setUserData(response.data.profile);

        // setFormData({
        //   firstName: response.data.profile?.firstName || "",
        //   lastName: response.data.profile?.lastName || "",
        //   email: response.data.profile?.email || "",
        //   dob: response.data.profile?.dob || "",
        //   mobile: response.data.profile?.mobile || "",
        //   gender: response.data.profile?.gender || "",
        //   memberSince: response.data.profile?.memberSince || "",
        // });
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

  if (!userData) {
    return <p>Loading</p>;
  }

  return (
    <div className="profile">
      <div className="auth-wrapper">
        <div className="auth-form">
          <div className="d-flex align-center flex-gap-10">
            <img src={userData?.image} alt="gentle-woman" />
            <div className="profile-details">
              <h2>{userData?.firstName}</h2>
              <p>{userData?.email}</p>
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
                  <Form.Item
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
                      placeholder="Enter your name"
                      defaultValue={userData?.firstName}
                    />
                  </Form.Item>
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
                      defaultValue={userData?.lastName}
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
                      defaultValue={userData?.email}
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
                      defaultValue={userData?.dob}
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
                      defaultValue={userData?.phone}
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
                      defaultValue={userData?.gender}
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
                  type="text"
                  className="default-input"
                  placeholder="Enter membership start date"
                  title="Enter membership start date"
                  defaultValue={userData?.member}
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
