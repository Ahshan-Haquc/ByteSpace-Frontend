"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {toast} from "@/components/ui/toast";

type FormValues = { fullName: string; email: string; password: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name (at least 2 characters).";
  }
  if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  } else if (!/[A-Za-z]/.test(values.password) || !/\d/.test(values.password)) {
    errors.password = "Use at least one letter and one number.";
  }
  return errors;
}

export function RegisterForm() {
  const router = useRouter();

  const [values, setValues] = React.useState<FormValues>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // clear that field's error as the user types
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.add({
        title: "Check your details",
        description: "Fix the highlighted fields and try again.",
      });
      return;
    }

    try {
      setLoading(true);

      // TODO: point this to your real endpoint
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.email.trim().toLowerCase(),
          password: values.password,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Registration failed. Try again.");
      }

      toast.add({
        title: "Account created",
        description: "Welcome to ByteSpace! Redirecting you now...",
      });

      router.push("/login"); // or "/dashboard"
    } catch (error) {
      toast.add({
        title: "Registration failed",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "h-14 rounded-2xl border-slate-200 bg-white px-6 text-base placeholder:text-slate-400 focus-visible:ring-[#0038E0] sm:h-16 sm:text-lg";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col">
      <p className="text-lg text-[#0038E0] sm:text-xl">Create an Account</p>
      <h1 className="mt-1 text-4xl font-semibold leading-[1.1] text-neutral-900 sm:text-5xl lg:text-6xl">
        Welcome to ByteSpace
      </h1>

      <div className="mt-8 space-y-6 sm:mt-10">
        {/* Full name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-base sm:text-lg">
            Full Name
          </Label>
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Jamie Davis"
            value={values.fullName}
            onChange={handleChange}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            disabled={loading}
            className={inputClass}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-sm text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base sm:text-lg">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={loading}
            className={inputClass}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-base sm:text-lg">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="********"
              value={values.password}
              onChange={handleChange}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              disabled={loading}
              className={`${inputClass} pr-14`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0038E0]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p id="password-error" className="text-sm text-red-600">
              {errors.password}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          type="submit"
          disabled={loading}
          className="h-14 w-full rounded-full bg-[#D4FF1E] px-10 text-lg font-medium text-neutral-900 hover:bg-[#c3ee10] sm:h-16 sm:w-auto"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Creating...
            </>
          ) : (
            "Continue"
          )}
        </Button>
      </div>

      <p className="mt-10 text-center text-base text-neutral-700 sm:mt-16 sm:text-lg">
        Already have an account?{" "}
        <Link href="/login" className="text-[#0038E0] hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}