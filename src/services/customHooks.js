import { useHistory } from 'react-router-dom';

export function useIsMeal() {
  const history = useHistory();
  const { location: { pathname } } = history;
  return pathname.includes('comida');
}

export function dummy() {
  console.log('dummy');
}
