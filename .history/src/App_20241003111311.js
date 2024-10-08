import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainConten from './Components/MainConten'; // Sesuaikan dengan path
import ProtectedRoute from './components/auth/ProtectedRoute'; // Pastikan path ini benar
import Dashboard from './components/Dashboard'; // Ganti sesuai dengan path ke komponen dashboard (jika ada)

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={MainConten} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/" component={MainConten} /> {/* Home route */}
      </Switch>
    </Router>
  );
};

export default App;
