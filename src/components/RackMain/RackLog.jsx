import { rackLogs } from "./RackLogs";

function RackLog({rack, type}){
    const data = rackLogs[type] || [];

    return(
        <div className="log-placeholder">
            <h4>Log ({type})</h4>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,i) => (
                        <tr key={i}>
                            <td>{d.time || d.date || d.month}</td>
                            <td>{d.value}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}
export default RackLog;