import React from "react";

const MamaAILogo = () => (
    <div className="mb-6 flex flex-col items-center select-none">
        {/* Diamond + Crown with neon cyan glow */}
        <span className="text-6xl leading-none" style={{ color: "#06b6d4", textShadow: "0 6px 18px rgba(6,182,212,0.12)" }}>♦</span>
        <span className="text-6xl -mt-4 leading-none" style={{ color: "#ffc107", filter: "drop-shadow(0 6px 18px rgba(255,193,7,0.08))" }}>👑</span>

        <h1 className="text-2xl sm:text-3xl font-extrabold mt-3" style={{ color: "#e2e8f0" }}>
            Mama AI System
        </h1>

        <p
            className="italic mt-2 pb-3 text-sm sm:text-base border-b"
            style={{ color: "#cbd5e1", borderColor: "#0e6f76" }}
        >
            Safe • Smart • Human-Friendly
        </p>
    </div>
);

export default MamaAILogo;