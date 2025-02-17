import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy =>import("./pages/Home")
const About = lazy =>import("./pages/About")

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
