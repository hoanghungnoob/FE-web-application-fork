import React  from "react";
import { Send } from "../../components/button/Button.stories";
import { Form, Input, message } from "antd";
import axios from "axios";
const { TextArea } = Input;

const ContactUsForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/contact/create",
        values
      );
      if(response){
        message.success("Your contact information has been sent!");
        form.resetFields(); // Reset fields after successful submission
      }else{
        message.error("Contact sent failed");
      }
    } catch (error) {
      console.error("Error occurred while submitting form:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="contact-form-container">
      <Form
        form={form}
        name="contact"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={contactForm}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<span style={styleLabel}>Name</span>}
          name="user_name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
            {
              min: 5,
              message: "Name must be at least 5 characters!",
            },
          ]}
        >
          <Input className="rounded-3xl h-12" placeholder="Enter your name" />
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
          <Input className="rounded-3xl h-12" placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label={<span style={styleLabel}>Phone</span>}
          name="phone_number"
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
          <Input className="rounded-3xl h-12" placeholder="Enter your phone" />
        </Form.Item>
        <Form.Item
          label={<span style={styleLabel}>Message</span>}
          name="message"
          rules={[
            {
              required: true,
              message: "Please enter your message!",
            },
            {
              min: 10,
              message: "Message must be at least 10 characters long.",
            },
            {
              max: 500,
              message: "Message cannot be more than 500 characters long.",
            },
          ]}
        >
          <TextArea
            rows={4}
            className="rounded-xl"
            placeholder="Enter your message"
          />
        </Form.Item>
        <Form.Item>
          <div className="flex w-full">
            <Send />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

const contactForm = {
  position: "absolute",
  top: "50%",
  right: "auto",
  left: "50%",
  width: 700,
  transform: "translate(-50%, -50%)",
  padding: 30,
  paddingTop: 50,
  marginBottom: 100,
  borderRadius: 16,
  boxShadow: "0 2.979px 59.574px 0 rgba(0, 0, 0, 0.08)",
};
const styleLabel = {
  fontWeight: "bold",
  fontFamily: "Playfair Display",
  fontSize: "18px",
};

export default ContactUsForm;
