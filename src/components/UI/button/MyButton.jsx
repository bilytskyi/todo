export default function MyButton({ children, ...props }) {
    return (
        <button
            {...props}
            className="bg-gray-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
            {children}
        </button>
    );
}
