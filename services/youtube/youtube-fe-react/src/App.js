import {
  Outlet,
} from "react-router-dom";
import SearchBar from './components/searchbars/Searchbar';


function App() {
  return (
    <>
      <SearchBar></SearchBar>
      <Outlet />
    </>
  );
}
export default App;
