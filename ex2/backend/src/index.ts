import express from "express";
import cors from "cors";
import AppDataSource from "./config/data-source";

import "reflect-metadata";
import { usuarioRoutes } from "./routes/usuarioRoutes";
import { loginRoutes } from "./routes/loginRoutes";
import { patineteRoutes } from "./routes/patineteRoutes";
import { formaPagamentoRoutes } from "./routes/formaPagamentoRoutes";
import { locacaoRoutes } from "./routes/locacaoRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/usuarios", usuarioRoutes);
app.use("/logins", loginRoutes);
app.use("/patinetes", patineteRoutes);
app.use("/formasPagamento", formaPagamentoRoutes);
app.use("/locacoes", locacaoRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log("Database connection error:", error));
