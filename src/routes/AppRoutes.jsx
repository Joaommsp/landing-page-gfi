import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Application Layout
import AppLayout from "@/layouts/AppLayout";

// Pages
import Home from "@/pages/page-home";
import Introduction from "@/pages/page-intoducion";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to={"/introduction"} replace />} />
        <Route path="home" element={<Home />} />
      </Route>

      <Route path="introduction" element={<Introduction />} />
    </Routes>
  );
}
