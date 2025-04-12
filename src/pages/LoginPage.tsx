// src/pages/LoginPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Mock login logic
    if (username === 'admin') {
      login({ id: '1', name: 'Admin User', role: 'admin', permissions: { foxHollow: true, cedarHills: true, topgolf: true } });
      navigate('/admin');
    } else {
      login({ id: '2', name: username, role: 'user', permissions: { foxHollow: true, cedarHills: true, topgolf: true } });
      navigate('/calendars');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Golf Pass Login</h1>
      <input
        className="border p-2 mb-2 w-64"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 mb-4 w-64"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
