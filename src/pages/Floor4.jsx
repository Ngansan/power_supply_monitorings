import LapMap from "../components/Map/LapMap";
import { dbRackConnections, dbs, racks } from "../components/Layout/floor4_layout";

function Floor4(){
    return(
        <div>
            <LapMap 
                floorId={4}
                dbs={dbs}
                racks={racks}
                connections={dbRackConnections}
            />
        </div>
        
    );
}
export default Floor4;