
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Wallet,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock,
  Headphones,
  Menu,
  Coins,
  Users,
  CircleDollarSign,
} from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    amount: "₦10,000",
    maximum: "₦50,000",
    duration: "30 Days",
    returnRate: "5%",
    description: "A simple starting point for exploring the platform.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Premium Plan",
    amount: "₦50,000",
    maximum: "₦200,000",
    duration: "60 Days",
    returnRate: "10%",
    description: "A plan for users looking for a longer investment period.",
    color: "bg-indigo-50 text-indigo-600",
    popular: true,
  },
  {
    name: "Professional Plan",
    amount: "₦200,000",
    maximum: "₦1,000,000",
    duration: "90 Days",
    returnRate: "15%",
    description: "A higher-value plan with a longer investment period.",
    color: "bg-purple-50 text-purple-600",
  },
];

const steps = [
  {
    number: "01",
    title: "Create an account",
    description:
      "Register on the platform and set up your personal account.",
    icon: Users,
  },
  {
    number: "02",
    title: "Choose a plan",
    description:
      "Explore the available plans and review their terms and conditions.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "03",
    title: "Track your activity",
    description:
      "Use your dashboard to monitor your investment activity and transactions.",
    icon: TrendingUp,
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Account security",
    description:
      "A platform experience designed with account security and privacy in mind.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Simple dashboard",
    description:
      "View your account overview, investment activity and transaction history.",
  },
  {
    icon: Wallet,
    title: "Wallet overview",
    description:
      "Keep track of your wallet balance and review your wallet activity.",
  },
  {
    icon: Headphones,
    title: "Customer support",
    description:
      "Get assistance when you have questions about using the platform.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <TrendingUp size={23} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              Invest<span className="text-blue-600">Pro</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm font-semibold text-blue-600">
              Home
            </Link>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600">
              About
            </a>
            <a href="#plans" className="text-sm font-medium text-slate-600 hover:text-blue-600">
              Plans
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600">
              How It Works
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Get Started <ArrowUpRight size={17} />
            </Link>
          </div>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white md:hidden"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Welcome to InvestPro
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Take Control of Your Financial
              <span className="text-blue-400"> Future.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore investment plans, monitor your account and manage your
              financial activities from one simple dashboard.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Create Free Account <ArrowRight size={19} />
              </Link>

              <Link
                href="/login"
                className="rounded-xl border border-slate-600 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Login to Account
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-400" />
                Account-focused experience
              </span>
              <span className="flex items-center gap-2">
                <Wallet size={18} className="text-blue-400" />
                Easy account management
              </span>
            </div>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Account overview</p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    Welcome to InvestPro
                  </h3>
                </div>
                <div className="rounded-xl bg-blue-500/20 p-3 text-blue-300">
                  <ChartNoAxesCombined size={25} />
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-blue-600 p-6">
                <p className="text-sm text-blue-100">Sample account balance</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                  ₦850,000
                </h2>
                <div className="mt-5 flex items-center gap-2 text-sm text-blue-100">
                  <TrendingUp size={17} />
                  Illustrative dashboard preview
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-400/20 text-indigo-300">
                    <Coins size={20} />
                  </div>
                  <p className="text-xs text-slate-300">Sample investments</p>
                  <p className="mt-1 text-xl font-bold text-white">₦500,000</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-green-400/20 text-green-300">
                    <CircleDollarSign size={20} />
                  </div>
                  <p className="text-xs text-slate-300">Sample profit</p>
                  <p className="mt-1 text-xl font-bold text-white">₦75,000</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">Account activity</p>
                  <span className="text-xs text-blue-300">Preview</span>
                </div>
                <div className="mt-5 flex h-24 items-end gap-3">
                  {[35, 55, 42, 75, 58, 90, 70, 100, 78, 95].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-blue-400/80"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-2 text-green-600">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Simple overview</p>
                  <p className="text-xs text-slate-500">Manage your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4 lg:px-8">
          {[
            ["3", "Sample investment plans"],
            ["24/7", "Dashboard access"],
            ["100%", "Digital experience"],
            ["1", "Centralized dashboard"],
          ].map(([number, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-3xl font-extrabold text-blue-600">{number}</h3>
              <p className="mt-2 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
              About InvestPro
            </div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              A simpler way to manage your investment activities.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              InvestPro is designed to give users a convenient place to explore
              investment plans and view their financial activities. Our goal is
              to make the platform experience clear, organized and easy to use.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              From your account overview to your wallet and transaction history,
              you can access the main features from one dashboard.
            </p>
            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800"
            >
              Explore the platform <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-blue-600 p-7 text-white">
              <ShieldCheck size={35} />
              <h3 className="mt-12 text-xl font-bold">Account focused</h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                Important account information in one place.
              </p>
            </div>
            <div className="mt-10 rounded-3xl bg-slate-100 p-7">
              <TrendingUp size={35} className="text-blue-600" />
              <h3 className="mt-12 text-xl font-bold">Clear overview</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                An organized way to view your activities.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-7">
              <Wallet size={35} className="text-blue-600" />
              <h3 className="mt-12 text-xl font-bold">Wallet access</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Review wallet information and activity.
              </p>
            </div>
            <div className="mt-10 rounded-3xl bg-indigo-600 p-7 text-white">
              <Clock size={35} />
              <h3 className="mt-12 text-xl font-bold">Convenience</h3>
              <p className="mt-3 text-sm leading-6 text-indigo-100">
                Access your account from one platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT PLANS */}
      <section id="plans" className="scroll-mt-24 bg-slate-50 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our plans
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Explore our investment plans
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Compare the sample plans available on the InvestPro platform.
              Review all terms and risks before making any investment decision.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular ? "border-blue-500 shadow-blue-100" : "border-slate-200"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white">
                    POPULAR
                  </span>
                )}

                <div className={`inline-flex rounded-xl p-3 ${plan.color}`}>
                  <TrendingUp size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold">{plan.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>

                <div className="mt-7 border-b border-slate-100 pb-6">
                  <p className="text-sm text-slate-500">Illustrative return</p>
                  <h4 className="mt-2 text-4xl font-extrabold text-blue-600">
                    {plan.returnRate}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400">
                    Sample figure only, not a guaranteed return
                  </p>
                </div>

                <div className="space-y-4 py-6 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Minimum amount</span>
                    <strong>{plan.amount}</strong>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Maximum amount</span>
                    <strong>{plan.maximum}</strong>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Duration</span>
                    <strong>{plan.duration}</strong>
                  </div>
                </div>

                <Link
                  href="/register"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-bold transition ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  Get Started <ArrowRight size={17} />
                </Link>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
            The rates and amounts above are demonstration content for this
            frontend project. They are not verified investment products or
            promises of returns. Real investment offerings require proper
            verification, disclosures and applicable regulatory compliance.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Get started in three simple steps
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Here's how a user can navigate the InvestPro platform.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="rounded-3xl border border-slate-200 p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold text-blue-100">
                      {step.number}
                    </span>
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Icon size={26} />
                    </div>
                  </div>
                  <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-950 px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Why InvestPro
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Everything organized in one place.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Explore the tools and features designed for a simple account
              management experience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <div className="inline-flex rounded-xl bg-blue-500/15 p-3 text-blue-400">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-7 py-14 text-center sm:px-14">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to explore InvestPro?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Create an account to explore the platform and see how its dashboard
            and account features work.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Create Your Account <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="scroll-mt-24 bg-slate-950 px-5 pb-8 pt-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-xl bg-blue-600 p-2">
                <TrendingUp size={22} />
              </div>
              <span className="text-2xl font-extrabold">
                Invest<span className="text-blue-400">Pro</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              A modern investment platform frontend designed to make account
              management simple and organized.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <a href="#about" className="hover:text-white">About Us</a>
              <a href="#plans" className="hover:text-white">Investment Plans</a>
              <a href="#how-it-works" className="hover:text-white">How It Works</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Account</h3>
            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
              <Link href="/login" className="hover:text-white">Login</Link>
              <Link href="/register" className="hover:text-white">Register</Link>
              <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
              <Link href="/wallet" className="hover:text-white">Wallet</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Contact information will be added when the platform's official
              support details are available.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-7 text-center text-xs leading-6 text-slate-500">
          <p>© 2026 InvestPro. All rights reserved.</p>
          <p className="mt-2">
            Demo frontend only. No real investments, deposits or withdrawals are processed.
          </p>
        </div>
      </footer>
    </main>
  );
}
