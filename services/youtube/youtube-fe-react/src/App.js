import { Outlet } from 'react-router-dom';
import SearchHeader from './components/search/SearchHeader';
function App() {
  return (
    <>
      <SearchHeader></SearchHeader>
      <Outlet />
    </>
  );
}
export default App;
