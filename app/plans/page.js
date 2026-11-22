
"use client";

import { useState } from "react";

import {
  CheckCircle,
  ShieldCheck,
  Clock,
  TrendingUp,
  ArrowRight,
  Star,
  Info,
  X,
} from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Starter Plan",
    description: "A simple starting point for exploring investments.",
    minimum: 10000,
    maximum: 50000,
    duration: "30 Days",
    returnRate: "5%",
    risk: "Low Risk",
    popular: false,
    color: "border-blue-200",
    features: [
      "Investment tracking",
      "Portfolio overview",
      "Transaction history",
      "Email support",
    ],
  },
  {
    id: 2,
    name: "Premium Plan",
    description: "A flexible option for experienced investors.",
    minimum: 50000,
    maximum: 200000,
    duration: "60 Days",
    returnRate: "10%",
    risk: "Medium Risk",
    popular: true,
    color: "border-green-500",
    features: [
      "Everything in Starter",
      "Detailed investment reports",
      "Priority customer support",
      "Portfolio monitoring",
    ],
  },
  {
    id: 3,
    name: "Professional Plan",
    description: "A higher-value investment option.",
    minimum: 200000,
    maximum: 1000000,
    duration: "90 Days",
    returnRate: "15%",
    risk: "High Risk",
    popular: false,
    color: "border-purple-200",
    features: [
      "Everything in Premium",
      "Advanced portfolio reports",
      "Dedicated support",
      "Detailed performance tracking",
    ],
  },
];

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Investment Plans
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Explore our investment options and compare their features.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            <ShieldCheck size={20} />
            Investment information
          </div>

        </div>

        {/* Information Banner */}
        <div className="mt-8 flex gap-4 rounded-xl border border-blue-100 bg-blue-50 p-5">

          <Info className="shrink-0 text-blue-600" size={22} />

          <div>
            <h3 className="font-semibold text-blue-900">
              Choose your investment carefully
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-800">
              Review the investment amount, duration and risk level before
              making a decision. Returns are not guaranteed and you may
              lose some or all of your invested capital.
            </p>
          </div>

        </div>

        {/* Plan Cards */}
        <div className="mt-10 grid gap-7 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 ${plan.color} bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-green-600 px-5 py-2 text-xs font-bold text-white shadow-lg">
                  <Star size={14} />
                  MOST POPULAR
                </div>
              )}

              {/* Plan Heading */}
              <div className="mt-3">

                <h2 className="text-xl font-bold text-gray-900">
                  {plan.name}
                </h2>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
                  {plan.description}
                </p>

              </div>

              {/* Return */}
              <div className="mt-7 rounded-xl bg-gray-50 p-5">

                <p className="text-sm text-gray-500">
                  Illustrative return
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <h3 className="text-4xl font-bold text-gray-900">
                    {plan.returnRate}
                  </h3>

                  <TrendingUp className="text-green-600" size={23} />
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Example rate only, not a guaranteed return.
                </p>

              </div>

              {/* Plan Details */}
              <div className="mt-6 space-y-4">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Minimum amount
                  </span>

                  <strong className="text-gray-900">
                    {formatCurrency(plan.minimum)}
                  </strong>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Maximum amount
                  </span>

                  <strong className="text-gray-900">
                    {formatCurrency(plan.maximum)}
                  </strong>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2 text-gray-500">
                    <Clock size={16} />
                    Duration
                  </span>

                  <strong className="text-gray-900">
                    {plan.duration}
                  </strong>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Risk level
                  </span>

                  <strong className="text-gray-900">
                    {plan.risk}
                  </strong>
                </div>

              </div>

              {/* Features */}
              <div className="mt-7 border-t border-gray-100 pt-6">

                <h3 className="mb-4 font-semibold text-gray-900">
                  Plan Features
                </h3>

                <div className="space-y-3">

                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle
                        size={17}
                        className="shrink-0 text-green-600"
                      />

                      {feature}
                    </div>
                  ))}

                </div>

              </div>

              {/* Selection Button */}
              <button
                onClick={() => setSelectedPlan(plan)}
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                Select Plan
                <ArrowRight size={18} />
              </button>

            </div>

          ))}

        </div>

        {/* Bottom Information */}
        <div className="mt-12 rounded-2xl bg-slate-950 p-7 text-white sm:p-10">

          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div>
              <h2 className="text-2xl font-bold">
                Need help choosing a plan?
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Review the terms, understand the risks and make an
                informed decision before committing your money.
              </p>
            </div>

            <div className="flex items-center gap-4 md:justify-end">
              <ShieldCheck size={42} className="shrink-0 text-green-400" />

              <div>
                <h3 className="font-semibold">
                  Invest responsibly
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Understand the risks before investing.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Plan Selection Modal */}
      {selectedPlan && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-gray-900">
                Selected Plan
              </h2>

              <button
                onClick={() => setSelectedPlan(null)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>

            </div>

            <div className="mt-6 rounded-xl bg-green-50 p-5">

              <p className="text-sm text-green-700">
                Investment package
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {selectedPlan.name}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                Minimum investment:{" "}
                <strong>
                  {formatCurrency(selectedPlan.minimum)}
                </strong>
              </p>

              <p className="mt-2 text-sm text-gray-600">
                Duration:{" "}
                <strong>{selectedPlan.duration}</strong>
              </p>

            </div>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              You have selected this demonstration package. No money
              will be deposited or invested.
            </p>

            <button
              onClick={() => setSelectedPlan(null)}
              className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </main>
  );
}
