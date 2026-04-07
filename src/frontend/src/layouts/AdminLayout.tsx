import { Outlet } from "@tanstack/react-router";

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
}
