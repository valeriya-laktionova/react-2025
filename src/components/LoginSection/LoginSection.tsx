import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSection.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { login } from '../../store/authSlice';

const LoginSection: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setLocalError(null);

    try {
      const resultAction = await dispatch(login({ email: username, password }));

      if (login.fulfilled.match(resultAction)) {
        setSuccessMessage('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/Menu');
        }, 1500);
      } else {
        setLocalError('Login failed: ' + (resultAction.payload ?? 'Unknown error'));
      }
    } catch (err: any) {
      setLocalError('Unexpected error: ' + err.message);
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    setSuccessMessage('');
    setLocalError(null);
  };

  return (
    <div className="login-page">
      <h2 className="login-title">Log in</h2>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User name</label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Logging in...' : 'Submit'}
            </button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>

          
          {(localError || error) && (
            <p className="error-text">{localError ?? error}</p>
          )}

          {successMessage && <p className="success-text">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginSection;