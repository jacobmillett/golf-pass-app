// src/pages/AdminPage.tsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState, useEffect } from 'react';
import AdminPanel from '../components/AdminPanel';

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
    <div className="min-h-screen bg-golf-bg p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-soft space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-golf-green">Admin Panel</h1>
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <AdminPanel users={users} addUser={addUser} />
      </div>
    </div>
  );
};
