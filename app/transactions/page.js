
"use client";

import { useState } from "react";

import {
  ArrowDownLeft,
  ArrowUpRight,
  TrendingUp,
  Search,
  Download,
  ArrowLeftRight,
  CalendarDays,
  Filter,
} from "lucide-react";

// Sample transaction data
const transactions = [
  {
    id: "TRX-10001",
    type: "Deposit",
    description: "Wallet Funding",
    date: "Nov 20, 2026",
    amount: 150000,
    status: "Successful",
  },
  {
    id: "TRX-10002",
    type: "Withdrawal",
    description: "Bank Withdrawal",
    date: "Nov 19, 2026",
    amount: 25000,
    status: "Pending",
  },
  {
    id: "TRX-10003",
    type: "Profit",
    description: "Premium Plan Profit",
    date: "Nov 18, 2026",
    amount: 10000,
    status: "Successful",
  },
  {
    id: "TRX-10004",
    type: "Deposit",
    description: "Wallet Funding",
    date: "Nov 16, 2026",
    amount: 200000,
    status: "Successful",
  },
  {
    id: "TRX-10005",
    type: "Withdrawal",
    description: "Bank Withdrawal",
    date: "Nov 14, 2026",
    amount: 50000,
    status: "Failed",
  },
  {
    id: "TRX-10006",
    type: "Profit",
    description: "Starter Plan Profit",
    date: "Nov 12, 2026",
    amount: 1500,
    status: "Successful",
  },
  {
    id: "TRX-10007",
    type: "Deposit",
    description: "Wallet Funding",
    date: "Nov 10, 2026",
    amount: 100000,
    status: "Successful",
  },
];

// Format amounts as Nigerian Naira
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter transactions by category and search text
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesFilter =
      selectedFilter === "All" || transaction.type === selectedFilter;

    const matchesSearch =
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const totalDeposits = transactions
    .filter((transaction) => transaction.type === "Deposit")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalWithdrawals = transactions
    .filter(
      (transaction) =>
        transaction.type === "Withdrawal" &&
        transaction.status === "Successful"
    )
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalProfits = transactions
    .filter((transaction) => transaction.type === "Profit")
    .reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          Transactions
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          View and manage your financial transaction history.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Deposits</p>
              <h2 className="mt-2 text-xl font-bold text-slate-800">
                {formatCurrency(totalDeposits)}
              </h2>
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
              <h2 className="mt-2 text-xl font-bold text-slate-800">
                {formatCurrency(totalWithdrawals)}
              </h2>
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
              <h2 className="mt-2 text-xl font-bold text-slate-800">
                {formatCurrency(totalProfits)}
              </h2>
            </div>

            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <TrendingUp size={23} />
            </div>
          </div>
        </div>

      </div>

      {/* Transaction History */}
      <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

        {/* Table Header */}
        <div className="border-b border-slate-100 p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Transaction History
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                A record of your recent transactions.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              {/* Search */}
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 sm:w-64"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  value={selectedFilter}
                  onChange={(event) => setSelectedFilter(event.target.value)}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-8 text-sm outline-none focus:border-blue-500 sm:w-40"
                >
                  <option value="All">All Transactions</option>
                  <option value="Deposit">Deposits</option>
                  <option value="Withdrawal">Withdrawals</option>
                  <option value="Profit">Profits</option>
                </select>
              </div>

            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">

            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                  Transaction
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                  Transaction ID
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

              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="transition hover:bg-slate-50"
                >

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">

                      <div
                        className={`rounded-xl p-2.5 ${
                          transaction.type === "Deposit"
                            ? "bg-blue-100 text-blue-600"
                            : transaction.type === "Withdrawal"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {transaction.type === "Deposit" ? (
                          <ArrowDownLeft size={19} />
                        ) : transaction.type === "Withdrawal" ? (
                          <ArrowUpRight size={19} />
                        ) : (
                          <TrendingUp size={19} />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {transaction.description}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {transaction.type}
                        </p>
                      </div>

                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {transaction.id}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays size={15} />
                      {transaction.date}
                    </div>
                  </td>

                  <td
                    className={`px-6 py-4 text-sm font-bold ${
                      transaction.type === "Withdrawal"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {transaction.type === "Withdrawal" ? "-" : "+"}
                    {formatCurrency(transaction.amount)}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        transaction.status === "Successful"
                          ? "bg-green-100 text-green-700"
                          : transaction.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>

                </tr>
              ))}

              {filteredTransactions.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-12 text-center text-sm text-slate-500"
                  >
                    No transactions found. Try another search or filter.
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="border-t border-slate-100 px-6 py-4">
          <p className="text-sm text-slate-500">
            Showing {filteredTransactions.length} of {transactions.length} transactions
          </p>
        </div>

      </section>

      {/* Information Notice */}
      <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <ArrowLeftRight size={20} className="mt-0.5 text-blue-600" />

          <div>
            <h3 className="font-semibold text-blue-900">
              Transaction Information
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-800">
              These are sample transactions for frontend demonstration.
              They are not connected to a real bank, wallet, or payment system.
            </p>
          </div>
        </div>
      </div>

    </main>
  );
}
