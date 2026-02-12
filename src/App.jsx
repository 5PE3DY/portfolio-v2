import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projecten from "./pages/Projecten";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import CoffeeButton from "./components/CoffeeButton"; // Importeer de nieuwe knop

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg-main">
        <Header />

        {/* De zwevende koffie knop */}
        <CoffeeButton />

        {/* Glow achtergrond */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full"></div>
        </div>

        <main className="grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projecten" element={<Projecten />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
