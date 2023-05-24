import GlobalStyle from "./components/styles/globalStyles";
import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./routes/router"
import { BrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {

  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
