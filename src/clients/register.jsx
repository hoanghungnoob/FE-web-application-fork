import React, { useState } from 'react';
import '../assets/css/register.css';
import Footer from '../components/client/Footer';
import Header from '../components/client/Header';

const initFormValue ={
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length === 0;
};

const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isPhoneValid = (phone) => {
  return /^\d{10}$/.test(phone);
}

export default function RegisterPage() {

  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});

  const validateForm = () =>{
    const error = {};

    if (isEmptyValue(formValue.name)){
      error["name"]  = "Name is required";
    }
    if (isEmptyValue(formValue.phone)){
      error["phone"]  = "Phone is required";
    } else if (!isPhoneValid(formValue.phone)) {
      error["phone"] = "Phone number must contain only digits";
    }
    if (isEmptyValue(formValue.email)){
      error["email"]  = "Email is required";
    } else {
      if (!isEmailValid(formValue.email)){
        error["email"] = "Email is invalid";
      }
    }
    if (isEmptyValue(formValue.password)){
      error["password"]  = "Password is required";
    }

    if(isEmptyValue(formValue.confirmPassword)){
      error["confirmPassword"] = "Confirm Password is required";
    } else if (formValue.confirmPassword !== formValue.password){
      error["confirmPassword"] = "Confirm Password not match";
    }
    
    setFormError(error);
    return Object.keys(error).length === 0;
  }

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const error = { ...formError };

    if (isEmptyValue(formValue[name])) {
      error[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === "email" && !isEmailValid(formValue[name])) {
      error[name] = "Email is invalid";
    } else if (name === "phone" && !isPhoneValid(formValue[name])) {
      error[name] = "Phone number must contain only digits";
    }

    setFormError(error);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(validateForm()){
      console.log("form value", formValue);
    } else {
      console.log("form invalid");
    }
  };

  return (
    <div className='register-page'>
    <Header />
      <div className='title'>Register</div>
      <div className='register-form-container'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className='form-label'>Full Name</label>
            <input
              type="text"
              className='form-control'
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formValue.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formError.name && (
              <div className="error-feedback">{formError.name}</div>
            )}
          </div>
          <div>
            <label htmlFor="phone" className='form-label'>Phone</label>
            <input
              type="text"
              className='form-control'
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formValue.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formError.phone && (
              <div className="error-feedback">{formError.phone}</div>
            )}
          </div>
          <div>
            <label htmlFor="email" className='form-label'>Email</label>
            <input
              type="email"
              className='form-control'
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formValue.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formError.email && (
              <div className="error-feedback">{formError.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="password" className='form-label'>Password</label>
            <input
              type="password"
              className='form-control'
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formValue.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formError.password && (
              <div className="error-feedback">{formError.password}</div>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
            <input
              type="password"
              className='form-control'
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formValue.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formError.confirmPassword && (
              <div className="error-feedback">{formError.confirmPassword}</div>
            )}
          </div>
          <div>
            <p className="option-login">You have an account? <a href="/login">Login now</a></p>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className='footer'>
      <Footer />
      </div>
      
    </div>
    
   
  );
}
