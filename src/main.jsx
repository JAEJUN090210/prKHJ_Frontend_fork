// src/main.jsx
// This file is part of the Daedeok Software Meister High School project.
// Created by [ jaejun ] on [ 2025-08-06 ].
// last modified by [ jaejun ] on [ 2025-08-06 ].

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
