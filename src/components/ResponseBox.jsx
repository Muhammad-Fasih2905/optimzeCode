const ResponseBox = ({ type, children }) => {
    const styles = {
        success: "bg-[#1f2937] border-[#06b6d4] text-[#e2e8f0]",
        harmful: "bg-[#1f2937] border-red-500 text-red-400",
        cultural: "bg-[#1f2937] border-yellow-500 text-yellow-300",
    };

    return (
        <div
            className={`
                mt-6 p-6 border-l-8 rounded-xl whitespace-pre-wrap
                ${styles[type]}
            `}
            style={{ borderLeftColor: "#06b6d4" }}
        >
            {children}
        </div>
    );
};

export default ResponseBox;
