function RackEnergyExplain({summary}){
    if(!summary) return null;

    return(
        <div className="en-sum"
            style={{
                    display: "flex",
                    gap: 24,
                    marginTop: 12,
                    fontSize: 13,
                    fontWeight: 500
                }}
        >
            <span>最小値：{summary.min} kWh</span>
            <span>最大値：{summary.max} kWh</span>
            <span>電圧：{summary.voltage} V</span>
            <span>力率：{summary.powerFactor}</span> 
        </div>
    )
}
export default RackEnergyExplain;