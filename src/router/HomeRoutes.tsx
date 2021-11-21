import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    children: <Login />
  },
  {
    path: "/home",
    children: <Home />
  },
  {
    path: "/home/user_management",
    children: <UserManagement />
  },
  {
    path: "/home/setting",
    children: <Setting />
  },
  {
    path: "*",
    children: <Page404 />
  }
];
