import React, { useState } from 'react';
import '../assets/css/clients/login.css';
import '../assets/css/clients/bootstrap.min.css';
import Footer from '../components/Footer.jsx'; // Import Footer component
import Header from '../components/Header.jsx';
import useAuthService from "../api/auth.js"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { postLogin } = useAuthService();
  const [formError, setFormError] = useState({});
  const [error, setError] = useState(null);

  const isEmptyValue = (value) => {
    return !value || value.trim().length === 0;
  };

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.email)) {
      error['email'] = 'Email is required';
    } else if (!isEmailValid(formValue.email)) {
      error['email'] = 'Email is invalid';
    }

    if (isEmptyValue(formValue.password)) {
      error['password'] = 'Password is required';
    }

    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const result = await postLogin(formValue.email, formValue.password);
      if (result) {
        console.log('Login successful'); // Do something after successful login
        navigate('/home');
      } else {
        setError('Invalid email or password'); // Set error message if login fails
      }
    } else {
      console.log('form invalid');
    }
  };
  
  return (
    <div className="login-container">
      <div className="container-fluid" id="container-fluid">
        <div className="container-fluid pb-5" id="bg-1">
          <div className="container-fluid bg-1 p-5" id="bg">
            <h1 className="text-center">Login</h1>
          </div>
        </div>
        <div className="container-fluid bg-2 p-5 bg-white" id="bg-2"></div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="Username" className="col-form-label custom-label">
                Email
              </label>
              <input
                type="text"
                className={`form-control rounded-pill ${formError.email ? 'is-invalid' : ''}`}
                name="email"
                id="Username"
                placeholder="Enter the email"
                value={formValue.email}
                onChange={handleChange}
              />
              {formError.email && <div className="invalid-feedback">{formError.email}</div>}
            </div>
            <div className="row">
              <label htmlFor="Password" className="col-form-label custom-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control rounded-pill ${formError.password ? 'is-invalid' : ''}`}
                name="password"
                id="Password"
                placeholder="Enter the password"
                value={formValue.password}
                onChange={handleChange}
              />
              {formError.password && <div className="invalid-feedback">{formError.password}</div>}
            </div>
            <div className="row d-flex flex-column align-items-center justify-content-center pt-4 text-center">
              <p className="">
                You don't have an account? <a href="/register">Register now</a>
              </p>
              {/* Thêm phần hiển thị lỗi */}
              {error && <div className="alert alert-danger">{error}</div>}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: '#AD343E', border: '1px solid black', borderRadius: '118px' }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
