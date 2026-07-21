import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";

import { loginUser } from "../services/authService.js";

export default function UserLogin() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const response = await loginUser(data);

            console.log(response.data);

            navigate("/");

        } catch (error) {
            console.error(error.response?.data);

            alert(
                error.response?.data?.message ||
                "Login failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5 py-10">

            <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">

                {/* Logo */}

                <div className="flex justify-center mb-6">

                    <img
                        src="/logo.png"
                        alt="Uber Clone"
                        className="w-16"
                    />

                </div>

                {/* Heading */}

                <div className="text-center mb-8">

                    <h1 className="text-3xl font-bold">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to continue booking your rides.
                    </p>

                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >

                    <Input
                        label="Email"
                        name="email"
                        register={register}
                        validation={{
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email"
                            }
                        }}
                        error={errors.email}
                        placeholder="Enter your email"
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        register={register}
                        validation={{
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        }}
                        error={errors.password}
                        placeholder="Enter your password"
                    />

                    <Button loading={loading}>
                        Login
                    </Button>

                </form>

                {/* Footer */}

                <p className="mt-6 text-center text-sm text-gray-600">

                    Don't have an account?

                    <Link
                        to="/signup"
                        className="ml-1 font-semibold text-black hover:underline"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>
    );
}