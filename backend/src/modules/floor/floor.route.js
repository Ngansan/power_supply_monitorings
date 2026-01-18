import express from "express";
import { getFloorMap } from "./floor.controller.js";

const router = express.Router();

router.get("/:floorId", getFloorMap);

// router.get("/floors/:floorId/:zone", getFloorMap);

export default router;
