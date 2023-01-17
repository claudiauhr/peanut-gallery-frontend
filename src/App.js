import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import CreateTrivia from "./pages/CreateTrivia";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Game from "./pages/Game";

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/game" element={<Game />} />
                <Route path="/trivia/create" element={<CreateTrivia/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
    );
};

export default App;
