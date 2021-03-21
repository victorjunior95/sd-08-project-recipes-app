import React, { useState } from 'react';

const FoodDetailsInProgress = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setRedirect(true);
    return () => {
      setRedirect(false);
    };
  }, [redirect]);
  return (
    <div>
      Food Recipe In Progress
    </div>
  );
};

export default FoodDetailsInProgress;
