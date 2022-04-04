import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainScreen from "./components/MainScreen";
import ChatsScreen from './components/ChatsScreen';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainScreen/>}> </Route>
                    <Route path="/login" element={<LoginForm/>}> </Route>
                    <Route path="/register" element={<RegisterForm/>}> </Route>
                    <Route path="/chats" element={<ChatsScreen/>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
