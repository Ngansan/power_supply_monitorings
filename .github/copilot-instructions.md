# Copilot Instructions for Power Supply Management Monitoring

## Project Overview
This is a power supply monitoring system for buildings, collecting SNMP data from PDUs/Distribution Boards (DBs), storing in MSSQL database, and visualizing floor layouts with racks and energy consumption via React frontend.

## Architecture
- **Backend**: Node.js Express API with modular structure (modules/floor: route → controller → service → repository)
- **Database**: MSSQL with tables: FLOOR, DISTRIBUTION_BOARD, RACK (and likely more for logs/energy data)
- **Frontend**: React app using ReactFlow for interactive floor maps, Material-UI, Recharts for charts
- **Data Flow**: SNMP collectors → DB → Express API → React frontend

## Key Components
- **Floor Maps**: Grid-based layouts with DBs/racks positioned by row/col coordinates
- **Nodes**: DBNode, RackNode, WorkdeskNode components for visualization
- **Rack Details**: RackMain components for logs, energy charts, current graphs
- **Connections**: Visual lines between DBs and racks using ReactFlow

## Development Workflow
- **Backend**: Run `node server.js` (ensure .env with DB_USER, DB_PASSWORD, DB_SERVER, DB_NAME)
- **Frontend**: `npm start` (proxies to backend on :3001)
- **Database**: MSSQL with msnodesqlv8 driver; test connection with `node test_db.js`
- **SNMP**: Python collectors in cu_snmp_normalize for data gathering from devices

## Conventions & Patterns
- **Modules**: Each feature (e.g., floor) has .route.js, .controller.js, .service.js, .repository.js
- **DB Queries**: Use parameterized queries with sql.BigInt for IDs (e.g., `floor_id`)
- **Positioning**: Absolute CSS with `top: row * GRID.CELL`, `left: col * GRID.CELL` (GRID.CELL=50px)
- **Data Filtering**: Filter null row/col in services before mapping (e.g., `filter(db => db.row_db !== null)`)
- **API Responses**: JSON with floor {id, name}, dbs/racks arrays [{id, name, row, col}]
- **State Management**: Local useState for selected nodes (selectedDB, selectedRack)
- **Imports**: ES modules with .js extensions (e.g., `import { poolPromise } from "../../config/db.js"`)

## Integration Points
- **Axios**: GET `/api/floors/${floorId}` for floor data (note: frontend uses `/zones/${zone}` but backend route is `/:floorId/:zone?`)
- **React Router**: Routes like `/floors/:floorId/:zone` for floor maps
- **ReactFlow**: For connection lines and interactive elements
- **Material-UI**: For modals, panels, and UI components

## Common Tasks
- **Add New Floor**: Insert into FLOOR table, add DBs/racks in INSERT DATA.sql, update layout files (floor4_layout.jsx)
- **New Rack Feature**: Add to RackMain/, update LapMap to render new components
- **DB Schema Changes**: Update repository queries, ensure BigInt for IDs
- **SNMP Data**: Extend cu_snmp_normalize for new OIDs, integrate with backend collectors

## File References
- Backend entry: `backend/server.js`
- DB config: `backend/src/config/db.js`
- Floor API: `backend/src/modules/floor/`
- Frontend app: `frontend/src/App.js`
- Floor map: `frontend/src/pages/FloorMap.jsx`
- Map component: `frontend/src/components/Map/LapMap.jsx`
- Grid constants: `frontend/src/constants/Grid.jsx`
- DB schema: `INSERT DATA.sql`