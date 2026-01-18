import { useState, useMemo } from "react";
import "../../styles/RackDetailPanel.css";
import { fakeRackData, generateFakeTableData } from "../../utils/fakeRackData";
// import "../../styles/RackDataTable.css";
import RackCurrentGraph from "./RackCurrentGraph";
import RackCurrentLog from "./RackCurrentLog";
import RackEnergyChart from "./RackEnergyChart";
import RackEnergyExplain from "./RackEnergyExplain";
import { calEnSum } from "../../utils/energySum";

const TABS = [
            { key: "current", label: "電流値" },
            { key: "hourly", label: "時間別電力量" },
            { key: "daily", label: "日別電力量" },
            { key: "monthly", label: "月別電力量" }
];

function RackDetailPanel({rack, onClose}){
    const [activeTab, setActiveTab] = useState("current");
    const [view, setView] = useState("graph");

    // const tabData = fakeRackData[activeTab];
    // para for log table
    const currentData = useMemo(() => {
        return generateFakeTableData(24);
    }, [])

    /*================para for energyTab -  時間別電力量　日別電力量　月別電力量==============*/
    const tabDataMap = {
        hourly: fakeRackData.hourlyEnergy,
        daily: fakeRackData.dailyEnergy,
        monthly: fakeRackData.monthlyEnergy
    };
    const energyTabs = ["hourly", "daily", "monthly"];
    const currentDataEn = tabDataMap[activeTab] || [];

    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{rack.name}</h3>
                    <button onClick={onClose}>X</button>
                </div>
{/* ======================================================== */}
                <div className="modal-tabs">
                    {TABS.map(tab => (
                        <button
                            key={tab.key}
                            className={activeTab === tab.key ? "active" : ""}
                            onClick={() => {
                                setActiveTab(tab.key);
                                setView("graph");
                            }}
                        >
                            {tab.label}
                        </button>
                    ))
                    }
                </div>
{/* =============================================== */}
                <div className="view-switch">
                    <button
                        className={view === "graph" ? "active" : ""}
                        onClick={() => setView("graph")}
                    >
                        グラフ
                    </button>
                    <button
                        className={view === "log" ? "active" : ""}
                        onClick={() => setView("log")}
                    >
                        ログ
                    </button>
                </div>
{/* ========================================== */}
                <div className="modal-content">
                    {view === "graph" ? (
                        <>
                            {activeTab === "current" && (
                                <RackCurrentGraph data={currentData} type={activeTab}/>
                            )}

                            {energyTabs.includes(activeTab) && (
                                <>
                                    <RackEnergyChart data={currentDataEn}/>
                                    <RackEnergyExplain summary={calEnSum(currentDataEn)}/>
                                </>
                            )}
                        </>
                    ):(
                        <RackCurrentLog data={currentData} type={activeTab}/>
                    )
                    }
                </div>
            </div>
        </div>

    )
}
export default RackDetailPanel;