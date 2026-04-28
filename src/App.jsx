import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Intro from "./pages/Intro";
import Main from "./pages/Main";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;