import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Game from "./pages/Game";
import CreateTrivia from "./pages/CreateTrivia";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";


const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/game" element={<Game />} />
                <Route path="/trivia/create" element={<CreateTrivia/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/about" element={<About />} />
            </Routes>
    );
};

export default App;
