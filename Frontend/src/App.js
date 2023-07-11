import GlobalStyle from "./styles/globalStyles";
import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./routes/router"
import { BrowserRouter } from "react-router-dom";
import { RecipeApiProvider } from "./contexts/recipeContext";

function App() {

  return (
    <>
      <RecipeApiProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </RecipeApiProvider>
    </>
  )
}

export default App;
