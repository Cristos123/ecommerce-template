import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPageLayout from './Layout/LandingPage'
import Product from './Component/Product/Product'
import ContactUs from './Component/ContactUs'
import SignUp from './Pages/Register'
import Login from './Pages/Login'
import ProductList from './Component/Product/ProductList'
import { products } from './data'
import { useParams } from 'react-router-dom'

const App = () => {
  const ProductWithID = ({ match }) => {
    const params = useParams()
    return (
      <ProductList
        product={products.find(
          (product) => product.id === parseInt(params.productId, 10),
        )}
      />
    )
  }

  console.log(products)
  return (
    <LandingPageLayout heading="Banner Here">
      <Routes>
        <Route path="/" element={<Product products={products} />} />
        <Route path=":productId" element={<ProductWithID />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </LandingPageLayout>
  )
}

export default App
