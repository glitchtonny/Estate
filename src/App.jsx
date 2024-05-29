import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import Navbar from './NavBar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/:type/:id" element={<DetailPage/>} />
      </Routes>
    </Router>
  );
};

export default App;