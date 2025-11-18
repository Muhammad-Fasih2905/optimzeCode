export const AudioBubble = ({ src }) => {
    return (
        <div className="w-full bg-[#30363d] p-4 rounded-2xl mt-3 flex items-center gap-4 shadow-md">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <audio controls className="w-full accent-cyan-400">
                <source src={src} type="audio/mp3" />
            </audio>
        </div>
    );
};