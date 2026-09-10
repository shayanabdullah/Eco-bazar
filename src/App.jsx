
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainLayouts from "./components/layouts/MainLayouts";
import PageNotFound from "./pages/PageNotFound";
import VerifyEmail from "./pages/VerifyEmail";
import FAQS from "./pages/FAQS";
import AllCatagories from "./pages/AllCatagories";
import AllPopularProducts from "./pages/AllPopularProducts";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import QuickView from "./components/common/QuickView";
import About from "./pages/About";
import { useScrollToNavigation } from './hooks/useScrollToNavigation';
import Contact from "./pages/Contact";
import PopUp from "./components/PopUp";
import BlogPage from './pages/BlogPage';
import SingleBlog from "./pages/SingleBlog";
import CartSidebar from './components/cart/CartSidebar';

const App = () => {
  useScrollToNavigation();
  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="products/:slug" element={<ProductDetails />} />
          <Route path="account/register" element={<Register />} />
          <Route path="account/login" element={<Login />} />
          <Route path="help/faq" element={<FAQS />} />
          <Route path="all-catagories" element={<AllCatagories />} />
          <Route
            path="/all-popular-products"
            element={<AllPopularProducts />}
          />
          <Route path="/contact" element={<Contact />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />

          <Route
            path="/verify-email/success/:token"
            element={<VerifyEmail status="success" />}
          />
          <Route
            path="/verify-email/failed"
            element={<VerifyEmail status="failed" />}
          />
          <Route
            path="/verify-email/already-verified"
            element={<VerifyEmail status="already-verified" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <QuickView />
      <CartSidebar 
      />
      <PopUp/>
    </>
  );
};

export default App;
