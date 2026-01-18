import { poolPromise } from "./src/config/db.js";

const test = async () => {
    const pool = await poolPromise;
    const result = await pool
        .request()
        .query("SELECT 1 AS test");
    console.log(result.recordset);
}

test();

