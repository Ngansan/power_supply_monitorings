import { rackMeta } from "../RackMain/Racks";

function WorkdeskNode({data, onClick, style}){
    return(
        <div 
            className={` workdesk ${data.status}`}
            style={style}
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
            <div className="workdesk-name">{data.name}</div>
            <div className="workdesk-current">{data.current}A</div>
        </div>
    )
}

export default WorkdeskNode;