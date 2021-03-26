import React from 'react';
import { useHistory } from 'react-router-dom';

const FoodDetailsInProgress = () => {
  // const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  const id = history.location.pathname;
  const res = id.replace(/\D/g, ''); // https://stackoverflow.com/questions/30607419/return-only-numbers-from-string/30607466

  // useEffect(() => {
  //   setRedirect(true);
  //   return () => {
  //     setRedirect(false);
  //   };
  // }, [redirect]);

  console.log(res);
  return (

    <div>
      Food Recipe In Progress
    </div>
  );
};

export default FoodDetailsInProgress;
