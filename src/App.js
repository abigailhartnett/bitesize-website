import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root';

// Pages
import HomePage from "./pages/homePage";
import RecipeIndexPage from './pages/recipeIndexPage';
import TempRecipe from './pages/tempRecipe';

// Router
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={ <HomePage /> } />
    <Route path="/recipes" element={<RecipeIndexPage />}/>
    <Route path="/recipes/temp-recipe" element={<TempRecipe />}/>
  </Route>
))


function App() {
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
