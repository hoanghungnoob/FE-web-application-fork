import React from "react";
import { Form, Input, Button, message } from "antd";
import useAuthService from "../../api/auth";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { postRegister } = useAuthService();
  const [form] = Form.useForm();
  const [errorEmail, setErrorEmail] = React.useState("");
console.log('lỗi ',errorEmail);
  const onFinish = async (values) => {
    const { name, phone, email, password, confirmPassword } = values;
    try {
      const response = await postRegister(
        name,
        phone,
        email,
        password,
        confirmPassword
      );
      if (response && !response.error) {
        setErrorEmail("");
        message.success("Register successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setErrorEmail(response.error.email);
        form.setFields([
          {
            name: 'email',
            errors: [response.error.email],
          },
        ]);
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-page">
      <div className="register-title">Register</div>
      <div className="register-form-container bg-2">
        <Form
          form={form}
          name="register"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={<span style={styleLabel}>Full Name</span>}
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
              {
                min: 5,
                message: "Name must be at least 5 characters!",
              },
            ]}
          >
            <Input className="rounded-3xl h-12 color-placeholder" placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label={<span style={styleLabel}>Phone</span>}
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
              {
                pattern: /^[0-9]{10,15}$/,
                message: "Please enter a valid phone number (10-15 digits)",
              },
            ]}
          >
            <Input
              className="rounded-3xl h-12"
              placeholder="Enter your phone"
            />
          </Form.Item>
          <Form.Item
            label={<span style={styleLabel}>Email</span>}
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email address.",
              },
              {
                type: "email",
                message: "Please enter a valid email address.",
              },
              {
                max: 320,
                message: "Email address cannot be longer than 320 characters.",
              },
            ]}
          >
            <Input
              className="rounded-3xl h-12"
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item
            label={<span style={styleLabel}>Password</span>}
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
              {
                min: 8,
                message: "Password must be at least 8 characters long.",
              },
            ]}
          >
            <Input.Password
              className="rounded-3xl h-12"
              placeholder="Enter your password"
            />
          </Form.Item>
          <Form.Item
            label={<span style={styleLabel}>Confirm Password</span>}
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              className="rounded-3xl h-12"
              placeholder="Confirm your password"
            />
          </Form.Item>
          <div className="already-account">
            Already have an account? <Link to="/login">Login now</Link>
          </div>
          <Form.Item>
            <div className="flex w-full">
              <Button
                type="primary"
                htmlType="submit"
                className="rounded-3xl h-12 button-register"
              >
                Register
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const styleLabel = {
  fontWeight: "bold",
  fontFamily: "Georgia, 'Times New Roman', Times, serif",
  fontSize: "16px",
};

export default RegisterForm;
