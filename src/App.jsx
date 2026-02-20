import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Hoofdpagina onderdelen
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projecten from "./pages/Projecten";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import Legal from "./pages/Legal";
import CoffeeButton from "./components/CoffeeButton";
import NotFound from "./pages/NotFound";

// Showcase Thema
import SaasApp from "./themes/SaasNova/SaasApp";

// Dit is de hoofdcomponent. Vite wil graag dat dit de 'Default Export' is.
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg-main">
        {/* Glow achtergrond: fixed zodat deze altijd blijft staan */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full"></div>
        </div>

        {/* De CoffeeButton is vaak fixed, dus die kan hier los staan */}
        <CoffeeButton />

        <main className="grow relative z-10">
          <Routes>
            {/* Routes MET je eigen Header en Footer */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/projecten"
              element={
                <>
                  <Header />
                  <Projecten />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/legal"
              element={
                <>
                  <Header />
                  <Legal />
                  <Footer />
                </>
              }
            />
            <Route
              path="/admin"
              element={
                <>
                  <Header />
                  <AdminDashboard />
                  <Footer />
                </>
              }
            />

            {/* DE SHOWCASE: Volledig geisoleerd zonder jouw Header/Footer */}
            <Route path="/showcase/saas-nova" element={<SaasApp />} />

            {/* 404 Route */}
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <NotFound />
                  <Footer />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Belangrijk: Alleen de component exporteren voor Vite Fast Refresh
export default App;
