import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Pages/Loader";


function App() {
  return (
    
      <Router>
  <ToastContainer position="top-center" />
       <Routes>
       <Route path="/" element={<Index/>} />
        <Route path="/home" element={<ProtectedRoute Component={Home}/>} />
        <Route path="*"  element={<NotFound/>} />
        <Route path="/loader"  element={<Loader/>} />
       </Routes>
      </Router>
  
  );
}

export default App;
