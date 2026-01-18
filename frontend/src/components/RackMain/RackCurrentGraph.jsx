import { CartesianGrid, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, Legend } from "recharts";

const Y_LABEL = {
  current: "電流値[A]",
  hourly: "電力量[kWh]",
  daily: "電力量[kWh]",
  monthly: "電力量[kWh]"
};

function RackCurrentGraph({data, type}){
    const chartData = data.map(d => ({
        time: d.datetime,
        actual: d.value,
        min: d.min,
        max: d.max
    }));

    return(
        <div style={{width: "100%", height: 560}}>
            <ResponsiveContainer>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis
                        dataKey="time"
                        tick={{fontSize: 11}}
                        interval={3}
                    />
                    <YAxis
                        label={{
                            value: Y_LABEL[type], 
                            angle: -90, 
                            position: "insideLeft"}}
                    />
                    <Tooltip/>
                    <Legend verticalAlign="bottom" height={36}/>

                    <Line
                        type="monotone"
                        dataKey="actual"
                        name="測定値"
                        stroke="orange"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="min"
                        name="最小値"
                        stroke="blue"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="max"
                        name="最大値"
                        stroke="red"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RackCurrentGraph;