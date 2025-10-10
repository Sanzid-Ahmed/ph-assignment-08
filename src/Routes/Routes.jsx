import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Components/Home/Home';
import Allapps from '../Pages/Allapps/Allapps';
import About from '../Components/About/About';
import ReadList from '../Pages/ReadList/ReadList';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { 
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/allApps",
        Component: Allapps,
      },
      {
        path: "/installApps",
        loader: () => fetch("json16Data.json"),
        Component: ReadList,
      },
      {
        path: "/appDeatils/:id",
        loader: () => fetch("json16Data.json"),
        Component: About,
      }
    ]
  },
]);