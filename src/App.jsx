import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

import DetailPage from './DetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/:type/:id" element={<DetailPage/>} />
      </Routes>
    </Router>
  );
};

export default App;