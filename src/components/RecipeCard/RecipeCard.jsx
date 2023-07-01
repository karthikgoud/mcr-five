import { NavLink } from "react-router-dom";
import style from "./RecipeCard.module.css";
import { useData } from "../../context/DataContext";

const RecipeCard = ({ recipe }) => {
  const { dispatch } = useData();
  const { _id, recipeImg, name, cursine, ingredients, instruction } = recipe;

  const handleDelete = (recipe) => {
    dispatch({ type: "DELETE_RECIPE", payload: recipe });
  };

  return (
    <div className={style.cardCont}>
      <div className={style.buttonCont}>
        <button>Edit</button>
        <button onClick={() => handleDelete(recipe)}>Delete</button>
      </div>
      <img src={recipeImg} alt={name} width={200} height={200} />
      <h3>{name}</h3>
      <p>Curisene type: {cursine}</p>
      <p>
        Ingredients: <NavLink to={`/detail/${recipe._id}`}>see recipe</NavLink>
      </p>
      <p>Instruction: see recipe</p>
    </div>
  );
};

export default RecipeCard;
