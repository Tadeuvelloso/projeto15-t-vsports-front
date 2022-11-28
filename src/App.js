import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyle";
import { CustomerProvider } from "./contexts/customer";
import SignIn from "./pages/SigninPage";
import SignUp from "./pages/SignupPage";
import Cart from "./pages/CartPage";
import CheckOut from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <CustomerProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default App;
