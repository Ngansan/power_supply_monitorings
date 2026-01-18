import { BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from "recharts";

function RackEnergyChart({data}){
    return(
        <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data}>
                <XAxis dataKey="datetime" hide/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="value" fill="blue"/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default RackEnergyChart;