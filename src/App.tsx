import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { SignUp } from './Components/SingUp';
import { SignIn } from './Components/SignIn';
import { Home } from './Components/HomePage';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};
