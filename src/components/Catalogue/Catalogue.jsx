import CocktailCard from "./CocktailCard/CocktailCard";

import axios from "axios";
import { useEffect, useState } from "react";

function getRandomCockctail() {
  return axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.data.drinks[0])
    .catch((error) => {
      console.error("Error making AJAX request:", error);
      throw error;
    });
}

export default function Catalogue() {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    getRandomCockctail()    
      .then((cocktail) => setCocktail(cocktail))
      .catch((error) => {
        console.error("Error making AJAX request:", error);
        throw error;
      });
  }, []);

  console.log(cocktail);

  return (
    <>
      <div className="card">    
        {cocktail ? (
          <CocktailCard cocktail={cocktail} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
