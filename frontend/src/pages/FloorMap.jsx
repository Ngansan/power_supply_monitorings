import {useParams} from "react-router-dom";
import LapMap from "../components/Map/LapMap";
import { useEffect, useState } from "react";
import axios from "axios";

function FloorMap() {
    const {floorId} = useParams();
    const [floor, setFloor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFloor = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/floors/${floorId}`);
                setFloor(response.data);
            } catch (err) {
                console.error("Error fetching floor data:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchFloor();
        console.log("Fetched floor data for floorId:", floorId);
    }, [floorId]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error loading floor data: {error.message}</div>;
    }
    
    // const floor = floorData[floorId];

    if (!floor) {
        return <div>Floor data not found</div>;
    }   

    return (
        <LapMap 
            floorId={Number(floorId)}
            dbs={floor.dbs}
            racks={floor.racks}
            workdesks={floor.workdesks || []}
            connections={floor.connections || []}
        />
    )
}
export default FloorMap;