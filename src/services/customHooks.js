import { useHistory } from 'react-router-dom';

export function useIsMeal() {
  const { location: { pathname } } = useHistory();
  return pathname.includes('comida');
}

export function dummy() {
  console.log('dummy');
}
