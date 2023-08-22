import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./components/Home.Page";
import SuperHeroespage from "./components/SuperHeroes.page";
import RQSuperHeroespage from "./components/RQSuperHeroes.page";
import Navbar from "./components/Navbar";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHeroDetail from "./components/RQSuperHeroDetail";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/super-heroes",
        element: <SuperHeroespage />,
      },
      {
        path: "/rq-super-heroes",
        element: <RQSuperHeroespage />,
      },
      {
        path: "/rq-super-heroes/:heroId",
        element: <RQSuperHeroDetail />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
