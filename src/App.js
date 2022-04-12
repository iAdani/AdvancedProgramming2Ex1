import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import MainScreen from "./components/MainScreen";
import ChatsScreen from './components/ChatsScreen';

export default function App() {
    // creates an active user and a setter using useState to share across components.
    const [activeUser, setActiveUser] = useState("");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen />}></Route>
                <Route path="/login" element={<LoginForm setActiveUser={setActiveUser} />}></Route>
                <Route path="/register" element={<RegisterForm />}> </Route>
                <Route path="/chats" element={<ChatsScreen activeUser={activeUser} />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
