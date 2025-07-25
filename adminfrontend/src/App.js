// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import DefaultPage from "./DefaultPage.js";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-space-blue p-2 sm:p-4">
        {/* Top Pane: Header with Navigation Toggle */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Main Content: Full-width Main Pane */}
        <main className="mt-2 sm:mt-4 bg-blue-200 border border-blue-300 rounded-lg shadow-md overflow-y-auto">
          <Routes>
            <Route path="/" element={<DefaultPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
