import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Aislamiento from "./components/Aislamiento";
import Precauciones from "./components/Precauciones";
import Recordatorio from "./components/Recordatorio";
import Final from "./components/Final";
import "./App.css";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/aislamiento" element={<Aislamiento />} />
                <Route path="/precauciones" element={<Precauciones />} />
                <Route path="/recordatorio" element={<Recordatorio />} />
                <Route path="/final" element={<Final />} />
            </Routes>
        </Router>
    );
}

export default App;
