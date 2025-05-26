import React from "react";
import FinalSuccessIcon from "../../assets/final-success-icon.png";

const FinalSuccessModal = ({ show, handleLoginRedirect }) => {
  if (!show) return null;

  return (
    <div className="final-success-modal-overlay">
      <div className="final-success-modal">
        <div className="final-success-icon">
          <img src={FinalSuccessIcon} alt="FinalSuccess" />
        </div>
        <h3>Password Reset Successful</h3>
        <p>
          Your password has been successfully updated. You can now log in with
          your new password.
        </p>
        <a href="/Login">
          <button
            className="final-success-login-btn"
            onClick={handleLoginRedirect}
          >
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default FinalSuccessModal;
