import { useData } from "../../context/DataContext";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./RecipeList.module.css";

const RecipeList = () => {
  const {
    state: { recipeData },
    textFiltered,
  } = useData();

  return (
    <div className={styles.listCont}>
      {textFiltered?.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
