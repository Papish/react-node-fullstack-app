import { Link, Outlet } from "react-router-dom";
import { routes } from "./";

function Layout() {
  return (
    <>
      <h1>Level up your react!!!</h1>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {routes.map((route) => (
            <li
              style={{
                display: "inline-block",
              }}
              key={route.name}
            >
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
