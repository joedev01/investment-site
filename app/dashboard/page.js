
import Link from "next/link";

import {
  Wallet,
  TrendingUp,
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Download,
  Eye,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Balance",
    amount: "₦850,000.00",
    change: "+12.5%",
    icon: Wallet,
    positive: true,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Total Investment",
    amount: "₦500,000.00",
    change: "+8.2%",
    icon: PiggyBank,
    positive: true,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Total Profit",
    amount: "₦75,000.00",
    change: "+5.4%",
    icon: TrendingUp,
    positive: true,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Total Withdrawals",
    amount: "₦25,000.00",
    change: "-2.1%",
    icon: ArrowDownRight,
    positive: false,
    color: "bg-orange-100 text-orange-600",
  },
];

const chartData = [
  { month: "Jan", height: "35%" },
  { month: "Feb", height: "50%" },
  { month: "Mar", height: "42%" },
  { month: "Apr", height: "65%" },
  { month: "May", height: "55%" },
  { month: "Jun", height: "78%" },
  { month: "Jul", height: "60%" },
  { month: "Aug", height: "85%" },
  { month: "Sep", height: "70%" },
  { month: "Oct", height: "90%" },
  { month: "Nov", height: "75%" },
  { month: "Dec", height: "100%" },
];

const transactions = [
  {
    id: "TRX001",
    name: "Wallet Deposit",
    date: "22 Nov 2026",
    amount: "+₦100,000",
    type: "Deposit",
    status: "Successful",
  },
  {
    id: "TRX002",
    name: "Investment Purchase",
    date: "20 Nov 2026",
    amount: "-₦50,000",
    type: "Investment",
    status: "Successful",
  },
  {
    id: "TRX003",
    name: "Wallet Withdrawal",
    date: "18 Nov 2026",
    amount: "-₦25,000",
    type: "Withdrawal",
    status: "Pending",
  },
];

const investmentPlans = [
  {
    name: "Starter Plan",
    amount: "₦50,000",
    progress: "65%",
    status: "Active",
  },
  {
    name: "Premium Plan",
    amount: "₦100,000",
    progress: "40%",
    status: "Active",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Dashboard Overview
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Here's what's happening with your investments today.
            </p>
          </div>

          <div className="flex gap-3">

            <Link
              href="/wallet"
              className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <Plus size={18} />
              Add Funds
            </Link>

            <Link
              href="/transactions"
              className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:flex"
            >
              <Download size={18} />
              History
            </Link>

          </div>

        </div>

        {/* Statistics Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex items-center justify-between">

                  <p className="text-sm font-medium text-gray-500">
                    {item.title}
                  </p>

                  <div className={`rounded-xl p-3 ${item.color}`}>
                    <Icon size={22} />
                  </div>

                </div>

                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                  {item.amount}
                </h2>

                <div className="mt-3 flex items-center gap-2 text-sm">

                  {item.positive ? (
                    <ArrowUpRight size={17} className="text-green-600" />
                  ) : (
                    <ArrowDownRight size={17} className="text-red-500" />
                  )}

                  <span className={item.positive ? "text-green-600" : "text-red-500"}>
                    {item.change}
                  </span>

                  <span className="text-gray-400">
                    from last month
                  </span>

                </div>

              </div>
            );
          })}

        </div>

        {/* Chart and Balance */}
        <div className="mt-8 grid gap-6 xl:grid-cols-3">

          {/* Investment Chart */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm xl:col-span-2">

            <div className="flex flex-wrap items-center justify-between gap-3">

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Investment Performance
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your illustrative portfolio growth
                </p>
              </div>

              <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 outline-none">
                <option>Last 12 Months</option>
                <option>Last 6 Months</option>
                <option>Last 30 Days</option>
              </select>

            </div>

            <div className="mt-8 flex h-64 items-end gap-2 border-b border-gray-100 pb-2 sm:gap-4">

              {chartData.map((item) => (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                >

                  <div
                    style={{ height: item.height }}
                    className="w-full max-w-10 rounded-t-lg bg-green-500 transition hover:bg-green-700"
                  />

                  <span className="text-xs text-gray-400">
                    {item.month}
                  </span>

                </div>
              ))}

            </div>

            <p className="mt-4 text-xs text-gray-400">
              Demonstration chart using sample data.
            </p>

          </div>

          {/* Wallet Summary */}
          <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-400">
                  Available Wallet Balance
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  ₦850,000
                </h2>
              </div>

              <div className="rounded-xl bg-white/10 p-3">
                <Wallet size={25} />
              </div>

            </div>

            <div className="mt-8 border-t border-white/10 pt-6">

              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Total Deposits</span>
                <span>₦900,000</span>
              </div>

              <div className="mt-5 flex justify-between text-sm">
                <span className="text-slate-400">Total Withdrawals</span>
                <span>₦50,000</span>
              </div>

            </div>

            <Link
              href="/wallet"
              className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              Manage Wallet
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        {/* Investment Plans */}
        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Active Investments
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Overview of your current plans.
              </p>
            </div>

            <Link
              href="/investments"
              className="text-sm font-semibold text-green-600 hover:text-green-700"
            >
              View All
            </Link>

          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {investmentPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-xl border border-gray-100 p-5"
              >

                <div className="flex items-center justify-between">

                  <h3 className="font-bold text-gray-800">
                    {plan.name}
                  </h3>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {plan.status}
                  </span>

                </div>

                <p className="mt-4 text-2xl font-bold text-gray-900">
                  {plan.amount}
                </p>

                <div className="mt-5 flex justify-between text-sm">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-semibold">{plan.progress}</span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">

                  <div
                    style={{ width: plan.progress }}
                    className="h-full rounded-full bg-green-500"
                  />

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Recent Transactions */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

          <div className="flex items-center justify-between p-6">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Recent Transactions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your latest financial activities.
              </p>
            </div>

            <Link
              href="/transactions"
              className="text-sm font-semibold text-green-600 hover:text-green-700"
            >
              View All
            </Link>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px] text-left text-sm">

              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Transaction</th>
                  <th className="px-6 py-4 font-medium">Reference</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Action</th>
                </tr>
              </thead>

              <tbody>

                {transactions.map((item) => (
                  <tr key={item.id} className="border-t border-gray-100">

                    <td className="px-6 py-5 font-semibold text-gray-800">
                      {item.name}
                    </td>

                    <td className="px-6 py-5 text-gray-500">
                      {item.id}
                    </td>

                    <td className="px-6 py-5 text-gray-500">
                      {item.date}
                    </td>

                    <td className={`px-6 py-5 font-semibold ${
                      item.amount.startsWith("+")
                        ? "text-green-600"
                        : "text-gray-800"
                    }`}>
                      {item.amount}
                    </td>

                    <td className="px-6 py-5">

                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.status === "Successful"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {item.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">
                      <button
                        type="button"
                        aria-label={`More options for ${item.id}`}
                        className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
                      >
                        <MoreHorizontal size={20} />
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  );
}
