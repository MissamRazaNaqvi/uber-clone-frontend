import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import toast from 'react-hot-toast';


import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";

import { registerUser } from "../services/authService.js";

export default function UserRegistration() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {

      setLoading(true);
      const payload = {
        fullName: {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim()
        },
        email: data.email.trim(),
        password: data.password
      };

      const response = await registerUser(payload);

      // console.log(response, "response from registration");

      if (response) {
        toast.success(response?.data?.message || "Registration successful!");
      }

      navigate("/login");

    } catch (error) {
      console.log(error.response?.data);
      toast.error(
        error.response?.data?.message || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-gray-500 mt-2">Start booking your rides.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >

          <Input label="First Name" name="firstName" placeholder="John" register={register} error={errors.firstName} validation={{
            required: "First Name",
            minLength: {
              value: 3,
              message: "First Name must be at least 3 characters"
            }
          }}
          />

          <Input label="Last Name" name="lastName" placeholder="Doe" register={register} error={errors.lastName} validation={{
            required: "Last Name",
            minLength: {
              value: 3,
              message: "Last Name must be at least 3 characters"
            }
          }}
          />

          <Input label="Email" name="email" type="email" placeholder="john@gmail.com" register={register}
            error={errors.email} validation={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email"
              }
            }}
          />

          <Input label="Password" name="password" type="password" placeholder="********" register={register} error={errors.password} validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          }}
          />

          <Button loading={loading}>Create Account</Button>
        </form>

        <p className="mt-6 text-center text-sm"> Already have an account?
          <Link to="/login" className="ml-2 font-semibold text-black">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}