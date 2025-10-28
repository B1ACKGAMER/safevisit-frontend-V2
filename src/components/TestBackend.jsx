// src/components/TestBackend.jsx
import { useEffect, useState } from "react";

export default function TestBackend() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/test") // 🔗 asegúrate que el backend esté corriendo en este puerto
            .then((res) => res.json())
            .then((info) => setData(info.message))
            .catch(() => setError("❌ No se pudo conectar con el backend"));
    }, []);

    return (
        <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
            <h1>🔍 Prueba de conexión con Backend</h1>
            {data ? (
                <p style={{ color: "green", fontSize: "18px" }}>{data}</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <p>Conectando...</p>
            )}
        </div>
    );
}
