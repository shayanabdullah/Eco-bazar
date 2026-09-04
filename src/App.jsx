
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
import SingleBlog from "./components/Blog/SingleBlog";
import BlogPage from "./components/Blog/BlogPage";
import About from "./pages/About";
import { useScrollToNavigation } from './hooks/useScrollToNavigation';
import MapComponent from "./utils/Map";
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
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />

          <Route
            path="/verifyemail/success"
            element={<VerifyEmail status="success" />}
          />
          <Route
            path="/verifyemail/failed"
            element={<VerifyEmail status="failed" />}
          />
          <Route
            path="/verifyemail/already-verified"
            element={<VerifyEmail status="already-verified" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <QuickView />
    </>
  );
};

export default App;
