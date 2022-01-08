import { Router } from "express";
import { AddCar, DeleteCar, EditCar, GetAllCars } from "../controllers/carController.js";
const router = Router();

router.get("/getallcars", GetAllCars)
router.post("/addcar", AddCar)
router.post("/editcar", EditCar)
router.post("/deletecar", DeleteCar)

export default router;