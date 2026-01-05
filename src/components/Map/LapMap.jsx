import { useState } from "react";
import "../../styles/LapMap.css";
import "../../styles/node_connection.css";

import RackNode from "../Nodes/RackNode";
import DBNode from "../Nodes/DBNode";
import ConnectionLines from "./ConnectionLines";
import RackDetailPanel from "../RackMain/RackDetailPanel";
import { rackLogs } from "../RackMain/RackLogs";
import DBModal from "../Distribution Board/DBModal";
import { dbRackConnections } from "../Layout/floor4_layout";
// import { dbRackConnections } from "../../utils/floor4_connection";


function LapMap({dbs, racks, connections, workdesks, floorId}){
    const [selectedDB, setSelectedDB] = useState(null);
    const [selectedRack, setSelectedRack] = useState(null);
    return(
        <div className="lap-map" style={{position: "relative"}}>
            {dbs.map(db => (
                <DBNode
                    key={db.id}
                    data={db}
                    selected={selectedDB === db.id}
                    onClick={(id) => setSelectedDB(prev => (prev === id ? null : id))}
                />
            ))}
            {racks.map((rack) => (
                <RackNode 
                    key={rack.id} 
                    data={rack}
                    onClick={() => setSelectedRack(rack)}
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
                    connections={dbRackConnections}
                />
            )}
        </div>
    )
}

export default LapMap;