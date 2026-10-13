import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

function LoginRoute() {
  const navigate = useNavigate();

  return <Login onLogin={() => navigate("/dashboard")} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginRoute />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <div className="min-h-screen grid place-items-center text-xl font-semibold">Page Not Found</div>,
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
