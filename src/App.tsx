import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ConversationPage from './pages/ConversationPage';
import ResultsPage from './pages/ResultsPage';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <Router>
      <ModalProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/conversation" element={<ConversationPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </ModalProvider>
    </Router>
  );
}

export default App;