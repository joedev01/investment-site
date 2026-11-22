
import {
  Wallet,
  ChartNoAxesCombined,
  TrendingUp,
  Layers,
} from "lucide-react";

const icons = {
  wallet: Wallet,
  chart: ChartNoAxesCombined,
  trending: TrendingUp,
  layers: Layers,
};

export default function StatCard({
  title,
  amount,
  change,
  description,
  icon,
}) {
  const Icon = icons[icon];

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
          <Icon size={21} />
        </div>
      </div>

      <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-800">
        {amount}
      </h2>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
          {change}
        </span>

        <span className="text-xs text-slate-400">
          {description}
        </span>
      </div>

    </div>
  );
}
