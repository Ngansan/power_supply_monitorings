
import sql from "mssql";
import { poolPromise } from "../../config/db.js";


export const getFloorById = async (floorId) => {
    const pool = await poolPromise;
    const result = await pool
        .request()
        .input("floorId", sql.BigInt, floorId)
        .query(`SELECT 
            floor_id,
            floor_name
            FROM FLOOR WHERE floor_id = @floorId`);
            return result.recordset[0];
}

export const getDBByFloors = async (floorId) => {
    const pool = await poolPromise;
    const result = await pool
        .request()
        .input("floorId", sql.BigInt, floorId)
        .query(`SELECT 
            db_id,
            db_name,
            floor_id,
            row_db,
            col_db
            FROM DISTRIBUTION_BOARD WHERE floor_id = @floorId`);
    return result.recordset;
}

export const getRackByFloor = async (floorId) => {
    const pool = await poolPromise;
    const result = await pool
        .request()
        .input("floorId", sql.BigInt, floorId)
        .query(`SELECT 
            rack_id,
            rack_name,
            floor_id,
            row_rack,
            col_rack
            FROM RACK WHERE floor_id = @floorId`);
    return result.recordset;
}