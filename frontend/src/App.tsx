import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import LoginPage from "./components/pages/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
const [user] = useState<string | null>(localStorage.getItem("user") || null)
  return (
    <Routes>
      <Route path="/" element={user?<Home />:<LoginPage />} />
    </Routes>
  );
}

export default App;