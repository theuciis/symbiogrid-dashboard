// Komponen ini menggunakan "props" (title, value, unit, icon) agar bisa dipakai berulang kali dengan isi berbeda
export default function MetricCard({ title, value, unit, icon, colorClass }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl transform hover:scale-105 transition duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
            {title}
          </p>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold text-white tracking-tight">
              {value}
            </span>
            <span className="ml-2 text-sm font-semibold text-slate-400">
              {unit}
            </span>
          </div>
        </div>
        {/* Tempat menaruh ikon dengan warna dinamis */}
        <div className={`p-3 rounded-xl bg-slate-900/50 ${colorClass}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
