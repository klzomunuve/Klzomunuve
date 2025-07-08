import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminDashboard from './components/AdminDashboard';

const App = () => <AdminDashboard onBack={() => alert('Back to Home')} />;

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);