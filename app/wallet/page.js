
"use client";

import { useState } from "react";

import {
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  Plus,
  Clock,
  CheckCircle,
  X,
  CreditCard,
  History,
} from "lucide-react";

// Sample wallet activity
const initialActivities = [
  {
    id: 1,
    title: "Wallet Deposit",
    date: "Nov 20, 2026",
    type: "Deposit",
    amount: 150000,
    status: "Successful",
  },
  {
    id: 2,
    title: "Withdrawal Request",
    date: "Nov 19, 2026",
    type: "Withdrawal",
    amount: 25000,
    status: "Pending",
  },
  {
    id: 3,
    title: "Investment Profit",
    date: "Nov 18, 2026",
    type: "Profit",
    amount: 10000,
    status: "Successful",
  },
];

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function WalletPage() {
  const [balance, setBalance] = useState(850000);
  const [activities, setActivities] = useState(initialActivities);

  const [modalType, setModalType] = useState(null);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  function handleWalletAction(event) {
    event.preventDefault();

    const enteredAmount = Number(amount);

    if (!enteredAmount || enteredAmount <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }

    if (modalType === "withdraw" && enteredAmount > balance) {
      setMessage("Your wallet balance is insufficient.");
      return;
    }

    if (modalType === "deposit") {
      setMessage(
        "Demo only: no real deposit has been made. Your wallet balance was not changed."
      );
      return;
    }

    if (modalType === "withdraw") {
      setMessage(
        "Demo only: no withdrawal has been processed. Your wallet balance was not changed."
      );
    }
  }

  function closeModal() {
    setModalType(null);
    setAmount("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          My Wallet
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your wallet balance and monitor your transactions.
        </p>
      </div>

      {/* Wallet Balance and Actions */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Balance Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 p-6 text-white shadow-lg lg:col-span-2">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 right-28 h-48 w-48 rounded-full bg-white/5"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/15 p-3">
                <Wallet size={25} />
              </div>

              <div>
                <p className="text-sm text-blue-100">
                  Available Wallet Balance
                </p>
                <p className="text-xs text-blue-200">
                  Your InvestPro wallet
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-3xl font-bold sm:text-4xl">
              {formatCurrency(balance)}
            </h2>

            <p className="mt-2 text-sm text-blue-100">
              Sample demonstration balance
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={() => setModalType("deposit")}
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                <Plus size={18} />
                Deposit
              </button>

              <button
                onClick={() => setModalType("withdraw")}
                className="flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <ArrowUpRight size={18} />
                Withdraw
              </button>

            </div>
          </div>
        </div>

        {/* Wallet Information */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <CreditCard size={23} />
            </div>

            <div>
              <h3 className="font-bold text-slate-800">
                Wallet Details
              </h3>
              <p className="text-xs text-slate-500">
                Account information
              </p>
            </div>
          </div>

          <div className="mt-7 space-y-5">
            <div>
              <p className="text-xs text-slate-400">Wallet ID</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                INV-WAL-00125
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Currency</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                Nigerian Naira (NGN)
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Wallet Status</p>
              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                <CheckCircle size={13} />
                Demo Active
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Wallet Statistics */}
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Deposits</p>
              <h3 className="mt-2 text-xl font-bold text-slate-800">
                {formatCurrency(450000)}
              </h3>
            </div>

            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <ArrowDownLeft size={23} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Withdrawals</p>
              <h3 className="mt-2 text-xl font-bold text-slate-800">
                {formatCurrency(75000)}
              </h3>
            </div>

            <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
              <ArrowUpRight size={23} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Profits</p>
              <h3 className="mt-2 text-xl font-bold text-slate-800">
                {formatCurrency(85000)}
              </h3>
            </div>

            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <History size={23} />
            </div>
          </div>
        </div>

      </div>

      {/* Recent Wallet Activity */}
      <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

        <div className="border-b border-slate-100 p-5 sm:p-6">
          <h2 className="text-lg font-bold text-slate-800">
            Recent Wallet Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Review your latest wallet activities.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left">

            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                  Description
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                  Date
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                  Amount
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">

              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-slate-50">

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-xl p-2.5 ${
                        activity.type === "Deposit"
                          ? "bg-blue-100 text-blue-600"
                          : activity.type === "Withdrawal"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-green-100 text-green-600"
                      }`}>
                        {activity.type === "Deposit" ? (
                          <ArrowDownLeft size={18} />
                        ) : activity.type === "Withdrawal" ? (
                          <ArrowUpRight size={18} />
                        ) : (
                          <History size={18} />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {activity.title}
                        </p>
                        <p className="text-xs text-slate-400">
                          {activity.type}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {activity.date}
                  </td>

                  <td className={`px-6 py-4 text-sm font-bold ${
                    activity.type === "Withdrawal"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}>
                    {activity.type === "Withdrawal" ? "-" : "+"}
                    {formatCurrency(activity.amount)}
                  </td>

                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      activity.status === "Successful"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {activity.status}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>

      </section>

      {/* Deposit and Withdrawal Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                {modalType === "deposit" ? "Deposit Funds" : "Withdraw Funds"}
              </h2>

              <button
                onClick={closeModal}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleWalletAction}>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Enter Amount (₦)
              </label>

              <input
                type="number"
                min="1"
                placeholder="e.g. 50000"
                value={amount}
                onChange={(event) => {
                  setAmount(event.target.value);
                  setMessage("");
                }}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />

              {modalType === "withdraw" && (
                <p className="mt-2 text-xs text-slate-500">
                  Available balance: {formatCurrency(balance)}
                </p>
              )}

              {message && (
                <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
                  {message}
                </p>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>

            </form>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Demonstration only. This form does not process actual deposits
              or withdrawals.
            </p>

          </div>
        </div>
      )}

    </main>
  );
}
