import { useState } from "react";
import AddRecipeModal from "../../components/AddRecipeModal/AddRecipeModal";
import Filter from "../../components/Filter/Filter";
import RecipeList from "../../components/RecipeList/RecipeList";
import styles from "./Home.module.css";

const Home = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className={styles.homeCont}>
      <Filter />
      <div>
        <h1>All Recipes</h1>
        <button onClick={() => setShowAddModal(true)}>Add Recipe</button>
      </div>
      <RecipeList />

      {showAddModal && (
        <div className={styles.wrapper}>
          <AddRecipeModal onClose={setShowAddModal} />
        </div>
      )}
    </div>
  );
};

export default Home;
