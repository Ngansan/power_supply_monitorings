import express from "express";
import { getFloorMap } from "./floor.controller.js";

const router = express.Router();

router.get("/:floorId", getFloorMap);




export default router;
