import express from "express";
import PingController from "../controllers/ping";

const router = express.Router();

router.get("/get_navbar_menu_items", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
// const foo = await fetch("http://0.0.0.0:8055/items/index_page")
console.log(response)
// await foo
// console.log(foo)
return res.json(response);
});

export default router;
