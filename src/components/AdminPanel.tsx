// src/components/AdminPanel.tsx
import React, { useState } from 'react';

interface AdminPanelProps {
  users: Array<{ id: string; name: string; permissions: any }>;
  addUser: (name: string) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ users, addUser }) => {
  const [newUserName, setNewUserName] = useState('');

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold mb-2">Manage Users</h3>
      <ul className="mb-4">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Permissions: {JSON.stringify(user.permissions)}
          </li>
        ))}
      </ul>
      <input
        className="border p-2 mr-2"
        placeholder="New user name"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => {
          addUser(newUserName);
          setNewUserName('');
        }}
      >
        Add User
      </button>
    </div>
  );
};

export default AdminPanel;
