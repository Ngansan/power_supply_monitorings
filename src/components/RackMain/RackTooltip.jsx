
function RackTooltip({rack}){
    return(
        <div
            style={{
            position: "absolute",
            left: rack.x + 100,
            bottom: rack.y ,
            background: "#111",
            color: "#fff",
            padding: 8,
            fontSize: 12,
            borderRadius: 4,
            zIndex: 1000
            }}>
            <div>定格値: {rack.rated} A</div>
            <div>表示範囲: {rack.min} ~ {rack.max}A</div>
            <div>上限警報: {rack.upperAlarm}A</div>
            <div>上限注意: {rack.upperWarning}A</div>
            <div>下限注意: {rack.lowerWarning}A</div>
            <div>下限警報: {rack.lowerAlarm}A</div>
        </div>
    )
}
export default RackTooltip;