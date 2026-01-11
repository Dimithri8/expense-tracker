import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-account" element={<SignUp />} />
    </Routes>
  );
}
