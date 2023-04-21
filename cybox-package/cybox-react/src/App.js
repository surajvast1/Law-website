<<<<<<< Updated upstream
import { React, useEffect } from "react";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "../src/assets/font/font-awesome.css";
import routes from "./pages";
// import Page404 from './pages/404';
=======
import React, { useEffect } from 'react';
import AOS from 'aos';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import '../src/assets/font/font-awesome.css';
import routes from './pages';
import Page404 from './pages/404';
>>>>>>> Stashed changes

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

<<<<<<< Updated upstream
  return (
    <>
      <Header />

      <Routes>
        {routes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.component} exact />
        ))}
        {/* <Route path='*' element={<Page404 />} /> */}
      </Routes>

      <Footer />
=======
  const location = useLocation();
  const isComingSoonPage = location.pathname !== '/coming-soon';

  return (
    <>
      <Header />

      <Routes>
        {routes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.component} exact />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>

      {isComingSoonPage && <Footer />}
>>>>>>> Stashed changes
    </>
  );
}

export default App;
