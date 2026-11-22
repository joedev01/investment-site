
import {
  TrendingUp,
  Wallet,
  CalendarDays,
  Clock,
  CheckCircle,
  ArrowUpRight,
  CircleDollarSign,
} from "lucide-react";

// Sample investment data for our frontend demonstration
const investments = [
  {
    id: 1,
    name: "Starter Plan",
    amount: 30000,
    profit: 1500,
    duration: "30 Days",
    startDate: "Nov 01, 2026",
    maturityDate: "Dec 01, 2026",
    progress: 70,
    status: "Active",
  },
  {
    id: 2,
    name: "Premium Plan",
    amount: 100000,
    profit: 10000,
    duration: "60 Days",
    startDate: "Oct 15, 2026",
    maturityDate: "Dec 14, 2026",
    progress: 85,
    status: "Active",
  },
  {
    id: 3,
    name: "Professional Plan",
    amount: 250000,
    profit: 37500,
    duration: "90 Days",
    startDate: "Aug 01, 2026",
    maturityDate: "Oct 30, 2026",
    progress: 100,
    status: "Completed",
  },
];

// Format numbers as Nigerian Naira
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function InvestmentsPage() {
  const activeInvestments = investments.filter(
    (investment) => investment.status === "Active"
  );

  const completedInvestments = investments.filter(
    (investment) => investment.status === "Completed"
  );

  const totalInvested = investments.reduce(
    (total, investment) => total + investment.amount,
    0
  );

  const totalProfit = investments.reduce(
    (total, investment) => total + investment.profit,
    0
  );

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          My Investments
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Track your investment activities and monitor your progress.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Invested</p>
              <h2 className="mt-2 text-xl font-bold text-slate-800">
                {formatCurrency(totalInvested)}
              </h2>
            </div>

            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Wallet size={23} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Expected Profit</p>
              <h2 className="mt-2 text-xl font-bold text-slate-800">
                {formatCurrency(totalProfit)}
              </h2>
            </div>

            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <TrendingUp size={23} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Active Investments</p>
              <h2 className="mt-2 text-xl font-bold text-slate-800">
                {activeInvestments.length}
              </h2>
            </div>

            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <CircleDollarSign size={23} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Completed</p>
              <h2 className="mt-2 text-xl font-bold text-slate-800">
                {completedInvestments.length}
              </h2>
            </div>

            <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
              <CheckCircle size={23} />
            </div>
          </div>
        </div>

      </div>

      {/* Active Investments */}
      <section className="mb-8">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Active Investments
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Investments that are currently running.
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {activeInvestments.length} Active
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {activeInvestments.map((investment) => (
            <div
              key={investment.id}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {investment.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {investment.duration} investment
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {investment.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500">Invested Amount</p>
                  <p className="mt-1 font-bold text-slate-800">
                    {formatCurrency(investment.amount)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Expected Profit</p>
                  <p className="mt-1 font-bold text-green-600">
                    {formatCurrency(investment.profit)}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-600">
                    Investment Progress
                  </span>

                  <span className="font-bold text-blue-600">
                    {investment.progress}%
                  </span>
                </div>

                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all"
                    style={{ width: `${investment.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Investment Dates */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2">
                  <CalendarDays size={17} className="text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">Start Date</p>
                    <p className="text-xs font-semibold text-slate-700">
                      {investment.startDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={17} className="text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">Maturity Date</p>
                    <p className="text-xs font-semibold text-slate-700">
                      {investment.maturityDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Investments */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-800">
            Completed Investments
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your investments that have reached maturity.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                    Investment Plan
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                    Profit
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                    Maturity Date
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {completedInvestments.map((investment) => (
                  <tr key={investment.id}>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                      {investment.name}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatCurrency(investment.amount)}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-green-600">
                      {formatCurrency(investment.profit)}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {investment.maturityDate}
                    </td>

                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        <CheckCircle size={13} />
                        Completed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Information Notice */}
      <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <ArrowUpRight size={20} className="mt-0.5 text-blue-600" />

          <div>
            <h3 className="font-semibold text-blue-900">
              Investment Information
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-800">
              This page currently displays sample investment information for
              frontend demonstration. The amounts, profits, dates, and progress
              are not connected to real transactions or investment accounts.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
