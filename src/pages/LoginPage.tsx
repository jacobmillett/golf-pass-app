import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin') {
      login({ id: '1', name: 'Admin User', role: 'admin', permissions: { foxHollow: true, cedarHills: true, topgolf: true } });
      navigate('/admin');
    } else {
      login({ id: '2', name: username, role: 'user', permissions: { foxHollow: true, cedarHills: true, topgolf: true } });
      navigate('/calendars');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};