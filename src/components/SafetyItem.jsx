const SafetyItem = ({ title, text }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-700">
            <h3 className="font-bold text-blue-700 mb-1">{title}</h3>
            <p className="text-gray-600">{text}</p>
        </div>
    );
};

export default SafetyItem;