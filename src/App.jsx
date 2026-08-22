import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import ContactsPage from './pages/ContactsPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CancellationPage from './pages/CancellationPage'
import VipPage from './pages/VipPage'
import RefundPolicyPage from './pages/RefundPolicyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/cancellation-request" element={<CancellationPage />} />
        <Route path="/vip" element={<VipPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
