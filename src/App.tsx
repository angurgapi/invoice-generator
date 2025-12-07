import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useHealthCheck } from "./hooks/useHealthCheck";
import { Header } from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { GeneratePage } from "./pages/GeneratePage";

function App() {
  useHealthCheck();

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<GeneratePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
