import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
const LocationMap = lazy(() => import("./components/LocationMap"));
const MasterPlan = lazy(() => import("./components/MasterPlan"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Pricing = lazy(() => import("./components/Pricing"));
const AllFloorPlan = lazy(() => import("./components/AllFloorPlan"));
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
    {
      path: "/:floorPlan",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <AllFloorPlan />
        </Suspense>
      ),
    },
    {
      path: "/m3m-golf-estate-location.php",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <LocationMap />
        </Suspense>
      ),
    },
    {
      path: "/m3m-golf-estate-master-plan.php",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <MasterPlan />
        </Suspense>
      ),
    },
    {
      path: "/about-us.php",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <AboutUs />
        </Suspense>
      ),
    },
    {
      path: "/pricing.php",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <Pricing />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </>
  );
}

export default App;
