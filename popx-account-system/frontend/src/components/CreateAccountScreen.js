// src/components/CreateAccountScreen.jsx
import React, { useState } from 'react';

const CreateAccountScreen = ({ onBack, onCreateAccount }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and submit to your backend
    onCreateAccount({
      name: formData.fullName,
      email: formData.email,
      // Other user data would come from your registration system
    });
  };

  return (
    <div className="screen-container">
      <h1 className="screen-title">Create your<br />PopX account</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name*</label>
          <input
            type="text"
            name="fullName"
            className="form-input"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Phone number*</label>
          <input
            type="tel"
            name="phoneNumber"
            className="form-input"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Email address*</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Password*</label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Company name</label>
          <input
            type="text"
            name="companyName"
            className="form-input"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Are you an Agency?*</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                checked={formData.isAgency}
                onChange={() => setFormData(prev => ({ ...prev, isAgency: true }))}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                checked={!formData.isAgency}
                onChange={() => setFormData(prev => ({ ...prev, isAgency: false }))}
              />
              No
            </label>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
      
      <p className="link-text">
        <a onClick={onBack}>Back to Welcome</a>
      </p>
    </div>
  );
};

export default CreateAccountScreen;