import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Splash } from "./screens/Splash";
import { Onboarding } from "./screens/Onboarding";
import { Login } from "./screens/Login";
import { ProfileSetup } from "./screens/ProfileSetup";
import { Home } from "./screens/Home";
import { Match } from "./screens/Match";
import { Chat } from "./screens/Chat";
import { Explore } from "./screens/Explore";
import { ProfileView } from "./screens/ProfileView";
import { Settings } from "./screens/Settings";
import { NotFound } from "./screens/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Splash },
      { path: "onboarding", Component: Onboarding },
      { path: "login", Component: Login },
      { path: "setup", Component: ProfileSetup },
      { path: "home", Component: Home },
      { path: "match", Component: Match },
      { path: "chat/:id", Component: Chat },
      { path: "explore", Component: Explore },
      { path: "profile/:id", Component: ProfileView },
      { path: "settings", Component: Settings },
      { path: "*", Component: NotFound },
    ],
  },
]);
