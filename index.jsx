import React from "react";
import ReactDOMClient from "react-dom/client"
import { Admins_Fresh_Lead } from "./screens/Admins/FreshLead/Fresh_Lead.jsx"
import { Users_Fresh_Lead } from "./screens/Users/FreshLead/Fresh_Lead.jsx"
import { UsersDirect_Lead } from "./screens/Users/DirectLead/Direct_Lead.jsx"
import { AdminsDirect_Lead } from "./screens/Admins/DirectLead/Direct_Lead.jsx"
import { UserDashboard } from "./screens/Users/Dashboard/Dashboard.jsx"
import { UserSchedule } from "./screens/Users/Schedule/Schedule.jsx"
import { AdminsSchedule } from "./screens/Admins/Schedule/Schedule.jsx"
import { AdminDashboard } from "./screens/Admins/Dashboard/Dashboard.jsx"
import { Users_Control_Customers } from "./screens/Users/ControlCustomers/Control_Customers.jsx"
import { Admins_Control_Customers } from "./screens/Admins/Control/Control_Customers.jsx"
import { Control_Users } from "./screens/Admins/Control/Control_Users.jsx"
import  LogIn  from "./screens/Log in/Login.jsx"
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/users/dashboard",
    element: <UserDashboard />,
  },
  
  {
    path: "/users/schedules",
    element: <UserSchedule />,
  },
  {
    path: "/admins/schedule",
    element: <AdminsSchedule />,
  },
  {
    path: "/admins/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/control-users",
    element: <Control_Users />,
  },
  {
    path: "/admins/fresh-lead",
    element: <Admins_Fresh_Lead />,
  },
  {
    path: "/users/fresh-lead",
    element: <Users_Fresh_Lead />,
  },
  {
  path: "/users/direct-lead",
    element: <UsersDirect_Lead />,
  },
  {
    path: "/admins/direct-lead",
      element: <AdminsDirect_Lead />,
    },
  {
    path: "/users/control-customers",
      element: <Users_Control_Customers />,
    }, {
    path: "/admins/control-customers",
      element: <Admins_Control_Customers />,
    },
  {
    path: "/",
    element: <LogIn />,
  },
]);


ReactDOMClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);