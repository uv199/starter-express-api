import express from "express";
import { getCartByUserId, addCart } from "../controllers/movie";
import { authentication } from "../auth.js/index.js";

const router = new express.Router();

router.post("/addCart", authentication, addCart);

router.get("/getCartByUserId/:id", authentication, getCartByUserId);



export default router;
