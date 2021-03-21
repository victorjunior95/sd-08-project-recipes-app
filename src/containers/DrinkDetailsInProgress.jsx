import React, { useEffect, useState } from 'react';

const DrinkDetailsInProgress = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setRedirect(true);
    return () => {
      setRedirect(false);
    };
  }, [redirect]);
  return (
    <div>
      Drink Recipe in Progress
    </div>
  );
};

export default DrinkDetailsInProgress;
