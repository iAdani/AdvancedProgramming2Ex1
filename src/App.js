import React from 'react';
import './App.css';
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainScreen from "./MainScreen/MainScreen";
import ChatWindow from "./ChatWindow/ChatWindow";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainScreen/>}> </Route>
                    <Route path="/login" element={<LoginForm/>}> </Route>
                    <Route path="/register" element={<RegisterForm/>}> </Route>
                    <Route path="/chats" element={<ChatWindow/>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
