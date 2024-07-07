import ContextApi from "./context";
import Design from "./design";
import Hooks from "./hooks";
import Portal from "./portal";
import Redux from "./redux";
import Zustand from "./zustand";

export const routes = [
  {
    name: "Redux",
    component: Redux,
    path: "/",
  },
  {
    name: "Zustand",
    component: Zustand,
    path: "/zustand",
  },
  {
    name: "Design",
    component: Design,
    path: "/design",
  },
  {
    name: "Context",
    component: ContextApi,
    path: "/context",
  },
  {
    name: "Portal",
    component: Portal,
    path: "/portal",
  },
  {
    name: "Hooks",
    component: Hooks,
    path: "/hooks",
  },
];
