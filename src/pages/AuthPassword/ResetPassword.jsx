/* eslint-disable react/jsx-no-undef */

import { MdLock } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";


import { Input } from "antd";
import Form from "antd/es/form/Form";


const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ResetPassword = () => {
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
          <h2>Reset Password</h2>
          <p>Setting up password for parvinsalma068@gmail.com</p>
        </div>
       
         
          <Form.Item
            style={{margin: "0px"}}
            name="password"
        
          >
            <Input.Password
              type="password"
              className="default-input"
              placeholder="Enter your new password"
              prefix={<MdLock size={20} />}
            />
         </Form.Item>
                <div style={{ color: "#546a7e", fontSize: "13px"}}>
                  <BiTargetLock />Must be at least 8 characters
                </div>

             <br />

            <Form.Item
            style={{margin: "0px"}}
            name="password"
        
          >
            <Input.Password
              type="password"
              className="default-input"
              placeholder="Enter your confirm password"
              prefix={<MdLock size={20} />}
            />
         </Form.Item>

        
        
          <br />
            <button className="primary-btn  w-100" style={{backgroundColor: "#ea4335"}}>Reset Password</button>
           
        
      </Form>
    </div>
  </div>
  )
}

export default ResetPassword