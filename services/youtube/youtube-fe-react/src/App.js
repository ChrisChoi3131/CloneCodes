import { Outlet } from 'react-router-dom';
import SearchHeader from './components/search/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './contexts/YoutubeApiContext';
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <YoutubeApiProvider>
          <Outlet />
        </YoutubeApiProvider>
      </QueryClientProvider>

    </>
  );
}
export default App;
