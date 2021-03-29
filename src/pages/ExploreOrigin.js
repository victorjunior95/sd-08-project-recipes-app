import React from 'react';

const areas = [
  { strArea: 'American' },
  { strArea: 'British' },
  { strArea: 'Canadian' },
  { strArea: 'Chinese' },
  { strArea: 'Dutch' },
  { strArea: 'Egyptian' },
  { strArea: 'French' },
  { strArea: 'Greek' },
  { strArea: 'Indian' },
  { strArea: 'Irish' },
  { strArea: 'Italian' },
  { strArea: 'Jamaican' },
  { strArea: 'Japanese' },
  { strArea: 'Kenyan' },
  { strArea: 'Malaysian' },
  { strArea: 'Mexican' },
  { strArea: 'Moroccan' },
  { strArea: 'Russian' },
  { strArea: 'Spanish' },
  { strArea: 'Thai' },
  { strArea: 'Tunisian' },
  { strArea: 'Turkish' },
  { strArea: 'Unknown' },
  { strArea: 'Vietnamese' },
];

function ExploreOrigin() {
  return (
    <div>
      Explorar Origem
      <select data-testid="explore-by-area-dropdown">
        { areas.map(({ strArea }) => (
          <option
            data-testid="explore-by-area-dropdown"
            key={ strArea }
          >
            { strArea }
          </option>
        )) }
      </select>
    </div>
  );
}

export default ExploreOrigin;
