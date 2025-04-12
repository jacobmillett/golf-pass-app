// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { CalendarsPage } from './pages/CalendarsPage';
import { AdminPage } from './pages/AdminPage';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/calendars" element={user ? <CalendarsPage /> : <Navigate to="/" />} />
        <Route path="/admin" element={user?.role === 'admin' ? <AdminPage /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
