import { Router } from "express";
import {
  listar_productos,
  listar_producto,
  crear_producto,
  eliminar_prodcuto,
  actualizar_producto,
} from "../controllers/product.js";

const router = Router();

router.get("/", listar_productos);

router.get("/:id", listar_producto);

router.post("/", crear_producto);

router.put("/:id", actualizar_producto);

router.delete("/:id", eliminar_prodcuto);

export default router;
