import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import HomePage from "./Pages/HomePage";
import MainForm from "./components/MainForm";

function App() {
  return (
    <div style={{backgroundColor:"#000000"}}>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<MainForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
