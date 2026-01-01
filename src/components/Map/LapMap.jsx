import { useState } from "react";
// import { allEdges } from "./MockData";
import "../../styles/LapMap.css";
import "../../styles/node_connection.css";

import RackNode from "../Nodes/RackNode";
import DBNode from "../Nodes/DBNode";
import ConnectionLines from "../Nodes/ConnectionLines";
import RackDetailPanel from "../RackMain/RackDetailPanel";
import { rackLogs } from "../RackMain/RackLogs";
import DBModal from "../Distribution Board/DBModal";
import { dbRackConnections } from "../../utils/floor4_connection";
// import { dbs, racks } from "../Layout/floor4_layout";


function LapMap({dbs, racks, connections}){
    const [selectedDB, setSelectedDB] = useState(null);
    const [selectedRack, setSelectedRack] = useState(null);

    // const onClickDB = (id) => {
    //     console.log("Selected DB:", id);
    //     setSelectedDB(prev => (prev === id ? null : id));
    // };
    //console.log("selectedDB value:", selectedDB, typeof selectedDB);

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
                    onClose={() => setSelectedDB(null)}
                    connections={dbRackConnections}
                />
            )}
        </div>
    )
}

export default LapMap;