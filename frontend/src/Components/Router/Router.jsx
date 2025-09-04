import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroComponent from "../SubComponents/Hero/Hero";
import AddTask from "../SubComponents/Task/AddTask";
import GetTask from "../SubComponents/Task/getTask";
import Navbar from "../SubComponents/Navbar/Navbar";
import SignupPage from "../SubComponents/Authentication/Signup";
import LoginPage from "../SubComponents/Authentication/Login";
import Footer from "../SubComponents/Footer/Footer";
import AboutPage from "../SubComponents/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <HeroComponent />
        <Footer />
      </div>
    ),
  },
  {
    path: "/add-task",
    element: (
      <>
        <Navbar />
        <AddTask />
        <Footer />
      </>
    ),
  },
  {
    path: "/my-tasks",
    element: (
      <>
        <Navbar />
        <GetTask />
        <Footer />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <SignupPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Navbar />
        <LoginPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <AboutPage />
        <Footer />
      </>
    ),
  },
]);

function Router() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Router;
