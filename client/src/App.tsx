import {Toaster} from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
import Products from './pages/products'
import Productpage from './pages/productpage'
import SearchResult from './pages/SearchResults'
import FlashDeals from './pages/FlashDeals'
import Checkout from './pages/Checkout'
import MyOrders from './pages/MyOrders'
import OrderTraking from './pages/OrderTracking'
import Addresses from './pages/Addresses'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminProducts from './pages/admin/AdminProducts'
import AdminProductForm from './pages/admin/AdminProductForm'
import AdminOrders from './pages/admin/AdminOrders'
import AdminDeliveryPartners from './pages/admin/AdminDeliveryPartners'
import DeliveryLayout from './pages/delivery/DeliveryLayout'
import DeliveryLogin from './pages/delivery/DeliveryLogin'
import DeliveryDashboard from './pages/delivery/DeliveryDashboard'

const App = () => {
  return (
    <>
    <Toaster position="top-right" toastOptions={{duration: 300, style: {background: "#1B3022", color: "#fff", borderRadius:"12px", fontSize: "14px"}}}/>

    <Routes> 
      {/* Auth pages - No Navbar/Footer */}
      <Route path='/login' element={<Login />} />
      {/* Main pages - With Navbar/Footer */}
      <Route path='/' element={<AppLayout/>}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Productpage />} />
        <Route path="Search" element={<SearchResult />} />
        <Route path="deals" element={<FlashDeals />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="checkout" element={<Checkout/>} />
          <Route path="orders" element={<MyOrders/>} />
          <Route path="orders/:id" element={<OrderTraking/>} />
          <Route path="addresses" element={<Addresses/>} />
        </Route>
      </Route>
      {/* Admin pages */}
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<AdminDashboard/>}/>
        <Route path='products' element={<AdminProducts/>}/>
        <Route path='products/new' element={<AdminProductForm/>}/>
        <Route path='products/:id/edit' element={<AdminProductForm/>}/>
        <Route path='orders' element={<AdminOrders/>}/>
        <Route path='delivery-partners' element={<AdminDeliveryPartners/>}/>
      </Route>
      {/* Delivery Partner pages */}
      <Route path='/delivery/login' element={<DeliveryLogin/>}/>
      <Route path='/delivery' element={<DeliveryLayout/>}>
        <Route index element={<DeliveryDashboard/>}/>
      </Route>


    </Routes>
    </>
  )
}

export default App