    // const DB_WIDTH = 120;
const DB_HEIGHT = 60;
const RACK_WIDTH = 90;
const RACK_HEIGHT = 40;

const CABLE_CORRIDOR_x = 1100;

function ConnectionLines({dbs = [], racks = [], selectedDB, connections = []}){
    if(!selectedDB) return null;

    const db = dbs.find(d => d.id === selectedDB);
    if(!db) return null;

    const connectedRacks = connections
                            .filter((c) => c.dbId === selectedDB)
                            .map((c) => racks.find((r) =>r.id === c.rackId))
                            .filter(Boolean);
    if(connectedRacks.length === 0) return null;
    

    const dbOut = {
        x: db.x,
        y: db.y + DB_HEIGHT/2
    };

    const rackCenters = connectedRacks.map(r => ({
        id: r.id,
        x: r.x + RACK_WIDTH, // đi vào từ mép phải rack
        y: r.y + RACK_HEIGHT / 2
    }));

    const trunkTop = Math.min(...rackCenters.map(r => r.y));
    const trunkBottom = Math.max(...rackCenters.map(r => r.y));
    // const dbStart = {
    //     x: db.x,
    //     y: db.y + DB_HEIGHT / 2
    // }

    // const trunkX = dbStart.x - 120;

    // const rackYs = connectedRacks.map((r) => r.y);
    // const maxRackY = Math.max(...rackYs);
    // const minRackY = Math.min(...rackYs);


//     console.log("selectedDB:", selectedDB);
// console.log("connections:", connections);
// console.log("dbs:", dbs);
// console.log("racks:", racks);

//             const matchedConnections = connections;
//             console.log("Matched connections:", matchedConnections);

    
    return(
        <svg className="connection-line">
            <path
                d={`
                    M ${dbOut.x} ${dbOut.y}
                    L ${CABLE_CORRIDOR_x} ${dbOut.y}`}
                stroke="red"
                strokeWidth="2"
                fill="none"
            />
            <path
                d={`
                M ${CABLE_CORRIDOR_x} ${trunkTop} 
                L ${CABLE_CORRIDOR_x} ${trunkBottom}`}
                stroke="red"
                strokeWidth="2"
                fill="none"
            />
            {rackCenters.map((rack, index) => {
                // const rackIn = {
                //     x: rack.x + RACK_WIDTH/2,
                //     y: rack.y,
                // };
                <path
                    key={rack.id}
                    d={`
                        M ${CABLE_CORRIDOR_x} ${rack.y}
                        L ${rack.x} ${rack.y}`}
                    stroke="red"
                    strokeWidth="1.6"
                    fill="none"
                    />
            })}
        </svg>


    );

}

export default ConnectionLines