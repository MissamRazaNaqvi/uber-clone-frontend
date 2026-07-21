export default function StepCard({ step }) {
    const Icon = step.icon;

    return (
        <div className="flex flex-col items-center text-center">

            <div className="bg-green-100 p-8 rounded-full mb-8">

                <Icon
                    size={80}
                    className="text-green-600"
                />

            </div>

            <h2 className="text-3xl font-bold mb-4">
                {step.title}
            </h2>

            <p className="text-gray-500 max-w-sm">
                {step.description}
            </p>

        </div>
    );
}