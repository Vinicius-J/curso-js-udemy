import { Router } from "express";
import userController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

// Nao existiria em uma aplicação por falta de segurança
router.get("/", loginRequired, userController.index); // Lista todos os usuários
// router.get("/:id", userController.show); // Lista usuário

router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
index -> lista todos usuários -> GET
show -> mostra um usuário -> GET
store / create -> cria um novo usuário -> POST
update -> atualiza um usuário -> PATCH ou PUT
delete -> apaga um usuário -> DELETE
*/
