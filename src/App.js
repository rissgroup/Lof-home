import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Terms from './pages/TermsAndConditions';
import Privacy from './pages/Privacy';
import Riskpolicy from './pages/RiskPolicy';

export default function App() {
  return (
    <>
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="termandConditions" element={<Terms/>} />
        <Route path="privacy" element={<Privacy/>} />
        <Route path="riskpolicy" element={<Riskpolicy/>} />
      </Routes>
    </>
    
  )
}
