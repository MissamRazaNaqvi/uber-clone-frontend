import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import UserRegistration from "./pages/user/UserRegistration";
import UserLogin from "./pages/user/UserLogin";

import CaptainRegistration from "./pages/captain/CaptainRegistration";
import CaptainLogin from "./pages/captain/CaptainLogin";

import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route path="/signup" element={<UserRegistration />}/>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/signup" element={<UserRegistration />} />
      <Route path="/login" element={<UserLogin />} />

      <Route path="/captain/signup" element={<CaptainRegistration />} />
      <Route path="/captain/login" element={<CaptainLogin />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;