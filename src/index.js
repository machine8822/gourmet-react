import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Cheese from './pages/Cheese';
import Wine from './pages/Wine';
import Cigars from './pages/Cigars';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cheese" element={<Cheese />}/>
          <Route path="wine" element={<Wine />}/>
          <Route path="cigars" element={<Cigars />}/>
          <Route path="checkout" element={<Checkout />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
