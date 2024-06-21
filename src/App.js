import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from "./components/root";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={appRouter}>
      <Outlet />
    </RouterProvider>
  );
}

export default App;
