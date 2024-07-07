import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./apps/Layout";
import { routes } from "./apps";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
