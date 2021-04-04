import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import DetailsHeader from '../../components/DetailsHeader';
import InstructionsSection from '../../components/InstructionsSection';
import Loading from '../../components/Loading';
import RecipeButton from '../../components/RecipeButton';
import Recomendations from '../../components/Recomendations';
import { getDrinkDetails } from '../../services/theCockTailDB';
import { FetchFoodsOnMount } from '../../services/theMeadlDB';

// import { Container } from './styles';

function DrinksDetails() {
  const { id } = useParams();
  const [mealData, setMealData] = useState([{}]);
  const [isFetching, setIsFetching] = useState(true);
  const [recomendations, setRecomendations] = useState([{}]);

  useEffect(() => {
    const fetchDetails = async () => {
      const recipe = await getDrinkDetails(id);
      const currentRecomendations = await FetchFoodsOnMount();
      setRecomendations(currentRecomendations);
      setMealData(recipe);
      setIsFetching(false);
    };
    fetchDetails();
  }, [id]);

  const { strDrink, strCategory, strDrinkThumb, strAlcoholic } = mealData[0];
  if (isFetching) return <Loading />;
  return (
    <Container className="m-0 p-0 d-flex justify-content-center flex-column" fluid>
      <Container className="m-0 p-0">
        <DetailsHeader
          title={ strDrink }
          imgSrc={ strDrinkThumb }
          category={ strCategory }
          alcoholic={ strAlcoholic }
        />
      </Container>
      <Container>
        <InstructionsSection fullRecipe={ mealData } />
      </Container>
      <Recomendations recomendations={ recomendations } />
      <RecipeButton />
    </Container>
  );
}

export default DrinksDetails;
