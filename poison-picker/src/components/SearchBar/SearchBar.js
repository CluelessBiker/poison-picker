import React, { useMemo, useState } from "react";
import styles from "./SearchBar.module.css";
import Select from "react-select";
import { useQuery } from "react-query";
import { getIngredients } from "../../scripts/network-functions";

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState({ label: "", value: "" });

  const { data, error } = useQuery("ingredients", getIngredients);

  // This is what is being called in the "options" in the <select>
  const ingredients = useMemo(() => {
    if (!data) return;
    return data.drinks
      .map((it) => ({
        value: it.strIngredient1,
        label: it.strIngredient1,
      }))
      .sort((a, b) =>
        // sorts this in alphabetical order
        a.label > b.label ? 1 : b.label > a.label ? -1 : 0
      );
  }, [data]);

  const handleSearchClick = () => {
    setSearchTerm(inputValue.value);
  };

  if (error) return <h6>there has been an error, oops</h6>;

  return (
    <div className={styles.main}>
      <div style={{ width: "80%" }}>
        <Select
          value={inputValue}
          name="search"
          options={ingredients}
          onChange={(e) => setInputValue(e ?? { label: "", value: "" })}
        />
      </div>
      <button className={styles.searchButton} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
