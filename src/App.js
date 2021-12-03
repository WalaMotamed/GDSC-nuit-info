import "./App.css";
import Navbar from "./Components/header";
import LandingPage from "./Components/LandingPage/landingPage";
import Rescue from "./Components/Rescue";
import Index from "./Components/SauvetageForm/Index";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* /<Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="sa" element={<Index />} />

          <Route path="/rescue" element={<Rescue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
