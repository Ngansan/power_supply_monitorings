import * as floorService from "./floor.service.js";

export const getFloorMap = async (req, res, next) => {
    try {
        const floorId = Number(req.params.floorId);
        console.log("floorId:", floorId);
        const data = await floorService.getFloorMap(floorId);

        if (!data) {
            return res.status(404).json({ message: "Floor not found" });
        }

        res.json(data);
    } catch (error) {
        next(error);
    }
}