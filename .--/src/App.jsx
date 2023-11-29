import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Catalog from "./components/Catalog";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import SingleComputer from "./components/SingleComputer";
import SingleUser from "./components/SingleUser";
import Register from "./components/Register";
import AddComputer from "./components/AddComputer";

function App() {
    const [authc, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService(values.email, values.password);

        console.log(result);
    };
    return (
        <AuthContext.Provider value={loginSubmitHandler}>
            <h1>React Project Begins Now</h1>

            <Navigation />
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/catalog" element={<Catalog />}></Route>
                <Route
                    path="/singleComputer"
                    element={<SingleComputer />}
                ></Route>
                <Route path="/singleUser" element={<SingleUser />}></Route>
                <Route path="/addComputer" element={<AddComputer />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
