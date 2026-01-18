import "../../styles/DBModal.css";

function DBModal({dbId, connections, onClose}){
    const dbData = connections.find(c => c.dbId === dbId);

    return(
        <div className="modal-overlay-DB">
            <div className="modal-box-DB">
                {dbData?.racks.map(rack => (
                    <div key={rack.rackId} className="rack-card">
                        <div className="rack-header-DB">
                            <strong>{rack.rackId}</strong>
                            <span className={`status ${rack.status}`}>
                                {rack.status}
                            </span>
                        </div>
                        <table className="line-table-DB">
                            <thead>
                                <tr>
                                    <th>電圧</th>
                                    <th>電流[A]</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rack.lines.map((line, idx) => (
                                    <tr key={idx}>
                                        <td>{line.voltage}</td>
                                        <td>{line.current}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                ))}
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
        </div>
    );
}
export default DBModal;