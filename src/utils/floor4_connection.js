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
