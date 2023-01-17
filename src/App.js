import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import CreateTrivia from "./pages/CreateTrivia";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/games" element={<CreateTrivia/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
    );
};

export default App;
