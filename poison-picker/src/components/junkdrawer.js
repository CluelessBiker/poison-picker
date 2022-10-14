recipe && <Recipe recipe={recipe} />

is the same as:

{recipe.strDrinkThumb ? (
    <img
      src={recipe.strDrinkThumb}
      className={styles.backgroundImage}
      alt={recipe.strDrink ?? ""}
    />
  ) : null}