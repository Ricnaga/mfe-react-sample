import { Home, Next, Vite } from "@screens";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { HOME, NEXT, VITE } from "./paths";

function Container() {
  return (
    <div>
      <h1>THIS IS REACT WEBPACK HOST</h1>
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: HOME,
    element: <Container />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: NEXT,
        element: <Next />,
      },
      {
        path: VITE,
        element: <Vite />,
      },
    ],
  },
]);
