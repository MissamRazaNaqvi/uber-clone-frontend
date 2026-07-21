"use client";

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";

import { registerUser } from "../services/authService.js";

export default function UserRegistration() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {

    try {

      setLoading(true);

      const payload = {

        fullName: {

          firstName: data.firstName,

          lastName: data.lastName

        },

        email: data.email,

        password: data.password

      };

      const response = await registerUser(payload);

      console.log(response.data);

      navigate("/");

    } catch (error) {

      console.log(error.response?.data);

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold">

            Create Account

          </h1>

          <p className="text-gray-500 mt-2">

            Start booking your rides.

          </p>

        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <Input
            label="First Name"
            name="firstName"
            placeholder="John"
            register={register}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            name="lastName"
            placeholder="Doe"
            register={register}
            error={errors.lastName}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="john@gmail.com"
            register={register}
            error={errors.email}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            register={register}
            error={errors.password}
          />

          <Button loading={loading}>

            Create Account

          </Button>

        </form>

        <p className="mt-6 text-center text-sm">

          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-semibold text-black"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );
}