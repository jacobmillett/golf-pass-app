// src/pages/LoginPage.tsx
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
    <div className="min-h-screen bg-golf-bg flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-soft w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-golf-green">Login to Golf Pass</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-golf-green"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-golf-green hover:bg-green-800 text-white font-semibold py-2 rounded transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};
