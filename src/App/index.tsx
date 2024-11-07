import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModalCase from '../components/ModalCase';

import Home from "../templates/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <ModalCase />
    </Router>
  );
}