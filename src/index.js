import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './pages/User/User';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Sidebar />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/User/:id' element={<User />}></Route>
    </Routes>
  </BrowserRouter>
);
