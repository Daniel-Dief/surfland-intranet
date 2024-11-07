import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../templates/Home";
import { Blur } from '../common/styles/div';
import LoginModal from '../templates/LoginModal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <Blur>
        <LoginModal />
      </Blur>
    </Router>
  );
}