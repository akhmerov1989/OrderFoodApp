import express, { Router } from "express";
import MyUserController from "../contollers/MyUserController";

const router = express.Router();

router.post("/", MyUserController.createCurrentUser)

export default router;
