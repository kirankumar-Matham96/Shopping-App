import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <div className="min-h-[100vh] px-60 py-5 light-theme adaptive">
      <BrowserRouter>
        <Provider store={store}>
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
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
