import React, { useState, useRef } from "react";
import GoogleIcon from "../../assets/Google icon.png";
import OtpModal from "../Modals/OtpModal";
import ErrorModal from "../Modals/ErrorModal";
import SuccessModal from "../Modals/SuccessModal";
import FinalSuccessModal from "../Modals/FinalSuccessModal";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false); // ✅ Success modal
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); // 🔴 Error modal state
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [showFinalSuccessModal, setShowFinalSuccessModal] = useState(false); // State for final success modal

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0 && !otp[index]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleOtpSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      setShowPopup(false);
      setShowSuccessModal(true); // ✅ Show success modal
    } else {
      setShowPopup(false);
      setShowErrorModal(true); // Show error modal
    }
  };

  const handleRetry = () => {
    setOtp(new Array(6).fill(""));
    setShowErrorModal(false);
    setShowPopup(true); // Return to OTP screen
  };

  const handleFinalSuccess = () => {
    // Close the modal and go to login (you can also redirect here)
    setShowFinalSuccessModal(true);
  };

  const handleLoginRedirect = () => {
    // Redirect to login or close the modal
    setShowFinalSuccessModal(false);
    // You can redirect here to the login page or reset the form
  };

  // Check if passwords are valid (at least 8 characters and match)
  const isPasswordValid =
    newPassword.length >= 8 &&
    confirmPassword.length >= 8 &&
    newPassword === confirmPassword;

  // Determine the appropriate error message
  const getPasswordErrorMessage = () => {
    if (newPassword !== confirmPassword) {
      return "Passwords do not match";
    }
    if (newPassword.length < 8 || confirmPassword.length < 8) {
      return "Not up to 8 characters";
    }
    return "";
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-wrapper">
        <h5 className="reset-password-title">Reset Password</h5>
        <p className="reset-password-instruction">
          Enter your email address or phone number, and we’ll send you a 6 digit
          OTP to reset your password
        </p>

        <form className="reset-password-form" onSubmit={handleSubmit}>
          <label>Email/Phone Number</label>
          <input
            type="email"
            placeholder="Enter your email or phone number"
            required
          />
          <button type="submit" className="reset-password-btn">
            Send OTP
          </button>
          <button type="button" className="student-google-btn">
            <img src={GoogleIcon} alt="Google Icon" />
            Sign up with Google
          </button>
          <p className="resetpwd-footer">
            Don't have an account? <a href="/SignUp">Sign Up</a>
          </p>
        </form>
      </div>

      <>
        <OtpModal
          show={showPopup}
          otp={otp}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          inputRefs={inputRefs}
          handleOtpSubmit={handleOtpSubmit}
        />

        <ErrorModal
          show={showErrorModal}
          otp={otp}
          setShowErrorModal={setShowErrorModal}
          handleRetry={handleRetry}
        />

        <SuccessModal
          show={showSuccessModal}
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          setNewPassword={setNewPassword}
          setConfirmPassword={setConfirmPassword}
          setPasswordMismatch={setPasswordMismatch}
          passwordMismatch={passwordMismatch}
          isPasswordValid={isPasswordValid}
          setShowSuccessModal={setShowSuccessModal}
          handleFinalSuccess={handleFinalSuccess}
          showNewPassword={showNewPassword}
          showConfirmPassword={showConfirmPassword}
          setShowNewPassword={setShowNewPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          getPasswordErrorMessage={getPasswordErrorMessage}
        />

        <FinalSuccessModal
          show={showFinalSuccessModal}
          handleLoginRedirect={handleLoginRedirect}
        />
      </>
    </div>
  );
};

export default ResetPassword;
