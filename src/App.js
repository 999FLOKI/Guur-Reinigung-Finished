import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Reason, Header, Services, About, Value } from './containers';
import { CTA, Brand, Navbar, Owner } from './components';

import './App.css';

import Carrier from "./pages/carrier";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Imprint from "./pages/imprint";
import Privacypolicy from "./pages/privacypolicy";
import NotFound from "./pages/NotFound";

const App = () => {
  const [showRootComponents, setShowRootComponents] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='App'>
        <Navbar />
        {showRootComponents && (
          <>
            <Header />
            <Value />
            <About />
            <Services />
            <Brand />
            <Reason />
            <Owner />
            <CTA />

          </>
        )}
        <Routes>
          {/* <Route path="/" element={ <Home/> }/> */}
          <Route path="/carrier" element={<Carrier setShowRootComponents={setShowRootComponents} />} />
          <Route path="/contact" element={<Contact setShowRootComponents={setShowRootComponents} />} />
          <Route path="/faq" element={<Faq setShowRootComponents={setShowRootComponents} />} />
          <Route path="/imprint" element={<Imprint setShowRootComponents={setShowRootComponents} />} />
          <Route path="/privacypolicy" element={<Privacypolicy setShowRootComponents={setShowRootComponents} />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />

    </div>
  );
};

export default App;
