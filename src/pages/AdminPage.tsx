// src/pages/AdminPage.tsx
import { useState, useEffect } from 'react';
import AdminPanel from '../components/AdminPanel';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const AdminPage = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const [users, setUsers] = useState([
    { id: '2', name: 'John Doe', permissions: { foxHollow: true, cedarHills: false, topgolf: true } },
    { id: '3', name: 'Jane Doe', permissions: { foxHollow: true, cedarHills: true, topgolf: false } },
  ]);

  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate('/');
    }
  }, [user, navigate]);

  if (user?.role !== 'admin') return null;

  const addUser = (name: string) => {
    setUsers((prev) => [
      ...prev,
      { id: Date.now().toString(), name, permissions: { foxHollow: false, cedarHills: false, topgolf: false } }
    ]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
      <AdminPanel users={users} addUser={addUser} />
    </div>
  );
};
