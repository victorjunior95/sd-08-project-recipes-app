import { useLocation } from 'react-router';

export default function GetTitle() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  const pathSplit = currentPath.split('/');
  const pathToTitle = pathSplit[pathSplit.length - 1].split('-').join(' ');
  console.log(pathSplit[pathSplit.length - 1]);
  if (pathToTitle === 'explorar') return 'explorar origem';
  return pathToTitle;
}
