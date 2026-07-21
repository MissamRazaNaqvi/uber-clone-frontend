export default function Button({
    children,
    loading
}) {
    return (
        <button
            disabled={loading}
            className="w-full rounded-lg bg-black py-3 text-white font-semibold hover:bg-gray-900 transition disabled:opacity-60"
        >
            {loading ? "Creating..." : children}
        </button>
    );
}