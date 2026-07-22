export default function NavigationButtons({
    currentStep,
    totalSteps,
    nextStep,
    prevStep
}) {

    return (

        <div className="flex justify-between mt-10">

            <button disabled={currentStep === 0} onClick={prevStep}
                className="px-6 py-3 rounded bg-gray-200 disabled:opacity-40"
            >Previous
            </button>

            <button onClick={nextStep} className="px-8 py-3 bg-black rounded text-white"
            >
                {currentStep === totalSteps - 1
                    ? "Get Started"
                    : "Next"}
            </button>

        </div>

    );
}