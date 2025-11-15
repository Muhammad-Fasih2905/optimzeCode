import React, { useState } from "react";
import MamaAILogo from "../components/MamaAILogo";
import ResponseBox from "../components/ResponseBox";
import SafetyItem from "../components/SafetyItem";

const MamaAIApp = () => {
    const [input, setInput] = useState("");
    const [responseType, setResponseType] = useState("");
    const [responseText, setResponseText] = useState("");

    const handleCheck = () => {
        if (!input.trim()) return;

        const text = input.toLowerCase();

        let flags = {
            harmful: false,
            cultural: false,
            illegal: false,
            nsfw: false,
            toxicity: 0,
        };

       
        const harmfulWords = ["kill", "harm", "attack", "suicide", "stab"];
       
        const cultureWords = ["religion", "culture", "race", "muslim", "christian"];
       
        const illegalWords = ["drugs", "hack", "bomb", "fraud", "scam"];
       
        const nsfwWords = ["sex", "nude", "porn"];

        harmfulWords.forEach((word) => {
            if (text.includes(word)) {
                flags.harmful = true;
                flags.toxicity += 40;
            }
        });

        cultureWords.forEach((word) => {
            if (text.includes(word)) {
                flags.cultural = true;
                flags.toxicity += 20;
            }
        });

        illegalWords.forEach((word) => {
            if (text.includes(word)) {
                flags.illegal = true;
                flags.toxicity += 30;
            }
        });

        nsfwWords.forEach((word) => {
            if (text.includes(word)) {
                flags.nsfw = true;
                flags.toxicity += 30;
            }
        });

        let safetyScore = 100 - flags.toxicity;
        if (safetyScore < 0) safetyScore = 0;

        let result = `📊 Prompt Analysis Report\n\n`;
        result += `• Safety Score: **${safetyScore}/100**\n\n`;

        if (flags.harmful) result += `⚠️ Harmful content detected.\n`;
        if (flags.cultural) result += `⚠️ Culturally sensitive terms found.\n`;
        if (flags.illegal) result += `⚠️ References to illegal activity.\n`;
        if (flags.nsfw) result += `⚠️ NSFW content spotted.\n`;

        if (!flags.harmful && !flags.cultural && !flags.illegal && !flags.nsfw) {
            result += `✔ This prompt appears safe.\n`;
        }

        result += `\n💡 Suggestions:\n`;
        if (flags.harmful) result += `• Avoid violent or harmful language.\n`;
        if (flags.cultural) result += `• Be careful with religious or cultural terms.\n`;
        if (flags.illegal) result += `• Remove illegal action references.\n`;
        if (flags.nsfw) result += `• Avoid sexual or adult content.\n`;
        if (safetyScore === 100) result += `• Perfect! No issues found.\n`;

        if (flags.toxicity >= 60) setResponseType("harmful");
        else if (flags.cultural) setResponseType("cultural");
        else setResponseType("success");

        setResponseText(result);
    };


    return (
        <div className="w-full mx-auto mx-auto p-8 bg-[#f6faff] rounded-2xl shadow-xl text-center">
            <MamaAILogo />

            <h2 className="text-teal-700 font-semibold text-2xl mt-8">
                Enter Your Prompt
            </h2>

            <textarea
                className="w-full mt-4 p-3 border rounded-lg outline-none text-gray-700 focus:ring-2 focus:ring-blue-500"
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something here..."
            />

            <button
                className={`mt-4 px-6 py-3 rounded-lg text-white font-bold transition ${input.trim()
                    ? "bg-blue-700 hover:bg-blue-800"
                    : "bg-blue-300 cursor-not-allowed"
                    }`}
                onClick={handleCheck}
                disabled={!input.trim()}
            >
                Check Safety
            </button>

            <div className="mt-10 bg-blue-50 border-2 border-blue-500 rounded-xl p-6 text-left">
                <h3 className="text-blue-700 font-bold text-xl mb-4">
                    🔒 Safety Rules
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                    <SafetyItem
                        title="No Harmful Content"
                        text="Violence, self-harm or dangerous instructions are filtered automatically."
                    />
                    <SafetyItem
                        title="Cultural Sensitivity"
                        text="Avoid disrespectful or offensive cultural references."
                    />
                    <SafetyItem
                        title="No Illegal Activity"
                        text="Illegal, unethical or unsafe actions are not allowed."
                    />
                    <SafetyItem
                        title="Friendly Output"
                        text="Mama AI always returns polite and positive guidance."
                    />
                </div>
            </div>

            {responseType && (
                <ResponseBox type={responseType}>{responseText}</ResponseBox>
            )}
        </div>
    );
};

export default MamaAIApp;