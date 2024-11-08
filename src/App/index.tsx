import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModalCase from '../components/ModalCase';

import Home from "../templates/Home";
import MySessions from "../templates/MySessions";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="MySessions" element={<MySessions />} />
      </Routes>
      <ModalCase />
    </Router>
  );
}