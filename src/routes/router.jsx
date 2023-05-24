import { Route, Routes } from "react-router-dom";

import Calendar from "../pages/calendar";
import Main from "../pages/main";
import Menu from "../pages/menu";
import RecipeRegister from "../pages/recipeRegister";
import Recipes from "../pages/recipes";
import ShoppingList from "../pages/shoppingList";

const Router = () => {

  return (
    <Routes>
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/" element={<Main />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reciperegister" element={<RecipeRegister />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/shoppinglist" element={<ShoppingList />} />
    </Routes>
  );
};

export default Router;