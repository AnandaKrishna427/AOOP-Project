import React, { useState } from 'react';
import './ForgetPassword.css';
import msg_icon from '../../assets/msg-icon.png';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [result, setResult] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a9f0ea52-1fdc-428e-b257-b17654d41474");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="forgot">
      <div className="forgot-wrapper">
        <div className="forgot-col">
          <h3>Reset Your Password <img src={msg_icon} alt="msg" /></h3>
          <p>Enter your registered email and we’ll send you instructions to reset your password securely.</p>
        </div>
        <div className="forgot-col">
          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn dark-btn">Send Reset Link</button>
          </form>
          <span>{result}</span>
          
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
