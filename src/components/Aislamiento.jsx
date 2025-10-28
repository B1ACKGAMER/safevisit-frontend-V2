import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Aislamiento() {
    const navigate = useNavigate();

    // Tipos de precaución (sin descripciones ni elementos)
    const precauciones = [
        { tipo: "Precaución de contacto", color: "red" },
        { tipo: "Precaución por gotas", color: "yellow" },
        { tipo: "Precauciones aéreas", color: "green" },
        { tipo: "Precaución de aislamiento por vectores", color: "gray" },
        { tipo: "Precaución para pacientes inmunosuprimidos", color: "blue" },
        { tipo: "Precaución por contacto Clostridium difficile", color: "purple" }
    ];

    const handleSelect = (item) => {
        navigate("/precauciones", { state: { tipo: item.tipo } });
    };

    return (
        <div className="container fade-in">
            <h1>🧤 Tipos de Precauciones</h1>
            <div className="precauciones-lista">
                {precauciones.map((item, index) => (
                    <div
                        key={index}
                        className={`precaucion-card ${item.color}`}
                        onClick={() => handleSelect(item)}
                        style={{ cursor: "pointer" }}
                    >
                        <h2>{item.tipo}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

