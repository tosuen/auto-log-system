import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogEntry from './pages/LogEntry';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>JMSDF Log System</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LogEntry />} />
        </Routes>
      </main>
      <footer>
        <p>© 2024 JMSDF</p>
      </footer>
    </div>
  );
}

export default App;
