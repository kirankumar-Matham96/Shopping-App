import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { useSelector } from "react-redux";
import { languageSelector } from "./redux/slices/languageSlice";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  const { language: selectedLanguage } = useSelector(languageSelector);

  useEffect(() => {
    document.documentElement.dir = selectedLanguage === "ar" ? "rtl" : "ltr";
  }, [selectedLanguage]);

  return (
    <div className="min-h-[100vh] px-60 py-5 light-theme adaptive">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
