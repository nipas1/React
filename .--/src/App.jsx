import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Catalog from "./components/Catalog";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>React Project Begins Now</h1>

            <Navigation />
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/catalog" element={<Catalog />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );
}

export default App;
