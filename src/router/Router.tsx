import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { homeRoutes } from "../router/HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      {homeRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.children} />
      ))}
    </Routes>
  );
});
