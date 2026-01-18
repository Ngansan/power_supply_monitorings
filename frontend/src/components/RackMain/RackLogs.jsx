const genTime = (h, m = 0) =>
  `2024-12-01 ${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;

export const rackLogs = {
  電流値: [
    { time: genTime(8), value: 32 },
    { time: genTime(9), value: 35 },
    { time: genTime(10), value: 40 },
    { time: genTime(11), value: 55 },
    { time: genTime(12), value: 60 },
    { time: genTime(13), value: 58 },
    { time: genTime(14), value: 52 }
  ],

  時間別電力量: [
    { time: "08:00", value: 12.5 },
    { time: "09:00", value: 14.2 },
    { time: "10:00", value: 15.8 },
    { time: "11:00", value: 18.3 },
    { time: "12:00", value: 20.1 }
  ],

  日別電力量: [
    { date: "11/28", value: 210 },
    { date: "11/29", value: 225 },
    { date: "11/30", value: 240 },
    { date: "12/01", value: 260 }
  ],

  月別電力量: [
    { month: "2024/09", value: 5200 },
    { month: "2024/10", value: 5600 },
    { month: "2024/11", value: 5900 },
    { month: "2024/12", value: 1200 }
  ]
};
