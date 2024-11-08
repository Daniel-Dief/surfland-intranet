import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModalCase from '../components/ModalCase';

import Home from "../templates/Home";
import MySessions from "../templates/MySessions";
import Schedule from "../templates/Schedule";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="MySessions" element={<MySessions />} />
        <Route path="Schedule" element={<Schedule />} />
      </Routes>
      <ModalCase />
    </Router>
  );
}