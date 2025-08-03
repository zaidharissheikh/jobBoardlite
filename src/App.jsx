import React from "react";
import { useState } from "react"
import Home from "./pages/home"
import JobDetail from "./pages/jobdetail"
import PostJob from "./pages/post-job"
import Apply from "./pages/apply"
import { BrowserRouter as Router, Route, BrowserRouter, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/job/:id",
        element: <><Outlet /></>,
        children: [
          {
            index: true,
            element: <JobDetail />,
          },
          {
            path: "apply",
            element: <Apply />,
          }
        ]
      },
      {
        path: "/post-job",
        element: <PostJob />,
      }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default App;