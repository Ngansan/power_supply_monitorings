import * as floorService  from "./floor.service.js";

export const getFloorMap = async (req, res, next) => {
    try {
        const {floorId} = req.params;
        const {zone} = req.query;
        console.log("floorId:", floorId, "zone:", zone);

        const data = await floorService.getFloorMap(Number(floorId), zone)
        console.log("floorId:", floorId)

        if (!data) {
            return res.status(404).json({ message: "Floor not found" });
        }

        res.json(data);
    } catch (error) {
        next(error);
    }
}