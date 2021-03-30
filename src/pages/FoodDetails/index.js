import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../../components/Loading';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import HeaderFoodDrinks from '../../components/HeaderFoodDrinks';

function FoodDetails(props) {
  const [iddMeals, setIddMeals] = useState({ meals: [] });
  const [loading, setLoading] = useState(true);

  const { match: { params: receitaID } } = props;
  const numberMeals = Object.values(receitaID);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Number(numberMeals)}`)
      .then((response) => response.json())
      .then((data) => setIddMeals(data));
    setLoading(false);
  }, []);

  const onfilter = (item1) => {
    item1.filter((item2) => Object.keys(item2));
  };
  return (
    //
    <Container>

      {loading ? <Loading /> : iddMeals.meals.map((item) => (
        <div key={ item.idMeal }>
          <HeaderFoodDrinks
            item={ item }
            shareIcon={ shareIcon }
            whiteHeartIcon={ whiteHeartIcon }
          />
          { item.strIngredient1}
        </div>
      ))}

    </Container>
  );
}

export default FoodDetails;

// const add = {
//   a: {value:1},
//   b: {value:2},
//   c: {value:3}
// }

// const total = Object.values(add).reduce((t, {value}) => t + value, 0)

// console.log(total) // 6

// const array = {
//   "strIngredient1": "Toor dal",
// "strIngredient2": "Water",
// "strIngredient3": "Salt",
// "strIngredient4": "Turmeric",
// "strIngredient5": "Ghee",
// "strIngredient6": "Chopped tomatoes",
// "strIngredient7": "Cumin seeds",
// "strIngredient8": "Mustard Seeds",
// "strIngredient9": "Bay Leaf",
// "strIngredient10": "Green Chili",
// "strIngredient11": "Ginger",
// "strIngredient12": "Cilantro",
// "strIngredient13": "Red Pepper",
// "strIngredient14": "Salt",
// "strIngredient15": "Sugar",
// "strIngredient16": "Garam Masala",
// }
