import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center space-y-3">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-sm text-[color:var(--text)]/70">The page you are looking for doesn't exist.</p>
      <Link to="/" className="text-sm underline">Go home</Link>
    </div>
  );
}
