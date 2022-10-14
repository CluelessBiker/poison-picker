import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import Navbar from './components/Navbar/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import RecipePage from './pages/RecipePage/RecipePage';

const queryClient = new QueryClient();

function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>

        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<SearchPage />} />
            <Route path="/recipe/:drinkId" element={<RecipePage />}/>
          </Routes>
        </div>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
