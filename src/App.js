// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Aislamiento from "./components/Aislamiento";
import Precauciones from "./components/Precauciones.jsx";
import Recordatorio from "./components/Recordatorio";
import Final from "./components/Final";
import TestBackend from "./components/TestBackend"; // ← para verificar backend
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Welcome />} />

        {/* Prueba de conexión backend */}
        <Route path="/api-test" element={<TestBackend />} />

        {/* Pantallas del sistema */}
        <Route path="/aislamiento" element={<Aislamiento />} />
        <Route path="/precauciones" element={<Precauciones />} />
        <Route path="/recordatorio" element={<Recordatorio />} />
        <Route path="/final" element={<Final />} />

        {/* Ruta adicional para probar QR directamente */}
        <Route path="/qr-test" element={<Aislamiento />} />
      </Routes>
    </Router>
  );
}

export default App;
