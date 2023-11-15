import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Catalog from "./components/Catalog";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CharCard from "./components/CharCard";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>React Project Begins Now</h1>

            <Navigation />
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/catalog" element={<Catalog />}></Route>
                <Route path="/charCard" element={<CharCard />}></Route>
            </Routes>
        </>
    );
}

export default App;
