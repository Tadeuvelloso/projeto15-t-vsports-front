import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import { CustomerProvider } from "./contexts/customer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <CustomerProvider>
        <Routes>
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default App;
