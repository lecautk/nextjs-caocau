import React from "react";
import Link from "next/link";

export default function PublicHomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100">
      <header className="p-6 shadow-sm bg-white flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Vristo Public</h1>
        <nav className="space-x-4">
          <Link href="/" className="text-slate-700 hover:underline">Home</Link>
          <Link href="/about" className="text-slate-700 hover:underline">About</Link>
          <Link href="/contact" className="text-slate-700 hover:underline">Contact</Link>
          <Link href="/dashboard" className="text-orange-600 font-semibold">Login</Link>
        </nav>
      </header>

      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Welcome to Our Platform</h2>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          This is a public-facing page built on top of the Vristo theme. Use this space to introduce your product,
          service, or idea in a clean and modern layout.
        </p>
        <div className="mt-8">
          <Link href="/get-started" className="bg-orange-600 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-700">
            Get Started
          </Link>
        </div>
      </section>

      <footer className="p-6 text-center text-slate-500 border-t bg-white">
        © {new Date().getFullYear()} Vristo Public. All rights reserved.
      </footer>
    </main>
  );
}
