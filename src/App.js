import Landing from "./components/Landing";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <h1>The Peanut Gallery</h1> jjdjdjdjaodn
            <BrowserRouter>
                <Landing message='Enter' />
                <Header />
            </BrowserRouter>
        </div>
    );
}

export default App;
