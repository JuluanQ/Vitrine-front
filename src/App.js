import { BrowserRouter, Routes, Route } from "react-router-dom";

//Style imports
import './assets/css/App.css';

//Pages imports
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
