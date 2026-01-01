export const generateFakeTableData = ({
    count = 24,
    base = 5,
    range = 3, 
    intervalMin = 60,
    energy = false
} = {}) => {
    const rows = [];
    const now = Date.now();

    for(let i = 0; i < count; i ++){
        const min = +(base - Math.random()).toFixed(2);
        const max = +(base + range + Math.random()).toFixed(2);
        const value = +(Math.random()  * (max - min) + min).toFixed(2);
        const rate = +((value/max) * 100).toFixed(1);
        const timestamp = now - (count - i) * intervalMin *60*1000;

        const voltage = energy
            ? [100, 200, 300][Math.floor(Math.random()*3)]
            :null;
        
        const powerFactor = energy
            ? +(Math.random() * 0.2 + 0.8).toFixed(2)
            :null;

        rows.push({
            no: i+1,
            value,
            min,
            max,
            rate, 
            voltage,
            powerFactor,
            timestamp,
            datetime: new Date(timestamp).toLocaleString("ja-jp")
        });
    }
    return rows;
}

export const fakeRackData = {
  current: generateFakeTableData({ count: 24, intervalMinutes: 60, energy: false }),
  hourlyEnergy: generateFakeTableData({ count: 24, base: 10, energy: true }),
  dailyEnergy: generateFakeTableData({ count: 30, base: 50, intervalMin: 1440, energy: true }),
  monthlyEnergy: generateFakeTableData({ count: 12, base: 300, intervalMin: 43200, energy: true })
};
