import React from 'react';
import './App.css';
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainScreen from "./MainScreen/MainScreen";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainScreen/>}> </Route>
                    <Route path="/login" element={<LoginForm/>}> </Route>
                    <Route path="/register" element={<RegisterForm/>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
