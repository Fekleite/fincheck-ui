import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div>
      auth
      <Outlet />
    </div>
  )
}