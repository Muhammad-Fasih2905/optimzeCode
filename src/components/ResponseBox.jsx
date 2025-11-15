const ResponseBox = ({ type, children }) => {
    const styles = {
        success: "bg-green-50 border-green-600 text-green-800",
        harmful: "bg-red-50 border-red-600 text-red-800",
        cultural: "bg-orange-50 border-orange-600 text-orange-800",
    };

    return (
        <div
            className={`mt-6 p-6 border-4 rounded-xl font-semibold whitespace-pre-wrap ${styles[type]}`}
        >
            {children}
        </div>
    );
};

export default ResponseBox;