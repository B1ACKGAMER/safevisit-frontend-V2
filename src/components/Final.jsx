import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Final() {
    const navigate = useNavigate();

    return (
        <div className="container fade-in">
            <h2>✅ Gracias por cumplir con las medidas de seguridad</h2>
            <p>Tu colaboración protege al paciente, al personal y a ti mismo.</p>
            <button onClick={() => navigate("/")} className="btn">
                Finalizar
            </button>
        </div>
    );
}
