import { Outlet } from "@modern-js/runtime/router";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export default function Layout() {
  return (
    <div>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}
