
import { rackMeta } from "../RackMain/Racks";


function RackNode({data, onClick}){
    return(
        <div 
            className={` rack ${data.status}`}
            style={{ top: data.y, left: data.x }}
            onClick={() => onClick(data)}
            title={`
                定格値: ${rackMeta.定格値}
                表示範囲: ${rackMeta.表示範囲}
                上限警報: ${rackMeta.上限警報}
                上限注意: ${rackMeta.上限注意}
                下限注意: ${rackMeta.下限注意}
                下限警報: ${rackMeta.下限警報}
                `}
        >
            <div className="rack-name">{data.name}</div>
            <div className="rack-current">{data.current}A</div>
        </div>
    )
}
export default RackNode;