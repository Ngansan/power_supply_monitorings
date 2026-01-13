import * as repo from "./floor.repository.js";

export const getFloorMap = async (floorId) => {
    console.log("SERVICE floorId:", floorId);
    const floor =  await repo.getFloorById(floorId);
    console.log("FLOOR:", floor);


    if (!floor) return null;

    const rawDbs = await repo.getDBByFloors(floorId);

    const dbs = rawDbs
        .filter(db => db.row_db !== null && db.col_db !== null && db.db_id !== null)
        .map(db => ({
            id: Number(db.db_id),
            name: db.db_name,
            row: Number(db.row_db),
            col: Number(db.col_db)
        })
        )
    console.log("DBS:", rawDbs);


    const rawRacks = await repo.getRackByFloor(floorId);

    const racks = rawRacks
        .filter(rack => rack.row_rack !== null && rack.col_rack !== null && rack.rack_id !== null)
        .map(rack => ({
            id: Number(rack.rack_id),
            name: rack.rack_name,
            row: Number(rack.row_rack),
            col: Number(rack.col_rack)
        })
        );
    console.log("RACKS:", racks);

    return {
        floor: {
            id: Number(floor.floor_id),
            name: floor.floor_name
        },
        dbs,
        racks
    }
}