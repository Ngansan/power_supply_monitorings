export const dbs = [
  { id: "4N-1", name: "4N-1", x: 1200, y: 100, status: "Active" },
  { id: "DB2", name: "DB2", x: 1200, y: 200, status: "Active" },
  { id: "DB3", name: "DB3", x: 1200, y: 300 , status: "Active" },
  { id: "DB4", name: "DB4", x: 1200, y: 400 , status: "Active" },
  { id: "DB5", name: "DB5", x: 1200, y: 500 , status: "Active" },
  { id: "DB6", name: "DB6", x: 1200, y: 600 , status: "Active" },
  { id: "DB7", name: "DB7", x: 1200, y: 700 , status: "Active" },
  { id: "DB8", name: "DB8", x: 1200, y: 800, status: "Active" },
];


export const racks = [
  // D ROW
  { id: "D-1", name: "D-1", x: 100, y: 150, current: 0.45, status: "normal" },
  { id: "D-2", name: "D-2", x: 200, y: 150, current: 0.48, status: "normal" },
  { id: "D-3", name: "D-3", x: 300, y: 150, current: 0.52, status: "normal" },
  { id: "D-4", name: "D-4", x: 400, y: 150, current: 0.60, status: "warning" },
  { id: "D-5", name: "D-5", x: 500, y: 150, current: 0.55, status: "normal" },
  { id: "D-6", name: "D-6", x: 600, y: 150, current: 0.70, status: "warning" },
  { id: "D-7", name: "D-7", x: 700, y: 150, current: 0.40, status: "normal" },
  { id: "D-8", name: "D-8", x: 800, y: 150, current: 0.35, status: "normal" },
  { id: "D-9", name: "D-9", x: 900, y: 150, current: 0.90, status: "error" },
  { id: "D-10", name: "D-10", x: 1000, y: 150, current: 0.50, status: "normal" },

  // C ROW
  { id: "C-1", name: "C-1", x: 100, y: 350, current: 0.55, status: "normal" },
  { id: "C-2", name: "C-2", x: 200, y: 350, current: 0.60, status: "warning" },
  { id: "C-3", name: "C-3", x: 300, y: 350, current: 0.48, status: "normal" },
  { id: "C-4", name: "C-4", x: 400, y: 350, current: 0.52, status: "normal" },
  { id: "C-5", name: "C-5", x: 500, y: 350, current: 0.58, status: "normal" },
  { id: "C-6", name: "C-6", x: 600, y: 350, current: 0.62, status: "warning" },
  { id: "C-7", name: "C-7", x: 700, y: 350, current: 0.45, status: "normal" },
  { id: "C-8", name: "C-8", x: 800, y: 350, current: 0.50, status: "normal" },
  { id: "C-9", name: "C-9", x: 900, y: 350, current: 0.65, status: "warning" },
  { id: "C-10",name: "C-10", x: 1000, y: 350, current: 0.40, status: "normal" },

  // B ROW 
  { id: "B-1", name: "B-1", x: 100, y: 550, current: 0.60, status: "warning" },
  { id: "B-2", name: "B-2", x: 200, y: 550, current: 0.55, status: "normal" },
  { id: "B-3", name: "B-3", x: 300, y: 550, current: 0.48, status: "normal" },
  { id: "B-4", name: "B-4", x: 400, y: 550, current: 0.70, status: "warning" },
  { id: "B-5", name: "B-5", x: 500, y: 550, current: 0.75, status: "error" },
  { id: "B-6", name: "B-6", x: 600, y: 550, current: 0.50, status: "normal" },
  { id: "B-7", name: "B-7", x: 700, y: 550, current: 0.45, status: "normal" },
  { id: "B-8", name: "B-8", x: 800, y: 550, current: 0.55, status: "normal" },
  { id: "B-9", name: "B-9", x: 900, y: 550, current: 0.68, status: "warning" },
  { id: "B-10",name:"B-10", x: 1000,y: 550,current: 0.42, status: "normal" },

  // A ROW 
  { id: "A-1", name: "1", x: 100, y: 750, current: 0.50, status: "normal" },
  { id: "A-2", name: "A-2", x: 200, y: 750, current: 0.52, status: "normal" },
  { id: "A-3", name: "A-3", x: 300, y: 750, current: 0.55, status: "normal" },
  { id: "A-4", name: "A-4", x: 400, y: 750, current: 0.60, status: "warning" },
  { id: "A-5", name: "A-5", x: 500, y: 750, current: 0.65, status: "warning" },
  { id: "A-6", name: "A-6", x: 600, y: 750, current: 0.70, status: "warning" },
  { id: "A-7", name: "A-7", x: 700, y: 750, current: 0.45, status: "normal" },
  { id: "A-8", name: "A-8", x: 800, y: 750, current: 0.48, status: "normal" },
  { id: "A-9", name: "A-9", x: 900, y: 750, current: 0.80, status: "error" },
  { id: "A-10",name:"A-10", x: 1000,y: 750, current: 0.50, status: "normal" }
];

// db - rack => show detail info
export const dbRackConnections = [
  {
    dbId: "DB1",
    racks: [
      {
        rackId: "A-1",
        status: "normal",
        lines: [
          { voltage: "100V", current: 12.3 },
          { voltage: "200V", current: 8.4 }
        ]
      },
      {
        rackId: "A-2",
        status: "warning",
        lines: [
          { voltage: "100V", current: 15.1 }
        ]
      }
    ]
  },

  {
    dbId: "DB2",
    racks: [
      {
        rackId: "B-1",
        status: "error",
        lines: [
          { voltage: "100V", current: 18.5 },
          { voltage: "200V", current: 14.2 },
          { voltage: "300V", current: 9.1 }
        ]
      },
      {
        rackId: "B-2",
        status: "normal",
        lines: [
          { voltage: "200V", current: 6.8 }
        ]
      }
    ]
  },

  {
    dbId: "DB3",
    racks: [
      {
        rackId: "C-1",
        status: "normal",
        lines: [
          { voltage: "100V", current: 10.2 }
        ]
      }
    ]
  }
];


