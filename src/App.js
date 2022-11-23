import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import { CustomerProvider } from "./contexts/customer";
import SignIn from "./components/SigninPage";
import SignUp from "./components/SignupPage";
import Cart from "./components/CartPage"; 
import CheckOut from "./components/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <CustomerProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />}  />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<CheckOut />}/>
        </Routes>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default App;
