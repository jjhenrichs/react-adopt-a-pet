import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from "./components/root";

import { RouterProvider } from "react-router-dom";

// create router with JSX Route elements
const appRouter = "REPLACE ME WITH A ROUTER";

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
