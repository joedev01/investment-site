
import { ArrowUpRight, Clock, ShieldCheck } from "lucide-react";

const colorStyles = {
  emerald: "bg-emerald-50 text-emerald-700",
  blue: "bg-blue-50 text-blue-700",
  purple: "bg-purple-50 text-purple-700",
};

export default function InvestmentCard({
  name,
  minimum,
  returns,
  duration,
  risk,
  color,
  description,
}) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-5 flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-100 text-slate-700">
          <ArrowUpRight size={23} />
        </div>

        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colorStyles[color]}`}>
          {risk}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-800">
        {name}
      </h3>

      <p className="mt-2 min-h-10 text-sm leading-5 text-slate-400">
        {description}
      </p>

      <div className="mt-6">
        <p className="text-xs text-slate-400">
          Minimum Investment
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-800">
          {minimum}
        </h2>
      </div>

      <div className="my-6 grid grid-cols-2 gap-3 border-y border-slate-100 py-5">

        <div>
          <p className="mb-2 flex items-center gap-1 text-xs text-slate-400">
            <ShieldCheck size={14} />
            Illustrative Return
          </p>

          <p className="text-sm font-bold text-emerald-600">
            {returns}
          </p>
        </div>

        <div>
          <p className="mb-2 flex items-center gap-1 text-xs text-slate-400">
            <Clock size={14} />
            Duration
          </p>

          <p className="text-sm font-bold text-slate-700">
            {duration}
          </p>
        </div>

      </div>

      <button className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition group-hover:bg-emerald-600">
        View Investment Plan
      </button>

    </div>
  );
}
