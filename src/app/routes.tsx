import React from 'react';
import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/templates/MainLayout";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "experience", Component: Experience },
      { path: "projects", Component: Projects },
      { path: "skills", Component: Skills },
      { path: "*", Component: () => <div className="text-center py-20 text-slate-400">404 - Page Not Found</div> },
    ],
  },
]);
