import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Grocery from './components/Grocery';
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContex";

// Epiosde 1 or 2 Learning
// /* <div id="parent">
//     <div id="child">
//         <h1>Namaste React</h1>
//         <h1>Namaste React</h1>
//     </div>
//     <div id="child2">
//         <h1>Namaste React</h1>
//         <h1>Namaste React</h1>
//     </div>
// </div> */

// // const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// const jsxheading = <h1 id="heading">Namaste React</h1>;

// // React functional component
// const Title = () => {
//     return <h1>Namaste React Title</h1>;
// }

// const HeadingComponent = () => {
//     return (<div className="heading">
//         <h1>Namaste React Heading</h1>
//         <Title />
//         </div>);
// }

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUsername] = useState();

  useEffect(() => {
    const data = {
      name: "Vishal Sahgal",
    };
    setUsername(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUsername }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
