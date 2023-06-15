import GlobalStyle from "./styles/globalStyles";
import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./routes/router"
import { BrowserRouter } from "react-router-dom";

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
