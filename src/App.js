import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const HomePage = lazy(() => import("./components/Homepage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <HomePage />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
