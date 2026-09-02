import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { Provider } from 'react-redux'
import {store} from './redux/store'
import { ToastContainer } from 'react-toastify';
import 'swiper/css';
import { QuickViewProvider } from './context/QuickViewContext.jsx';
createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <BrowserRouter>
  <QuickViewProvider>
      <App />
    <ToastContainer />
  </QuickViewProvider>
  </BrowserRouter>
</Provider>
)
