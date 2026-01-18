import { useState } from "react";
import RackTooltip from "./RackTooltip";

function Rack({rack, onSelect}){
    const [hover, setHover] = useState(false);

    return(
        <>
            <div 
                style={{
                    position: "absolute",
                    left: rack.x,
                    top: rack.y,
                    width: 90,
                    height: 40,
                    background: "#e5e5e5",
                    border: "1px solid #666",
                    cursor: "pointer"
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => onSelect(rack)}
            >
            {rack.id}
            </div>
            {hover && <RackTooltip rack={rack}/>}
        
        </>

    )
}
export default Rack;