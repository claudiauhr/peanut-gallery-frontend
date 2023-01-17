// importing Routes
import { Routes, Route } from "react-router-dom";

// importing pagescomponents
import CreateTrivia from "../pages/CreateTrivia";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Landing = (props) => {
    return (
        <main>
            <Routes>
                <Route path="/games" element={CreateTrivia} />
                <Route path="/login" element={Login} />
                <Route path="/register" element={Register} />
            </Routes>
        </main>
    );
}

export default Landing;