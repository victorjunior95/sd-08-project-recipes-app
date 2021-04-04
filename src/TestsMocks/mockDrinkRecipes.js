/* eslint-disable max-len */
/* eslint-disable max-lines */
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

export const fetchInitialCategoryDrink = {
  drinks: [
    {
      strCategory: 'Ordinary Drink',
    },
    {
      strCategory: 'Cocktail',
    },
    {
      strCategory: 'Milk / Float / Shake',
    },
    {
      strCategory: 'Other/Unknown',
    },
    {
      strCategory: 'Cocoa',
    },
  ],
};

export const fetchCocktailCategoryRecipes = [
  {
    strDrink: '155 Belmont',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg',
    idDrink: '15346',
  },
  {
    strDrink: '57 Chevy with a White License Plate',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg',
    idDrink: '14029',
  },
  {
    strDrink: '747 Drink',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg',
    idDrink: '178318',
  },
  {
    strDrink: '9 1/2 Weeks',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg',
    idDrink: '16108',
  },
  {
    strDrink: 'A Gilligan\'s Island',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg',
    idDrink: '16943',
  },
  {
    strDrink: 'A True Amaretto Sour',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg',
    idDrink: '17005',
  },
  {
    strDrink: 'A.D.M. (After Dinner Mint)',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg',
    idDrink: '14560',
  },
  {
    strDrink: 'A1',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    idDrink: '17222',
  },
  {
    strDrink: 'Abbey Martini',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg',
    idDrink: '17223',
  },
  {
    strDrink: 'Absolut Summertime',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/trpxxs1472669662.jpg',
    idDrink: '14107',
  },
  {
    strDrink: 'Absolutely Fabulous',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/abcpwr1504817734.jpg',
    idDrink: '17224',
  },
  {
    strDrink: 'Absolutly Screwed Up',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yvxrwv1472669728.jpg',
    idDrink: '16134',
  },
];

export const fetchDrinksByIngredients = [
  {
    strDrink: '3-Mile Long Island Iced Tea',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg',
    idDrink: '15300',
  },
  {
    strDrink: '69 Special',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg',
    idDrink: '13940',
  },
  {
    strDrink: 'A1',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    idDrink: '17222',
  },
  {
    strDrink: 'Abbey Cocktail',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg',
    idDrink: '17834',
  },
  {
    strDrink: 'Abbey Martini',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg',
    idDrink: '17223',
  },
  {
    strDrink: 'Ace',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg',
    idDrink: '17225',
  },
  {
    strDrink: 'Adam & Eve',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg',
    idDrink: '17226',
  },
  {
    strDrink: 'Addison',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg',
    idDrink: '17228',
  },
  {
    strDrink: 'Alaska Cocktail',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg',
    idDrink: '11013',
  },
  {
    strDrink: 'Alexander',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg',
    idDrink: '11014',
  },
  {
    strDrink: 'Allies Cocktail',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg',
    idDrink: '11022',
  },
  {
    strDrink: 'Angel Face',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vaukir1606772580.jpg',
    idDrink: '11034',
  },
];

export const searchByIngredientGin = {
  inputValue: '',
  inputType: '',
  areaChoosen: '',
  drinkFilter: '',
  mealFilter: '',
  ingredientFilter: 'Gin',
  areas: [{ strArea: 'All' }],
};

export const dryMartiniSingleRecipe = [
  {
    idDrink: '11005',
    strDrink: 'Dry Martini',
    strDrinkAlternate: null,
    strTags: 'IBA,Classic,Christmas,Alcoholic',
    strVideo: null,
    strCategory: 'Cocktail',
    strIBA: 'Unforgettables',
    strAlcoholic: 'Alcoholic',
    strGlass: 'Cocktail glass',
    strInstructions: 'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',
    strInstructionsES: null,
    strInstructionsDE: null,
    strInstructionsFR: null,
    strInstructionsIT: 'Dritto: Versare tutti gli ingredienti nel mixing glass con cubetti di ghiaccio. Mescolare bene. Filtrare in una coppetta da cocktail Martini ghiacciata. Spremi l\'olio della scorza di limone sulla bevanda o guarnisci con l\'oliva.',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg',
    strIngredient1: 'Gin',
    strIngredient2: 'Dry Vermouth',
    strIngredient3: 'Olive',
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: '1 2/3 oz ',
    strMeasure2: '1/3 oz ',
    strMeasure3: '1 ',
    strMeasure4: null,
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource: 'https://www.thecocktaildb.com/drink/11005',
    strImageAttribution: 'TheCocktailDB.com',
    strCreativeCommonsConfirmed: 'Yes',
    dateModified: '2017-09-02 12:51:35',
  },
];
