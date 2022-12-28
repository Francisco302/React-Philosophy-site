import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import './App.css';
import PagesHomePage from './pages/HomePage/HomePage';
import PhilosopherPage from './pages/PhilosopherPage/PhilosopherPage';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {
  return (
    <div>
      {/* <NavBar />
    <PagesHomePage/> */}

      <>
      <NavBar />
        <Routes>
          <Route path="/" element={<PagesHomePage />} />
          <Route path="/philosopher" element={<PhilosopherPage />} />
          <Route path="/about" element={<PhilosopherPage />} />
        </Routes>
      </>

    </div>
  );
}

export default App;
