import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
