import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './components/AppShell'
import Home from './pages/Home'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import Solutions from './pages/Solutions'
import Company from './pages/Company'
import CompanyContact from './pages/CompanyContact'
import LegalPrivacy from './pages/LegalPrivacy'
import LegalTerms from './pages/LegalTerms'
import Status from './pages/Status'
import NotFound from './pages/NotFound'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}> 
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/contact" element={<CompanyContact />} />
          <Route path="/legal/privacy" element={<LegalPrivacy />} />
          <Route path="/legal/terms" element={<LegalTerms />} />
          <Route path="/status" element={<Status />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


