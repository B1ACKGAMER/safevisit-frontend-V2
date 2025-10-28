import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

export default function Precauciones() {
    const navigate = useNavigate();
    const location = useLocation();
    const { tipo } = location.state || {};

    // Lista con descripción y elementos según el tipo
    const detalles = {
        "Precaución de contacto": {
            color: "red",
            descripcion:
                "Evita el contacto directo con el paciente. Usa guantes y bata protectora.",
            elementos: [
                "Guantes desechables",
                "Bata de manga larga",
                "Lavado de manos antes y después del contacto",
                "Desechar los elementos en contenedor biológico"
            ]
        },
        "Precaución por gotas": {
            color: "yellow",
            descripcion:
                "Evita la exposición a secreciones respiratorias. Usa mascarilla quirúrgica y protección ocular.",
            elementos: [
                "Mascarilla quirúrgica",
                "Protección ocular o careta",
                "Mantener distancia mínima de 1 metro",
                "Ventilar el área adecuadamente"
            ]
        },
        "Precauciones aéreas": {
            color: "green",
            descripcion:
                "Evita el contacto con partículas suspendidas. Usa respirador N95 y evita corrientes de aire.",
            elementos: [
                "Respirador N95 o superior",
                "Habitación con presión negativa",
                "Puerta cerrada durante la atención",
                "Ventilación constante"
            ]
        },
        "Precaución de aislamiento por vectores": {
            color: "gray",
            descripcion:
                "Evita la exposición a insectos transmisores. Usa repelente y mantén mosquiteros cerrados.",
            elementos: [
                "Mosquitero o red protectora",
                "Uso de repelente",
                "Control ambiental de insectos",
                "Eliminar aguas estancadas"
            ]
        },
        "Precaución para pacientes inmunosuprimidos": {
            color: "blue",
            descripcion:
                "Minimiza el riesgo de infecciones externas. Usa mascarilla, higiene estricta y evita multitudes.",
            elementos: [
                "Mascarilla quirúrgica para visitantes",
                "Higiene de manos estricta",
                "Evitar visitas con síntomas respiratorios",
                "Habitación limpia y bien ventilada"
            ]
        },
        "Precaución por contacto Clostridium difficile": {
            color: "purple",
            descripcion:
                "Lava tus manos con agua y jabón (no alcohol). Usa guantes y bata de manga larga.",
            elementos: [
                "Guantes desechables",
                "Bata de manga larga",
                "Lavado de manos con agua y jabón",
                "Desinfección del entorno con cloro"
            ]
        }
    };

    const data = tipo ? detalles[tipo] : null;

    if (!data) {
        return (
            <div className="container fade-in">
                <h2>No se encontró información de la precaución.</h2>
                <button onClick={() => navigate(-1)} className="btn">
                    Volver
                </button>
            </div>
        );
    }

    return (
        <div className="container fade-in">
            <h2 style={{ color: data.color }}>🧰 {tipo}</h2>
            <p>{data.descripcion}</p>
            <p><strong>Elementos de protección necesarios:</strong></p>

            <div className="icons">
                {data.elementos.map((el, index) => (
                    <div key={index}>
                        <span style={{ fontSize: "2rem" }}>🩺</span>
                        <p>{el}</p>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: "1.5rem" }}>
                <button onClick={() => navigate("/recordatorio")} className="btn">
                    Siguiente
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="btn"
                    style={{ marginLeft: "0.5rem" }}
                >
                    Volver
                </button>
            </div>
        </div>
    );
}

