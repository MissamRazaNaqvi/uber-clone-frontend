export default function Input({
    label,
    type = "text",
    register,
    name,
    validation = {},
    error,
    placeholder
}) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
                className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                    error
                        ? "border-red-500"
                        : "border-gray-300 focus:border-black"
                }`}
            />

            {error && (
                <p className="text-sm text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    );
}