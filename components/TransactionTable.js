
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

export default function TransactionTable({ transactions }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm md:p-6">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Recent Transactions
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Your latest account activities
          </p>
        </div>

        <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">

          <thead>
            <tr className="border-b border-slate-100 text-xs text-slate-400">
              <th className="pb-4 font-medium">Transaction</th>
              <th className="pb-4 font-medium">Category</th>
              <th className="pb-4 font-medium">Date</th>
              <th className="pb-4 font-medium">Amount</th>
              <th className="pb-4 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => {
              const isDeposit = transaction.amount.startsWith("+");

              return (
                <tr
                  key={transaction.id}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50"
                >
                  <td className="py-5 text-sm font-semibold text-slate-700">
                    {transaction.name}
                  </td>

                  <td className="py-5 text-sm text-slate-500">
                    {transaction.category}
                  </td>

                  <td className="py-5 text-sm text-slate-500">
                    {transaction.date}
                  </td>

                  <td className="py-5">
                    <div className={`flex items-center gap-2 text-sm font-semibold ${
                      isDeposit ? "text-emerald-600" : "text-slate-700"
                    }`}>
                      {isDeposit ? (
                        <ArrowDownLeft size={16} />
                      ) : (
                        <ArrowUpRight size={16} />
                      )}

                      {transaction.amount}
                    </div>
                  </td>

                  <td className="py-5">
                    <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      transaction.status === "Completed"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

    </div>
  );
}
