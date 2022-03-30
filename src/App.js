import React from 'react';
import './App.css';
import LoginForm from "./LoginForm/LoginForm";
<<<<<<< HEAD
import Chat from "./Chat/Chat";
=======
import RegisterForm from "./RegisterForm/RegisterForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainScreen from "./MainScreen/MainScreen";
import ChatWindow from "./ChatWindow/ChatWindow";
>>>>>>> 3f5852dd0eaeec22d191569d910d830e29bb6bd6

function App() {
    return (
        <div className="App">
<<<<<<< HEAD
            <Chat></Chat>

=======
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainScreen/>}> </Route>
                    <Route path="/login" element={<LoginForm/>}> </Route>
                    <Route path="/register" element={<RegisterForm/>}> </Route>
                    <Route path="/chats" element={<ChatWindow/>}> </Route>
                </Routes>
            </BrowserRouter>
>>>>>>> 3f5852dd0eaeec22d191569d910d830e29bb6bd6
        </div>
    );
}

export default App;
