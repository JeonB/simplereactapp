import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import Navbar from "./navbar/Navbar";
import { AuthContextProvider } from "./form/AuthContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="/events" element={<Pages.Events />} />
          <Route path="/annual" element={<Pages.AnnualReport />} />
          <Route path="/team" element={<Pages.Teams />} />
          <Route path="/blogs" element={<Pages.Blogs />} />
          <Route path="/sign-up" element={<Pages.SignUp />} />
          <Route path="/sign-in" element={<Pages.SignIn />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
