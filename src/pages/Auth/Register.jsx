
import { Button, Checkbox, Form, Input } from "antd";
import Header from "../../components/Header/Header";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};


const Register = () => {
  return (
    <div>
    <div className="login-form-container">
    <div className="login-form-box">
    <div className="login-form-details">
    <h2>Registration</h2>
    <p>To stay connected with us, please registration</p> 
    <Form
      className="login-form"
      name="basic"
      // labelCol={{
      //   span: 8,
      // }}
      // wrapperCol={{
      //   span: 16,
      // }}
      // style={{
      //   maxWidth: 600,
      // }}
      // initialValues={{
      //   remember: true,
      // }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        // label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input  placeholder="Enter your email"/>
      </Form.Item>

      <Form.Item
        // label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password  placeholder="Enter your password"/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox className="checkbox">Keep signed to stay connected</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button className="login-btn w-100" type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
   
  </div>
</div>
</div>
  )
}

export default Register