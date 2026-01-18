import { useState } from "react";
import "../../styles/LapMap.css";
import "../../styles/node_connection.css";

import RackNode from "../Nodes/RackNode";
import DBNode from "../Nodes/DBNode";
import ConnectionLines from "./ConnectionLines";
import RackDetailPanel from "../RackMain/RackDetailPanel";
import { rackLogs } from "../RackMain/RackLogs";
import DBModal from "../Distribution_Board/DBModal";
import { dbRackConnections_4 } from "../Layout/floor4_layout";
import { GRID } from "../../constants/Grid";
import WorkdeskNode from "../Nodes/WorkdeskNode";
// import { dbRackConnections } from "../../utils/floor4_connection";


function LapMap({dbs=[], racks=[], workdesks=[], connections=[], floorId=[]}){
    const [selectedDB, setSelectedDB]= useState(null);
    const [selectedRack, setSelectedRack] = useState(null);
    const [selectedWorkdesk, setSelectedWorkdesk] = useState(null);
    return(
        <div className="lap-map" style={{position: "relative"}}>
            {dbs.map(db => (
                <DBNode
                    key={db.id}
                    data={db}
                    selected={selectedDB === db.id}
                    onClick={(id) => setSelectedDB(prev => (prev === id ? null : id))}
                    style={{
                        position: "absolute",
                        top: db.row * GRID.CELL,
                        left: db.col * GRID.CELL
                    }}
                />
            ))}
            {racks.map((rack) => (
                <RackNode 
                    key={rack.id} 
                    data={rack}
                    onClick={() => setSelectedRack(rack)}
                    style={{
                        position: "absolute",
                        top: rack.row * GRID.CELL,
                        left: rack.col * GRID.CELL
                    }}
                />
            ))}
            {workdesks.map((workdesk) => (
                <WorkdeskNode
                    key={workdesk.id} 
                    data={workdesk}
                    onClick={() => setSelectedWorkdesk(workdesk)}
                    style={{
                        position: "absolute",
                        top: workdesk.row * GRID.CELL,
                        left: workdesk.col * GRID.CELL
                    }}
                />
            ))}
            <ConnectionLines
                selectedDB={selectedDB}
                connections={connections}
                dbs={dbs}
                racks={racks}
            />
            {selectedRack && (
                <RackDetailPanel
                    rack={selectedRack}
                    logs={rackLogs[selectedRack.id] || []}
                    onClose={() => setSelectedRack(null)}
                />
            )}

            {selectedDB && (
                <DBModal
                    dbId={selectedDB}
                    floorId={floorId}
                    onClose={() => setSelectedDB(null)}
                    connections={connections}
                />
            )}
        </div>
    )
}

export default LapMap;