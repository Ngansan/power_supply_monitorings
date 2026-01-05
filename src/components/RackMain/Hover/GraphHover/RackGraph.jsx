import { rackLogs } from "../../RackLogs";

function RackGraph({type}){
    const data = rackLogs[type] || [];
    return (
        <div className="graph-placeholder">
            <h4>{type}</h4>
            <ul>
                {data.map((d,i) => (
                    <li key={i}>
                        {d.time || d.date || d.month} : <b>{d.value}</b>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RackGraph;