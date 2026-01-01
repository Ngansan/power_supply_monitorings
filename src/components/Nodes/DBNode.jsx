function DBNode({data, selected, onClick}){
    return(
        <div className={`db ${selected ? "selected": ""}`}
            style={{top: data.y, left: data.x}}
            onClick={() => onClick(data.id)}
        >
            <div className="db-name">{data.name}</div>
            <div className="db-status">Status: {data.status}</div>
        </div>
    )

}
export default DBNode;