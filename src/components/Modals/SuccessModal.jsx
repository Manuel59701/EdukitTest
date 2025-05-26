import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import SuccessIcon from "../../assets/success-icon.png";

const SuccessModal = ({
  show,
  newPassword,
  confirmPassword,
  setNewPassword,
  setConfirmPassword,
  setPasswordMismatch,
  passwordMismatch,
  isPasswordValid,
  setShowSuccessModal,
  handleFinalSuccess,
  showNewPassword,
  showConfirmPassword,
  setShowNewPassword,
  setShowConfirmPassword,
  getPasswordErrorMessage,
}) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="success-modal">
        <div className="success-icon">
          <img src={SuccessIcon} alt="Success" />
        </div>
        <h3 className="success-title">Create your new password</h3>
        <div className="success-body">Enter your new password to change</div>

        {/* New Password */}
        <div className="success-input-wrapper">
          <label htmlFor="new-password" className="input-label">
            New Password
          </label>
          <div className="password-input-group">
            <FontAwesomeIcon
              icon={showNewPassword ? faEye : faEyeSlash}
              className="password-toggle-icon-left"
              onClick={(e) => {
                e.preventDefault();
                setShowNewPassword(!showNewPassword);
              }}
              role="button"
              aria-label="Toggle password visibility"
            />
            <input
              type={showNewPassword ? "text" : "password"}
              id="new-password"
              className="success-input with-icon-left"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => {
                const value = e.target.value;
                setNewPassword(value);
                setPasswordMismatch(
                  confirmPassword && value !== confirmPassword
                );
              }}
            />
          </div>
          <p className="input-instruction">Must be at least 8 characters</p>
        </div>

        {/* Confirm Password */}
        <div className="success-input-wrapper">
          <label htmlFor="confirm-password" className="input-label">
            Confirm Password
          </label>
          <div className="password-input-group">
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEye : faEyeSlash}
              className="password-toggle-icon-left"
              onClick={(e) => {
                e.preventDefault();
                setShowConfirmPassword(!showConfirmPassword);
              }}
              role="button"
              aria-label="Toggle confirm password visibility"
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              className="success-input with-icon-left"
              placeholder="Re-enter new password"
              value={confirmPassword}
              onChange={(e) => {
                const value = e.target.value;
                setConfirmPassword(value);
                setPasswordMismatch(newPassword && value !== newPassword);
              }}
            />
          </div>
          <p
            className="input-instruction"
            style={{ color: passwordMismatch ? "red" : "#666" }}
          >
            {getPasswordErrorMessage()}
          </p>
        </div>

        <div className="success-btn-group">
          <button
            className="back-btn"
            onClick={() => setShowSuccessModal(false)}
          >
            Cancel
          </button>
          <button
            className="reset-btn"
            disabled={!isPasswordValid}
            onClick={handleFinalSuccess}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
