import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './LoginModal.css';
import SignUpModal from './SignUpModal';
import ForgotPasswordModal from './ForgotPasswordModal';

const LoginModal = ({ isOpen, onClose, setIsLoggedIn }) => {
  const modalRef = useRef(null);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleModalClick = (event) => {
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  const resetLoginForm = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  // const handleLoginFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:3001/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ username, password })
  //     });

  //     if (response.ok) {
  //       // alert("Login successful");
  //       window.location.reload();
  //       resetLoginForm();
  //       onClose();
  //       setIsLoggedIn(true); // Update isLoggedIn state to true
  //     } else {
  //       const errorMessage = await response.text();
  //       alert("Invalid username or password");
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3006/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        const { userId, username } = data; // Assuming the response includes the user ID

        // console.log('User ID:', userId);

        // Store user ID in sessionStorage
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('username', username);
        // Reload the page to reflect logged-in state
        window.location.reload();

        // Reset form fields and close the modal
        resetLoginForm();
        onClose();
        setIsLoggedIn(true); // Update isLoggedIn state to true
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError(error.message);
    }
  };


  const toggleSignUp = () => {
    setSignUpOpen(!isSignUpOpen);
  };

  const toggleForgotPassword = () => {
    setForgotPasswordOpen(!isForgotPasswordOpen);
  };

  const handleSignUpModalClose = () => {
    setSignUpOpen(false);
  };

  const handleClose = () => {
    resetLoginForm();
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="l-modal-overlay" ref={modalRef} onClick={handleModalClick}>
          <div className="l-modal-content">
            <div className="l-modal-header">
              <h2 className='l-login'>{isSignUpOpen ? 'Sign Up' : 'Login'}</h2>
              <FaTimes className="text-black" onClick={handleClose} />
            </div>
            {isSignUpOpen ? (
              <SignUpModal isOpen={isOpen} onClose={handleSignUpModalClose} />
            ) : (
              <form onSubmit={handleLoginFormSubmit}>
                <div className="l-form-group">
                  <label className='l-username'>Username</label>
                  <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="l-form-group">
                  <label className="l-password">Password</label>
                  <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <p className="l-forgot-password" onClick={toggleForgotPassword}>Forgot password?</p>
                </div>
                {error && <p className="text-black">{error}</p>}
                <button type="submit" className="l-login-button">Login</button>
                <div className='l-font-size-signUp'>Don't have an account? <span className='l-sign-up' onClick={toggleSignUp}>Sign up</span></div>
              </form>
            )}
          </div>
        </div>
      )}
      <ForgotPasswordModal isOpen={isForgotPasswordOpen} onClose={toggleForgotPassword} />
    </>
  );
};

export default LoginModal;
