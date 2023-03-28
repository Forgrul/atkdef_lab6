import { Router } from "express";
import { getAllUsers } from "./handlers";
const router = Router();
router.get(`/`, getAllUsers);
export default router;