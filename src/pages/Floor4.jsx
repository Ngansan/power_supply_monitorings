import LapMap from "../components/Map/LapMap";
// import { floor4Edges, floor4Nodes } from "../components/Layout/floor4_layout";

import { connections, dbs, racks } from "../components/Layout/floor4_layout";
function Floor4(){
    return(
        <div>
            <LapMap 
                connections={connections}
                dbs={dbs}
                racks={racks}
            />
        </div>
        
    );
}

export default Floor4;