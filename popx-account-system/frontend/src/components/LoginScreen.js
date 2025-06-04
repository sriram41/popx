// src/components/LoginScreen.jsx
import React, { useState } from 'react';

const LoginScreen = ({ onBack, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and authenticate here
    onLoginSuccess({
      name: "Harry Doe",
      email: "Marry@Gmail.Com",
      // Other user data would come from your authentication system
    });
  };

  return (
    <div className="screen-container">
      <h1 className="screen-title">Signin to your<br />PopX account</h1>
      <p className="screen-subtitle">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      
      <p className="link-text">
        <a onClick={onBack}>Back to Welcome</a>
      </p>
    </div>
  );
};

export default LoginScreen;