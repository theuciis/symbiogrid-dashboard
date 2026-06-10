import React, { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi login berhasil untuk frontend sementara waktu
    if (email && password) {
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
        {/* Logo & Judul */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 text-2xl mb-3 border border-emerald-500/20">
            ⚡
          </div>
          <h2 className="text-2xl font-bold text-white">Selamat Datang</h2>
          <p className="text-sm text-slate-400 mt-1">
            Masuk ke Sistem Monitoring SymbioGrid
          </p>
        </div>

        {/* Form Login */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Alamat Email
            </label>
            <input
              type="email"
              placeholder="admin@symbiogrid.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Kata Sandi
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              required
            />
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            Masuk Sekarang
          </button>
        </form>

        {/* Footer Kecil */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Hak Akses Terbatas untuk Tim Integrasi & Operator Proyek.
        </p>
      </div>
    </div>
  );
}
