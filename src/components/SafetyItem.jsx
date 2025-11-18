const SafetyItem = ({ title, text }) => {
    return (
        <div className="bg-[#161b22] p-4 rounded-lg shadow border-l-4 border-[#06b6d4]">
            <h3 className="font-bold text-[#06b6d4] mb-1">{title}</h3>
            <p className="text-[#e2e8f0]">{text}</p>
        </div>
    );
};

export default SafetyItem;
