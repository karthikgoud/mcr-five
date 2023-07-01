import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./AddRecipeModal.module.css";
import { useData } from "../../context/DataContext";

const AddRecipeModal = ({ onClose }) => {
  const [newRecipe, setNewRecipe] = useState({
    _id: uuidv4(),
    recipeImg: "",
    name: "",
    cursine: "",
    ingredients: "",
    instruction: "",
  });
  const { dispatch } = useData();

  const handleAddRecipe = (recipe) => {
    dispatch({ type: "ADD_RECIPE", payload: recipe });
    onClose(false);
  };

  console.log(newRecipe);
  return (
    <div className={styles.addModalCont}>
      <label htmlFor="">Add image url</label>
      <input
        type="text"
        value={newRecipe.recipeImg}
        onChange={(e) =>
          setNewRecipe((prev) => ({ ...prev, recipeImg: e.target.value }))
        }
      />

      <label htmlFor="">Recipe Name</label>
      <input
        type="text"
        value={newRecipe.name}
        onChange={(e) =>
          setNewRecipe((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <label htmlFor="">Cursine type</label>
      <input
        type="text"
        value={newRecipe.cursine}
        onChange={(e) =>
          setNewRecipe((prev) => ({ ...prev, cursine: e.target.value }))
        }
      />
      <label htmlFor="">Ingredients:</label>
      <textarea
        type="text"
        rows={5}
        value={newRecipe.ingredients}
        onChange={(e) =>
          setNewRecipe((prev) => ({ ...prev, ingredients: e.target.value }))
        }
      ></textarea>
      <label htmlFor="">Instuction: </label>
      <textarea
        type="text"
        rows={5}
        value={newRecipe.instruction}
        onChange={(e) =>
          setNewRecipe((prev) => ({ ...prev, instruction: e.target.value }))
        }
      ></textarea>
      <div className={styles.buttonCont}>
        <button onClick={() => handleAddRecipe(newRecipe)}>Add Recipe</button>
        <button className={styles.close} onClick={() => onClose(false)}>
          close
        </button>
      </div>
    </div>
  );
};

export default AddRecipeModal;
