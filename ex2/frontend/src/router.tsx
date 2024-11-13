import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register/intex";
import { Return } from "./pages/Return";
import { Create } from "./pages/Create";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/return" element={<Return />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </>
  );
}
