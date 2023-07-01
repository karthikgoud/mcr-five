import { useState } from "react";
import styles from "./Filter.module.css";
import { useData } from "../../context/DataContext";

const Filter = () => {
  const { state, dispatch } = useData();

  return (
    <div className={styles.filterCont}>
      <input
        className={styles.textInput}
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "filterName", payload: e.target.value })
        }
      />
      <div className={styles.inputCont}>
        <h3>Filters</h3>
        <div>
          <input type="radio" />
          <label
            htmlFor=""
            onChange={(e) => dispatch({ type: "type", payload: "name" })}
          >
            Name
          </label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">Ingredients</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">Cursine</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
