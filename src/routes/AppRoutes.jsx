import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Application Layout
import AppLayout from "@/layouts/AppLayout";

// Pages
import Home from "@/pages/page-home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to={"/home"} replace />} />

        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}
