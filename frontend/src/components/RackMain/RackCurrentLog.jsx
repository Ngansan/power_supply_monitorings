import "../../styles/RackLog.css"
function RackCurrentLog({data, type}){
    const unit = type === "current" ? "A" : "kWh";
    return(
        <div className="log-container">
            <table className="log-table">
                <thead>
                    <tr>
                        <th>番</th>
                        <th>測定値[{unit}]</th>
                        <th>最小値[{unit}]</th>
                        <th>最大値[{unit}]</th>
                        <th>稼働率[%]</th>
                        <th>日時</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.no}>
                            <td>{row.no}</td>
                            <td>{row.value}</td>
                            <td>{row.min}</td>
                            <td>{row.max}</td>
                            <td>{row.rate}</td>
                            <td>{row.datetime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RackCurrentLog;