
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'; // Tailwind CSS file
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">RBAC Admin Dashboard</h1>
          <ul className="flex gap-4">
            <li><Link to="/users" className="text-blue-500 hover:underline">Users</Link></li>
            <li><Link to="/roles" className="text-blue-500 hover:underline">Roles</Link></li>
            <li><Link to="/permissions" className="text-blue-500 hover:underline">Permissions</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
