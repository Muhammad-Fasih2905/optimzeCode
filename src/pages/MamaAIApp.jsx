import React, { useState } from "react";
import MamaAILogo from "../components/MamaAILogo";
import ResponseBox from "../components/ResponseBox";
import SafetyItem from "../components/SafetyItem";
import { AudioBubble } from "../components/AudioBubble";

const MamaAIApp = () => {
    const [input, setInput] = useState("");
    const [responseType, setResponseType] = useState("");
    const [responseText, setResponseText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleCheck = () => {
        if (!input.trim()) return;

        setIsLoading(true);
        setTimeout(() => {
            const lower = input.toLowerCase();

            // Song Lyrics Detection
            const isLyrics =
                lower.includes("song:") ||
                lower.includes("lyrics") ||
                lower.includes("poetry") ||
                lower.includes("shayari");

            if (isLyrics) {
                setResponseType("lyrics");
                setResponseText(
                    "🎵 **Song / Poetry Detected:**\n\n" +
                    input.replace(/(.+)/g, "**$1**") // bold each line
                );
            } else if (lower.includes("kill") || lower.includes("harm")) {
                setResponseType("harmful");
                setResponseText("⚠️ Harmful content detected. Please rewrite safely.");
            } else if (lower.includes("culture") || lower.includes("religion")) {
                setResponseType("cultural");
                setResponseText("⚠️ Cultural-sensitive content flagged.");
            } else {
                setResponseType("success");
                setResponseText("✔ Safe content! Your text passed all checks.");
            }

            setIsLoading(false);
        }, 900);
    };

    return (
        <div className="w-full min-h-screen p-6 bg-[#161b22] text-[#e2e8f0]">

            <MamaAILogo />

            {/* User Input Section */}
            <div className="mt-8 bg-[#1f2937] border-l-4 border-[#06b6d4] p-6 rounded-2xl shadow-md">

                <h2 className="text-teal-300 font-semibold text-2xl">
                    Enter Your Prompt
                </h2>

                <textarea
                    className="w-full mt-4 p-4 bg-[#30363d] text-[#e2e8f0] rounded-xl focus:ring-2 focus:ring-[#06b6d4]"
                    rows={4}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type something here..."
                />

                <button
                    className={`mt-5 px-8 py-3 rounded-xl font-bold transition-all 
                    ${input.trim()
                            ? "bg-[#06b6d4] hover:brightness-110 text-black"
                            : "bg-[#30363d] text-gray-500 cursor-not-allowed"
                        }`}
                    onClick={handleCheck}
                    disabled={!input.trim()}
                >
                    Analyze Prompt
                </button>

                {/* Loading Spinner */}
                {isLoading && (
                    <div className="mt-5 flex justify-center">
                        <div className="w-8 h-8 border-4 border-[#06b6d4] border-t-transparent rounded-full animate-spin" />
                    </div>
                )}
            </div>

            {/* Safety Rules */}
            <div className="mt-10 bg-[#1f2937] border border-[#06b6d4]/40 rounded-xl p-6">
                <h3 className="text-cyan-300 font-bold text-xl mb-4">🔒 Safety Rules</h3>

                <div className="grid gap-4 md:grid-cols-2">
                    <SafetyItem title="No Harmful Content" text="Violence or dangerous actions are filtered." />
                    <SafetyItem title="Cultural Sensitivity" text="Avoid offensive cultural language." />
                    <SafetyItem title="No Illegal Activity" text="Illegal actions & methods are blocked." />
                    <SafetyItem title="Friendly Output" text="Mama AI always stays polite & positive." />
                </div>
            </div>

            {/* Response */}
            {responseType && (
                <div className="mt-10">
                    <ResponseBox type={responseType}>{responseText}</ResponseBox>

                    {/* Example audio bubble */}
                    {responseType === "lyrics" && (
                        <AudioBubble src="/sample.mp3" />
                    )}
                </div>
            )}

            {/* Footer Action Buttons */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4">

                {["Image", "Mic", "Video"].map((btn, index) => (
                    <button
                        key={index}
                        className="backdrop-blur-xl bg-[#30363d]/50 hover:bg-[#06b6d4]/20 p-4 rounded-full shadow-xl transition border border-white/10 active:bg-[#06b6d4]"
                    >
                        <span className="text-[#e2e8f0]">{btn}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MamaAIApp;