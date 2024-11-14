import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Return } from "./pages/Return";
import { Create } from "./pages/Create";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/return" element={<Return />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </>
  );
}
