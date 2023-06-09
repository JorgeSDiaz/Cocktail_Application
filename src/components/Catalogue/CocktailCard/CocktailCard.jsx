import { Card } from "primereact/card";
import PropTypes from "prop-types";

export default function CocktailCard({ cocktail }) {
  const ingredients = [
    {
      id: 1,
      ingredient: cocktail.strIngredient1,
      measure: cocktail.strMeasure1,
    },
    {
      id: 2,
      ingredient: cocktail.strIngredient2,
      measure: cocktail.strMeasure2,
    },
    {
      id: 3,
      ingredient: cocktail.strIngredient3,
      measure: cocktail.strMeasure3,
    },
    {
      id: 4,
      ingredient: cocktail.strIngredient4,
      measure: cocktail.strMeasure4,
    },
    {
      id: 5,
      ingredient: cocktail.strIngredient5,
      measure: cocktail.strMeasure5,
    },
  ];

  const header = <img alt={cocktail.strDrink} src={cocktail.strDrinkThumb} />;

  return (
    <div className="card flex justify-content-center">
      <Card
        title={cocktail.strDrink}
        subTitle={cocktail.strCategory + " - " + cocktail.strAlcoholic}
        header={header}
        className="md:w-25rem"
      >
        <div className="m-0">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient) =>
              ingredient.ingredient ? (
                <li key={ingredient.id}>
                  {ingredient.ingredient}{" "}
                  {ingredient.measure ? " -" + ingredient.measure : null}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </Card>
    </div>
  );
}

CocktailCard.propTypes = {
  cocktail: PropTypes.object.isRequired,
};
