import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

  // Reset all states when the modal is opened
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setOtp('');
      setNewPassword('');
      setOtpVerified(false);
      setError(null);
      setSuccessMessage('');
    }
  }, [isOpen]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:3006/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Reset password failed');
      }

      setSuccessMessage('Password reset email sent successfully');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3006/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'OTP verification failed');
      }

      setOtpVerified(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3006/auth/update-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, newPassword })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Password update failed');
      }

      alert('Password updated successfully');
      setOtpVerified(false);
      onClose(); // Close the modal after updating password

    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden z-50">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center pb-3">
                <h2 className="text-xl font-bold text-black">Forgot Password</h2>
                <FaTimes className="text-black" onClick={onClose} />
              </div>
              {successMessage && !otpVerified && (
                <>
                  <p className="text-green-500 mt-2">{successMessage}</p>
                  <div className="mt-4">
                    <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">Enter OTP</label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={otp}
                      onChange={handleOtpChange}
                      required
                      className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:shadow-inner"
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Verify OTP
                    </button>
                  </div>
                </>
              )}
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {!successMessage && !otpVerified && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:shadow-inner"
                    />
                  </div>
                  {isLoading ? (
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-white bg-gray-400 rounded-lg cursor-not-allowed focus:outline-none"
                      disabled
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Reset Password
                    </button>
                  )}
                </form>
              )}
              {otpVerified && (
                <form onSubmit={handleUpdatePassword}>
                  <div className="mt-4">
                    <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                      required
                      className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:shadow-inner"
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPasswordModal;