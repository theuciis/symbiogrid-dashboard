import React, { useState } from "react";
import MetricCard from "./components/MetricCard";
import Login from "./components/Login"; // Mengimpor komponen login baru
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State interaktif untuk mengontrol status katup langsung dari frontend
  const [statusKatup, setStatusKatup] = useState("TERBUKA");
  // State untuk memunculkan notifikasi pop-up simulasi
  const [notifikasi, setNotifikasi] = useState(null);

  const [dataTiruan] = useState({
    gas_metana: "08.9",
    daya_listrik: "4.2",
  });

  const [dataGrafik] = useState([
    { jam: "04:00", energi: 2.1, metana: 5.4 },
    { jam: "05:00", energi: 2.8, metana: 6.2 },
    { jam: "06:00", energi: 3.5, metana: 7.1 },
    { jam: "07:00", energi: 4.2, metana: 8.9 },
    { jam: "08:00", energi: 4.0, metana: 8.5 },
    { jam: "09:00", energi: 4.2, metana: 8.9 },
  ]);

  // Fungsi interaktif untuk mengubah status katup gas
  const toggleKatup = () => {
    if (statusKatup === "TERBUKA") {
      setStatusKatup("TERTUTUP");
      tampilkanNotifikasi(
        "⚠️ Peringatan: Katup gas telah ditutup secara manual oleh Admin!",
      );
    } else {
      setStatusKatup("TERBUKA");
      tampilkanNotifikasi(
        "✅ Sukses: Katup gas berhasil dibuka kembali. Aliran metana normal.",
      );
    }
  };

  // Fungsi pembantu untuk memunculkan pop-up selama 4 detik
  const tampilkanNotifikasi = (pesan) => {
    setNotifikasi(pesan);
    setTimeout(() => {
      setNotifikasi(null);
    }, 4000);
  };

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-8 relative">
      {/* POP-UP NOTIFIKASI SIMULASI */}
      {notifikasi && (
        <div className="fixed top-5 right-5 z-50 bg-slate-800 border-l-4 border-emerald-500 text-white px-5 py-4 rounded-xl shadow-2xl flex items-center space-x-3 transition-all duration-300 animate-bounce">
          <span className="text-sm font-medium">{notifikasi}</span>
        </div>
      )}

      {/* Header */}
      <div className="mb-8 border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-emerald-400">
            SymbioGrid Dashboard
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Jalur Pengembangan: frontend-design
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs text-slate-300 font-medium">
              Mode Simulasi Grafik
            </span>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-xs bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1.5 rounded-xl hover:bg-rose-500 hover:text-white transition-colors cursor-pointer"
          >
            Keluar
          </button>
        </div>
      </div>

      {/* Grid Kartu Utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Konsentrasi Gas Metana"
          value={dataTiruan.gas_metana}
          unit="%"
          colorClass="text-amber-400"
          icon={<span>🔥</span>}
        />

        <MetricCard
          title="Daya Listrik Tergenerate"
          value={dataTiruan.daya_listrik}
          unit="MW"
          colorClass="text-emerald-400"
          icon={<span>⚡</span>}
        />

        {/* KARTU KONTROL KATUP INTERAKTIF */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
              Status Katup Otomatis
            </p>
            <div className="mt-3">
              <span
                className={`inline-block px-3 py-1 rounded-xl text-xs font-bold tracking-wide ${
                  statusKatup === "TERBUKA"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-rose-500/20 text-rose-400"
                }`}
              >
                {statusKatup}
              </span>
            </div>
          </div>

          {/* Tombol Sakelar Aksi Manual */}
          <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">
              Kontrol Katup (Manual)
            </span>
            <button
              onClick={toggleKatup}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                statusKatup === "TERBUKA"
                  ? "bg-rose-500 text-white hover:bg-rose-600 shadow-rose-500/10"
                  : "bg-emerald-500 text-slate-900 hover:bg-emerald-600 shadow-emerald-500/10"
              }`}
            >
              {statusKatup === "TERBUKA" ? "Tutup Katup 🛑" : "Buka Katup 🔓"}
            </button>
          </div>
        </div>
      </div>

      {/* Seksi Grafik */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white">
            Grafik Produksi Energi & Metana
          </h3>
          <p className="text-slate-400 text-sm">
            Tren real-time fluktuasi pasokan daya dalam 6 jam terakhir.
          </p>
        </div>

        <div className="h-72 w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={dataGrafik}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorEnergi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="jam" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  borderColor: "#475569",
                  borderRadius: "0.75rem",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Area
                type="monotone"
                dataKey="energi"
                name="Daya Listrik (MW)"
                stroke="#34d399"
                fillOpacity={1}
                fill="url(#colorEnergi)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
