import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Layout/Topbar";
import Dashboard from "./pages/Dashboard";
import FloorMap from "./pages/FloorMap.jsx";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/floors/:floorId" element={<FloorMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
