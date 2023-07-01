import { useParams } from "react-router-dom";
import styles from "./RecipeDetails.module.css";
import { useData } from "../../context/DataContext";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const {
    state: { recipeData },
  } = useData();

  const filteredRecipe = recipeData.find((recipe) => recipe._id == recipeId);
  const { recipeImg, name, cursine, ingredients, instruction } = filteredRecipe;

  return (
    <div className={styles.detailCont}>
      <div>
        <img src={recipeImg} alt={name} width={200} height="100%" />
      </div>
      <div className={styles.recipeInfo}>
        <h1>{name}</h1>
        <h3>Cursine : {cursine}</h3>
        <p>Ingredients : {ingredients}</p>
        <p>Instruction : {instruction}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
