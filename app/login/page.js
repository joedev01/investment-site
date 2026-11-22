
"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage(
      "Demo login only. Authentication is not connected yet."
    );
  }

  return (
    <main className="flex min-h-screen bg-white">

      {/* Left Side - Branding */}
      <section className="relative hidden overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 p-12 text-white lg:flex lg:w-1/2 lg:flex-col lg:justify-between">

        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="rounded-xl bg-white/15 p-3">
            <TrendingUp size={26} />
          </div>

          <span className="text-2xl font-bold tracking-wide">
            InvestPro
          </span>
        </div>

        <div className="relative z-10 max-w-lg">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
            Welcome to InvestPro
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight xl:text-5xl">
            Take control of your financial future.
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Manage your investment activities, monitor your portfolio,
            and keep track of your financial progress from one place.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <div className="rounded-full bg-green-400/20 p-2 text-green-300">
              <ShieldCheck size={22} />
            </div>

            <p className="text-sm text-blue-100">
              A demonstration investment dashboard
            </p>
          </div>
        </div>

        <p className="relative z-10 text-sm text-blue-200">
          © 2026 InvestPro. All rights reserved.
        </p>
      </section>

      {/* Right Side - Login Form */}
      <section className="flex w-full items-center justify-center px-5 py-12 sm:px-10 lg:w-1/2">

        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <div className="rounded-xl bg-blue-600 p-3 text-white">
              <TrendingUp size={24} />
            </div>

            <span className="text-2xl font-bold text-slate-800">
              InvestPro
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              Welcome Back!
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your account details to access your dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-5">
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
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMessage("");
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-5">
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setMessage("");
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 accent-blue-600"
                />

                Remember me
              </label>

              <Link
                href="/login"
                onClick={(event) => {
                  event.preventDefault();
                  setMessage("Password recovery will be added later.");
                }}
                className="text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Forgot password?
              </Link>

            </div>

            {/* Message */}
            {message && (
              <div className="mb-5 rounded-xl border border-blue-100 bg-blue-50 p-3 text-sm text-blue-700">
                {message}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Sign In
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Register Link */}
          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-blue-600 hover:text-blue-800"
            >
              Create Account
            </Link>
          </p>

          {/* Security Notice */}
          <div className="mt-10 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-green-600" />

            <p className="text-xs leading-5 text-slate-500">
              This is a frontend demonstration. Real login security and
              account authentication have not been implemented.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
