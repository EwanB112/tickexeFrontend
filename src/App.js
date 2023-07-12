import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Events from './pages/my-tickets';
import BuyScreen from './pages/buy';
import SellScreen from './pages/sell';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/my-tickets" element={<Events />} />
        <Route path="/buy" element={<BuyScreen />} />
        <Route path="/sell" element={<SellScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
