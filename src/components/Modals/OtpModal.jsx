import React from "react";
import HeadIcon from "../../assets/head-icon.png";

const OtpModal = ({
  show,
  otp,
  handleChange,
  handleKeyDown,
  inputRefs,
  handleOtpSubmit,
}) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-modal">
        <div className="head-icon">
          <img src={HeadIcon} alt="Head" />
        </div>
        <h3 className="head-text">Reset Password</h3>
        <p className="head-body">
          We've sent a code to <b>+234 123 456 7890</b>
        </p>
        <div className="otp-input-group">
          {otp.map((data, index) => (
            <input
              key={index}
              placeholder="0"
              type="text"
              maxLength="1"
              className="otp-input-box"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <div className="rpwd-footer">
          Didn’t get a code? <a href="/resend">Click to resend.</a>
        </div>
        <button className="otp-submit-btn" onClick={handleOtpSubmit}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
