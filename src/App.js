import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormRisk from './components/FormRisk';
import Home from './components/Home';
import Login from './components/Login';
import TestResult from './components/TestResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/risk' element={<FormRisk />} />
        <Route path='/test' element={<TestResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
