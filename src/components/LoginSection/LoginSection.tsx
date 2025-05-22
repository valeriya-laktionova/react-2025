import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './LoginSection.css';

const LoginSection: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(username, password);
      alert('Login successful!');
    } catch (err: any) {
      alert('Login failed: ' + err.message);
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
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
            />
          </div>
          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
