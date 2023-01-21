import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import HomePage from "./Pages/HomePage";
import MainForm from "./components/MainForm";
import EditMovie from "./components/EditMovie";

function App() {
  return (
    <div style={{backgroundColor:"#000000"}}>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<MainForm />} />
          <Route path="/edit/:id" element={<EditMovie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
