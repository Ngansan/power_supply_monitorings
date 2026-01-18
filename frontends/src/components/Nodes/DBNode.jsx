function DBNode({data, selected, onClick, style}){
    return(
        <div className={`db ${selected ? "selected": ""}`}
            style={style}
            onClick={() => onClick(data.id)}
        >
            <div className="db-name">{data.name}</div>
            <div className="db-status">Status: {data.status}</div>
        </div>
    )
}
export default DBNode;