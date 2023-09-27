import express from "express";
import { signUp, login, updateUser, deleteUser, getAllUser, verifyEmail,graphQLCall } from "../controllers/user";
import { authentication } from "../auth.js";

const router = new express.Router();

router.post("/signup", signUp);

router.get("/graphQLCall", graphQLCall);

router.post("/login", login);

router.get("/getAllUser", authentication, getAllUser);

router.put("/update", authentication, updateUser);

router.delete("/delete", authentication, deleteUser);

router.put("/verifyemail", verifyEmail);

export default router;
