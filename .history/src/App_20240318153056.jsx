import React, { lazy, Suspense } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Booking from './components/booking/booking';
import Layout from './components/layouts/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExpandingBox from './components/expandingBox/expandingBox';

// Lazy load the components
const Overview = lazy(() => import('./components/overview/overview.jsx'));
const Infographic = lazy(() => import('./components/infographic/infographic'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

        <Routes>
          <Route path="/" element={<Layout />} />

          <Route
            path="booking"
            element={
              <Suspense fallback={<div
              style={{
                backgroundColor:'#00bfff'
              }}>Loading...</div>}>
                <Booking />
              </Suspense>
            }
          />

          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Overview />
              </Suspense>
            }
          />

          <Route
            path="why-us"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Infographic />
              </Suspense>
            }
          />

          <Route
          path='sauce'
          element={<ExpandingBox/>}
        </Routes>

    </>
  );
}

export default App;
