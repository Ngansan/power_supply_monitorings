
import sql from "mssql";
import { poolPromise } from "../../config/db.js";


export const getFloorById = async (floorId) => {
    const pool = await poolPromise;
    const result = await pool
        .request()
        .input("floorId", sql.BigInt, floorId)
        .query(` 
            SELECT 
                floor_id,
                floor_name,
                have_zone AS has_zone
            FROM FLOOR
            WHERE floor_id = @floorId`);
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

export const getDbByFloorAndZone = async (floorId, zoneKey) => {
    const pool = await poolPromise;
    const result = await pool
        .request()
        .input("floorId", sql.BigInt, floorId)
        .input("zoneKey", sql.NVarChar, zoneKey)
        .query(`SELECT 
            db.db_id,
            db.db_name,
            db.floor_id,
            db.row_db,
            db.col_db,
            z.zone_key,
            z.zone_name
            FROM DISTRIBUTION_BOARD db
            JOIN ZONES z ON db.zone_id = z.zone_id
            WHERE db.floor_id = @floorId AND (z.zone_key = @zoneKey OR @zoneKey IS NULL)`
        );
    return result.recordset;
}
export const getRackByFloorAndZone = async (floorId, zoneKey) => {
    const pool = await poolPromise;
    const result = await pool
        .request()  
        .input("floorId", sql.BigInt, floorId)
        .input("zoneKey", sql.NVarChar, zoneKey)
        .query(`SELECT
            r.rack_id,
            r.rack_name,
            r.row_rack,
            r.col_rack,
            z.zone_key
            FROM RACK r
            JOIN ZONES z ON r.zone_id = z.zone_id
            WHERE r.floor_id = @floorId AND (z.zone_key = @zoneKey OR @zoneKey IS NULL)`
        );
    return result.recordset;
}

export const getWorkdeskByFloorAndZone = async (floorId, zoneKey) => {
    const pool = await poolPromise;
    const result = await pool
        .request()
        .input("floorId", sql.BigInt, floorId)
        .input("zoneKey", sql.NVarChar, zoneKey)
        .query(`SELECT
            w.workdesk_id,
            w.workdesk_name,
            w.workdesk_type,
            w.row_workdesk,
            w.col_workdesk,
            z.zone_key
            FROM WORKDESK w
            JOIN ZONES z ON w.zone_id = z.zone_id
            WHERE w.floor_id = @floorId AND (z.zone_key = @zoneKey OR @zoneKey IS NULL)`
        );
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