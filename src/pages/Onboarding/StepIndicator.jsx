    export default function StepIndicator({ currentStep, totalSteps }) {
    return (
        <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className={`h-2 rounded-full transition-all duration-300
                    ${ index === currentStep ? "w-8 bg-black" : "w-2 bg-gray-400"}`}
                />
            ))}
        </div>
    );
}