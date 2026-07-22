import { useState } from "react";
import { useNavigate } from "react-router-dom";

import onboardingData from "../data/onboarding.js";

import StepCard from "./StepCard";
import StepIndicator from "./StepIndicator";
import NavigationButtons from "./NavigationButtons";

export default function Onboarding() {

    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep === onboardingData.length - 1) {
            navigate("/signup");
            return;
        }
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        if (currentStep === 0) return;
        setCurrentStep((prev) => prev - 1);
    };

    return (

        <div className="max-w-lg w-full mx-auto bg-white rounded-3xl shadow-xl p-10">

            <StepCard step={onboardingData[currentStep]} />
            <StepIndicator currentStep={currentStep} totalSteps={onboardingData.length} />

            <NavigationButtons currentStep={currentStep} totalSteps={onboardingData.length}
                nextStep={nextStep} prevStep={prevStep} />

        </div>
    );
}