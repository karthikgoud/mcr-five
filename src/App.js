import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="/home">Home</NavLink>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
