import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import CreateTrivia from "./pages/CreateTrivia";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
        <div className="App">
            <h1>The Peanut Gallery</h1>
            <Routes>
                <Route path="/games" element={<CreateTrivia/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
                <Landing message='Enter' />
        </div>
    );
}

export default App;
