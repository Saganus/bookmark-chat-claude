import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BookmarkList from './components/BookmarkList';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>Bookmark Chat Claude</h1>
          <div className="nav-links">
            <Link to="/">Bookmarks</Link>
            <Link to="/chat">Chat</Link>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BookmarkList />} />
            <Route path="/chat" element={<ChatInterface />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
