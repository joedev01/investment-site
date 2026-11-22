
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleRegister(event) {
    event.preventDefault();
    setMessage("");

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("Please complete all the fields.");
      return;
    }

    if (formData.password.length < 8) {
      setMessage("Your password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Your passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      setMessage("Please accept the terms and conditions.");
      return;
    }

    setMessage(
      "Demo registration only. Account creation is not connected yet."
    );
  }

  return (
    <main className="flex min-h-screen bg-white">

      {/* LEFT BRANDING SECTION */}
      <section className="relative hidden w-1/2 overflow-hidden bg-slate-950 px-12 py-12 lg:flex lg:flex-col lg:justify-between">

        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-600 p-3 text-white">
              <TrendingUp size={25} />
            </div>

            <span className="text-2xl font-extrabold text-white">
              Invest<span className="text-blue-400">Pro</span>
            </span>
          </Link>
        </div>

        <div className="relative z-10 max-w-lg">
          <div className="mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            Start your journey
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-white">
            Create your account and explore InvestPro.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Set up your account to explore the dashboard, view investment
            plans and manage your account activities.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Simple account registration",
              "Organized investment dashboard",
              "Convenient wallet overview",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-400" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-sm text-slate-500">
          © 2026 InvestPro. All rights reserved.
        </div>
      </section>

      {/* RIGHT REGISTRATION SECTION */}
      <section className="flex w-full items-center justify-center px-5 py-10 sm:px-10 lg:w-1/2">

        <div className="w-full max-w-md">

          {/* MOBILE LOGO */}
          <Link
            href="/"
            className="mb-10 flex items-center justify-center gap-2 lg:hidden"
          >
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <TrendingUp size={23} />
            </div>

            <span className="text-2xl font-extrabold">
              Invest<span className="text-blue-600">Pro</span>
            </span>
          </Link>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Create account
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              Join InvestPro
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your details below to create your account.
            </p>
          </div>

          <form onSubmit={handleRegister} className="mt-8 space-y-5">

            {/* FULL NAME */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Use at least 8 characters.
              </p>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* TERMS AND CONDITIONS */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(event) => setAcceptTerms(event.target.checked)}
                className="mt-1 h-4 w-4 accent-blue-600"
              />

              <p className="text-sm leading-6 text-slate-500">
                I agree to the terms and conditions and understand that this
                is a demonstration frontend.
              </p>
            </div>

            {/* MESSAGE */}
            {message && (
              <div
                aria-live="polite"
                className="rounded-xl border border-blue-100 bg-blue-50 p-3 text-sm text-blue-700"
              >
                {message}
              </div>
            )}

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Create Account <ArrowRight size={19} />
            </button>

          </form>

          <div className="mt-7 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                Sign In
              </Link>
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck size={16} />
            Your details are not sent to a server in this demo.
          </div>

        </div>
      </section>
    </main>
  );
}
