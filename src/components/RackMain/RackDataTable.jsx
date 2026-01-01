function RackDataTable({data}){
    return(
        <table className="rack-table">
            <thead>
                <tr>
                    <th>番</th>
                    <th>電流値[A]</th>
                    <th>最小値[A]</th>
                    <th>最大値[A]</th>
                    <th>稼働率[%]</th>
                    <th>日時</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) =>(
                    <tr key={row.no}>
                        <td>{row.no}</td>
                        <td>{row.current}</td>
                        <td>{row.min}</td>
                        <td>{row.max}</td>
                        <td>{row.rate}</td>
                        <td>{row.datetime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default RackDataTable;