import React from "react";
import ErrorIcon from "../../assets/error-icon.png";

const ErrorModal = ({ show, otp, setShowErrorModal, handleRetry }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-modal">
        <div className="error-icon-wrapper">
          <img src={ErrorIcon} alt="Error" className="error-icon" />
        </div>
        <h3 className="error-text">Email Verification</h3>
        <div className="otp-error-group">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              className="otp-error-box"
              value={data}
              readOnly
            />
          ))}
        </div>
        <p className="error-body">There was an error with the code</p>
        <div className="error-btn-group">
          <button
            className="error-back-btn"
            onClick={() => setShowErrorModal(false)}
          >
            Back
          </button>
          <button className="resend-btn" onClick={handleRetry}>
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
