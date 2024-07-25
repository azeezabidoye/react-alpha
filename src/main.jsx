import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/Posts.jsx";
import NewPost from "./components/NewPost.jsx";
import "./index.css";
import RootLayout from "./routes/RootLayout.jsx";

const routerArray = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "create-post",
        element: <NewPost />,
      },
    ],
  },
];
const route = createBrowserRouter(routerArray);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
