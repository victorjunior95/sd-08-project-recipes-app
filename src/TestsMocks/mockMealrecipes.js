/* eslint-disable max-lines */
/* eslint-disable max-len */

export const recipes = {
  recipes: [],
  categories: {},
  ingredients: [],
};

export const user = {
  email: 'email@mail.com',
  password: '1234567',
};

export const initialSearch = {
  inputValue: '',
  inputType: '',
  areaChoosen: '',
  drinkFilter: '',
  mealFilter: '',
  ingredientFilter: '',
  areas: [{ strArea: 'All' }],
};

export const recomendation = {
  recomendation: [],
};

export const favoriteRecipes = {
  favoriteRecipes: [],
};

export const fetchInitialMeals = [{
  idMeal: '52977',
  strMeal: 'Corba',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
},
{
  idMeal: '52978',
  strMeal: 'Kumpir',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg',
},
{
  idMeal: '53026',
  strMeal: 'Tamiya',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg',
},
{
  idMeal: '52785',
  strMeal: 'Dal fry',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
},
{
  idMeal: '52804',
  strMeal: 'Poutine',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
},
{
  idMeal: '52844',
  strMeal: 'Lasagne',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
},
{
  idMeal: '52929',
  strMeal: 'Timbits',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg',
},
{
  idMeal: '52948',
  strMeal: 'Wontons',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/1525876468.jpg',
},
{
  idMeal: '52971',
  strMeal: 'Kafteji',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg',
},
{
  idMeal: '53013',
  strMeal: 'Big Mac',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg',
},
{
  idMeal: '53027',
  strMeal: 'Koshari',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg',
},
{
  idMeal: '52769',
  strMeal: 'Kapsalon',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg',
}];

export const fetchInitialCategoryMeal = {
  meals: [
    {
      strCategory: 'beef',
    },
    {
      strCategory: 'breakfast',
    },
    {
      strCategory: 'chicken',
    },
    {
      strCategory: 'dessert',
    },
    {
      strCategory: 'goat',
    },
  ],
};

export const fetchChickenCategoryRecipes = [
  {
    strMeal: 'Brown Stew Chicken',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
    idMeal: '52940',
  },
  {
    strMeal: 'Chick-Fil-A Sandwich',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg',
    idMeal: '53016',
  },
  {
    strMeal: 'Chicken & mushroom Hotpot',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg',
    idMeal: '52846',
  },
  {
    strMeal: 'Chicken Alfredo Primavera',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
    idMeal: '52796',
  },
  {
    strMeal: 'Chicken Basquaise',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg',
    idMeal: '52934',
  },
  {
    strMeal: 'Chicken Congee',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
    idMeal: '52956',
  },
  {
    strMeal: 'Chicken Couscous',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg',
    idMeal: '52850',
  },
  {
    strMeal: 'Chicken Enchilada Casserole',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg',
    idMeal: '52765',
  },
  {
    strMeal: 'Chicken Fajita Mac and Cheese',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg',
    idMeal: '52818',
  },
  {
    strMeal: 'Chicken Ham and Leek Pie',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg',
    idMeal: '52875',
  },
  {
    strMeal: 'Chicken Handi',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
    idMeal: '52795',
  },
  {
    strMeal: 'Chicken Karaage',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg',
    idMeal: '52831',
  },
];

export const searchByIngredient = {
  inputValue: '',
  inputType: '',
  areaChoosen: '',
  drinkFilter: '',
  mealFilter: '',
  ingredientFilter: 'Salmon',
  areas: [{ strArea: 'All' }],
};

export const fetchIngredientsMealList = [
  {
    idIngredient: '1',
    strIngredient: 'Chicken',
    strType: null,
  },
  {
    idIngredient: '2',
    strIngredient: 'Salmon',
    strType: null,
  },
  {
    idIngredient: '3',
    strIngredient: 'Beef',
    strType: null,
  },
  {
    idIngredient: '4',
    strIngredient: 'Pork',
    strType: null,
  },
  {
    idIngredient: '5',
    strIngredient: 'Avocado',
    strType: null,
  },
  {
    idIngredient: '9',
    strIngredient: 'Apple Cider Vinegar',
    strType: null,
  },
  {
    idIngredient: '10',
    strIngredient: 'Asparagus',
    strType: null,
  },
  {
    idIngredient: '11',
    strIngredient: 'Aubergine',
    strType: null,
  },
  {
    idIngredient: '13',
    strIngredient: 'Baby Plum Tomatoes',
    strType: null,
  },
  {
    idIngredient: '14',
    strIngredient: 'Bacon',
    strType: null,
  },
  {
    idIngredient: '15',
    strIngredient: 'Baking Powder',
    strType: null,
  },
  {
    idIngredient: '16',
    strIngredient: 'Balsamic Vinegar',
    strType: null,
  },
];

export const fetchSalmonIngredientRecipes = [
  {
    strMeal: 'Baked salmon with fennel & tomatoes',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
    idMeal: '52959',
  },
  {
    strMeal: 'Honey Teriyaki Salmon',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
    idMeal: '52773',
  },
  {
    strMeal: 'Salmon Avocado Salad',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1549542994.jpg',
    idMeal: '52960',
  },
  {
    strMeal: 'Salmon Prawn Risotto',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg',
    idMeal: '52823',
  },
  {
    strMeal: 'Three Fish Pie',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg',
    idMeal: '52882',
  },
];

export const ArrabiataSingleRecipe = [
  {
    idMeal: '52771',
    strMeal: 'Spicy Arrabiata Penne',
    strDrinkAlternate: null,
    strCategory: 'Vegetarian',
    strArea: 'Italian',
    strInstructions: 'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    strTags: 'Pasta,Curry',
    strYoutube: 'https://www.youtube.com/watch?v=1IszT_guI08',
    strIngredient1: 'penne rigate',
    strIngredient2: 'olive oil',
    strIngredient3: 'garlic',
    strIngredient4: 'chopped tomatoes',
    strIngredient5: 'red chile flakes',
    strIngredient6: 'italian seasoning',
    strIngredient7: 'basil',
    strIngredient8: 'Parmigiano-Reggiano',
    strIngredient9: '',
    strIngredient10: '',
    strIngredient11: '',
    strIngredient12: '',
    strIngredient13: '',
    strIngredient14: '',
    strIngredient15: '',
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: '1 pound',
    strMeasure2: '1/4 cup',
    strMeasure3: '3 cloves',
    strMeasure4: '1 tin ',
    strMeasure5: '1/2 teaspoon',
    strMeasure6: '1/2 teaspoon',
    strMeasure7: '6 leaves',
    strMeasure8: 'spinkling',
    strMeasure9: '',
    strMeasure10: '',
    strMeasure11: '',
    strMeasure12: '',
    strMeasure13: '',
    strMeasure14: '',
    strMeasure15: '',
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null,
    strSource: null,
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  },
];
