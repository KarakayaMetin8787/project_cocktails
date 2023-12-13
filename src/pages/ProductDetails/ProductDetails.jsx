import { Link, useParams } from 'react-router-dom';
import './ProductDetails.scss'

const ProductDetails = () => {
  // hier ist die ID
  const { id } = useParams();

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
      console.log(data);
    })
    .catch(error => {
      // Hier kannst du Fehler handhaben, falls die Anfrage fehlschlägt
      console.error('Fetch error:', error);
    });

  return (
    <article className='pr-details'>
      <div>
        <h3>Drink</h3>
        <img src="https://source.unsplash.com/random" alt="" />
        <Link to="/">
          <button>Back</button> 
        </Link>
      </div>
      <section>
        <p>Ingredients</p>
        <ul>
          <li>1/2 oz Gin</li>
          <li>1/2 oz Vodka</li>
          <li>1/2 oz Whisky</li>
          <li>1/2 oz Lime Juice</li>
          <li>1/2 oz Orange Juice</li>
          <li>1/2 oz Gin</li>
          <li>1/2 oz Gin</li>
          <li>1/2 oz Gin</li>
          <li>1/2 oz Gin</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusamus distinctio iure magni porro eum ipsa commodi sed quo facilis!</p>
      </section>
    </article>
  );
}

export default ProductDetails;
