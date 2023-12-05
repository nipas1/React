import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Catalog from "./components/Catalog/Catalog";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import SingleComputer from "./components/Catalog/SingleComputer";
import SingleUser from "./components/SingleUser";
import Register from "./components/Register";
import AddComputer from "./components/AddComputer";
import Logout from "./components/Logout";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem("accessToken");

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        console.log(values);
        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate("/");
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(
            values.email,
            values.password
        );

        setAuth(result);
        console.log(result);

        localStorage.setItem("accessToken", result.accessToken);

        navigate("/");
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem("accessToken");
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.email,
    };
    return (
        <AuthContext.Provider value={values}>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/catalog" element={<Catalog />}></Route>
                <Route
                    path="/singleComputer"
                    element={<SingleComputer />}
                ></Route>
                <Route path="/singleUser" element={<SingleUser />}></Route>
                <Route path="/addComputer" element={<AddComputer />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
