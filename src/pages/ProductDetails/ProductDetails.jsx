import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductDetails.scss';

const ProductDetails = () => {
  // Hier ist die ID
  const { id } = useParams();
  const [drinkData, setDrinkData] = useState(null);

  useEffect(() => {
    // Fetch-Anfrage an die CocktailDB-API
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        // Überprüfen, ob die Anfrage erfolgreich war (Statuscode 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Die Antwort in JSON konvertieren
        return response.json();
      })
      .then(data => {
        // Hier kannst du mit den Daten arbeiten, die du von der API erhalten hast
        setDrinkData(data.drinks[0]); // Annahme: Die API gibt ein Array mit Drinks zurück
        console.log(data);
      })
      .catch(error => {
        // Hier kannst du Fehler handhaben, falls die Anfrage fehlschlägt
        console.error('Fetch error:', error);
      });
  }, [id]);

  return (
    <article className='pr-details'>
      {drinkData ? (
        <div>
          <h3>{drinkData.strDrink}</h3>
          <img src={drinkData.strDrinkThumb} alt={drinkData.strDrink} />
          <Link to="/">
            <button>Back</button> 
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <section>
        <p>Ingredients</p>
        <ul>
          {drinkData &&
            Array.from({ length: 15 }).map((_, index) => {
              // Hier werden die Zutaten und Maße aus dem DrinkData angezeigt
              const ingredient = drinkData[`strIngredient${index + 1}`];
              const measure = drinkData[`strMeasure${index + 1}`];
              return ingredient ? (
                <li key={index}>
                  <span>{measure}</span> {ingredient}
                </li>
              ) : null;
            })}
        </ul>
        <p>{drinkData && drinkData.strInstructionsDE}</p>
      </section>
    </article>
  );
}

export default ProductDetails;
