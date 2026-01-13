import floorRoute from "./src/modules/floor/floor.route.js";
import express from "express";
import { poolPromise } from "./src/config/db.js";

const app = express();

app.use(express.json());

app.use("/api/floors", floorRoute);
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const startServer = async () => {
  try {
    const pool = await poolPromise;
    await pool.request().query("SELECT 1");

    app.listen(3001, () => {
      console.log("🚀 Server running with DB connected");
    });
  } catch (err) {
    console.error("❌ DB not available:", err.message);
    process.exit(1);
  }
};

startServer();


app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});


export default app;