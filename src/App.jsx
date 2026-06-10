import MetricCard from "./components/MetricCard";

export default function App() {
  // Sementara angkanya kita tulis manual (hardcoded) dulu sesuai rencana hari ke-2
  const dataSimulasi = {
    daya: "4.8",
    intensitas: "920",
    baterai: "85",
    suhu: "31.2",
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* 1. Bagian Header / Navigasi Atas */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🌊</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              SymbioGrid{" "}
              <span className="text-sm font-medium text-slate-500">
                | Surya Pesisir
              </span>
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              Sistem Online
            </span>
          </div>
        </div>
      </header>

      {/* 2. Konten Utama Dashboard */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Salam Pembuka */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">
            Selamat Datang di Hub Pesisir
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Monitoring real-time energi terbarukan komunitas nelayan.
          </p>
        </div>

        {/* Susunan Grid untuk Card Metrik (Memanggil Template) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Daya Tergenerate"
            value={dataSimulasi.daya}
            unit="kW"
            colorClass="text-emerald-400"
            icon={<span>⚡</span>}
          />

          <MetricCard
            title="Intensitas Cahaya"
            value={dataSimulasi.intensitas}
            unit="Lux"
            colorClass="text-amber-400"
            icon={<span>☀️</span>}
          />

          <MetricCard
            title="Kapasitas Baterai"
            value={dataSimulasi.baterai}
            unit="%"
            colorClass="text-cyan-400"
            icon={<span>🔋</span>}
          />

          <MetricCard
            title="Suhu Panel"
            value={dataSimulasi.suhu}
            unit="°C"
            colorClass="text-rose-400"
            icon={<span>🌡️</span>}
          />
        </div>

        {/* 3. Kolom Kontrol/Override Sementara */}
        <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-2">
            Kontrol Override Sistem
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Putus aliran listrik atau alihkan daya ke cold storage nelayan dalam
            kondisi darurat.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold py-2.5 px-5 rounded-xl transition duration-200 text-sm shadow-lg shadow-emerald-500/20">
            Aktifkan Mode Distribusi
          </button>
        </div>
      </main>
    </div>
  );
}
