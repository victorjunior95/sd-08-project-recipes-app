import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Recommendation = () => {
  const MAX_ITEMS_CAROUSEL = 6;
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchCarousel = async () => {
      if (pathname === 'bebidas') {
        const req = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const { meals } = await req.json();
        const finalResult = meals.filter((_, index) => index < MAX_ITEMS_CAROUSEL);
        return setResult(finalResult);
      }
      const req = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const { drinks } = await req.json();
      const finalResult = drinks.filter((_, index) => index < MAX_ITEMS_CAROUSEL);
      return setResult(finalResult);
    };
    fetchCarousel();
  }, []);

  return (
    <Carousel
      data-testid="recomendation-card"
      showThumbs={ false }
      autoPlay
      className="carousel"
    >
      {result.length > 0 && result.map((item, index) => {
        if (pathname === 'bebidas') {
          return (
            <div
              data-testid={ `${index}-recomendation-card` }
              key={ index }
              className="carousel-item"
            >
              <img src={ item.strMealThumb } alt="drink" />
              <p data-testid={ `${index}-recomendation-title` }>{item.strMeal}</p>
            </div>
          );
        }
        if (pathname === 'comidas') {
          return (
            <div
              data-testid={ `${index}-recomendation-card` }
              key={ index }
              className="carousel-item"
            >
              <img src={ item.strDrinkThumb } alt="drink" />
              <p data-testid={ `${index}-recomendation-title` }>{item.strDrink}</p>
            </div>
          );
        }
        return null;
      })}
    </Carousel>
  );
};

export default Recommendation;
