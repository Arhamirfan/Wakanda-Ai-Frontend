import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function AppShell() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <AnnouncementBar />
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0B1220]/60 border-b border-[#1F2937]">
        <nav className="container flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-xl bg-gradient-to-br from-primary to-[#8B5CF6]" />
            <span className="text-sm text-[color:var(--text)]/80">Wakanda AI</span>
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm text-[color:var(--text)]/70">
            <NavItem to="/product" label="Product" />
            <NavItem to="/solutions" label="Solutions" />
            <NavItem to="/pricing" label="Pricing" />
            <NavItem to="/resources" label="Resources" />
            <NavItem to="/company" label="Company" />
            <NavItem to="/company/contact" label="Contact" />
          </ul>
          <div className="flex items-center gap-3">
            <Link to="/company/contact" className="px-3 py-2 rounded-xl text-sm bg-gradient-to-b from-primary to-[#4F46E5] shadow hover:-translate-y-0.5 transition">
              Launch Your Agent
            </Link>
          </div>
        </nav>
      </header>

      <main className="container py-8">
        <Outlet />
      </main>

      <footer className="border-t border-[#1F2937] py-10 text-sm text-[color:var(--text)]/70">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Wakanda AI</span>
          <div className="flex items-center gap-4">
            <Link to="/legal/privacy" className="hover:text-[color:var(--text)]">Privacy</Link>
            <Link to="/legal/terms" className="hover:text-[color:var(--text)]">Terms</Link>
            <Link to="/status" className="hover:text-[color:var(--text)]">Status</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="w-full bg-[#0F172A] border-b border-[#1F2937] text-xs text-[color:var(--text)]/70">
      <div className="container py-2 text-center">
        AI Agent · RAG with citations · Upload PDFs and chat with receipts
      </div>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `hover:text-[color:var(--text)] transition ${isActive ? 'text-[color:var(--text)]' : ''}`
        }
      >
        {label}
      </NavLink>
    </li>
  );
}
