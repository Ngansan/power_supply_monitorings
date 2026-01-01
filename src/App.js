import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Layout/Topbar";
import Dashboard from "./pages/Dashboard";
import Floor4 from "./pages/Floor4";
import Floor15 from "./pages/Floor15";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/floor4" element={<Floor4/>}></Route>
        <Route path="/floor15" element={<Floor15/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
