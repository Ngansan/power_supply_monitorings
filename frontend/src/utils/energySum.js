export const calEnSum = (data = []) =>{
    if(!data.length) return null;

    const values = data.map(d => d.value);
    const voltages = data.map(d => d.voltage).filter(Boolean);
    const pwf = data.map(d => d.powerFactor).filter(Boolean);

    return{
        min: Math.min(...values).toFixed(2),
        max: Math.max(...values).toFixed(2),
        voltage: (
            voltages.reduce((a,b) => a+b, 0) / voltages.length
        ).toFixed(0),
        powerFactor: (
            pwf.reduce((a,b) => a+b, 0) / pwf.length
        ).toFixed(2)
    };
}