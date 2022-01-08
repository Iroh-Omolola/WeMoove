import { Router } from "express";
import { BookCar, GetBookings } from "../controllers/bookingController.js";
const router = Router();

router.post("/bookcar", BookCar)
router.get("/getallbookings", GetBookings)

export default router;