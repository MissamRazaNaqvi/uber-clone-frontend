import {
    MapPin,
    Car,
    Navigation,
    CreditCard,
    ShieldCheck
} from "lucide-react";

const onboardingData = [
    {
        id: 1,
        title: "Choose Pickup Location",
        description:
            "Enter your pickup location and we'll connect you with nearby drivers.",
        icon: MapPin
    },
    {
        id: 2,
        title: "Select Your Ride",
        description:
            "Choose Car, Bike or Auto based on your budget.",
        icon: Car
    },
    {
        id: 3,
        title: "Enter Destination",
        description:
            "Tell us where you want to go.",
        icon: Navigation
    },
    {
        id: 4,
        title: "Easy Payments",
        description:
            "Pay securely using UPI, Cash or Card.",
        icon: CreditCard
    },
    {
        id: 5,
        title: "Track Your Driver",
        description:
            "Track your captain in real-time until pickup.",
        icon: ShieldCheck
    }
];

export default onboardingData;