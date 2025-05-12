import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // ✅ Correct import
import MainLayout from './components/layout/MainLayout';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;
