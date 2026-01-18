// export const dbs_4 = [
//   { id: "DB1", name: "DB1", col: 12, row: 1, status: "Active" },
//   { id: "DB2", name: "DB2", col: 12, row: 2, status: "Active" },
//   { id: "DB3", name: "DB3", col: 12, row: 3 , status: "Active" },
//   { id: "DB4", name: "DB4", col: 12, row: 4 , status: "Active" },
//   { id: "DB5", name: "DB5", col: 12, row: 5 , status: "Active" },
//   { id: "DB6", name: "DB6", col: 12, row: 6 , status: "Active" },
//   { id: "DB7", name: "DB7", col: 12, row: 7 , status: "Active" },
//   { id: "DB8", name: "DB8", col: 12, row: 8, status: "Active" },
// ];


// export const racks_4 = [
//   // D ROW2
//   { id: "D-1", name: "D-1", col: 1, row: 2, current: 0.45, status: "normal" },
//   { id: "D-2", name: "D-2", col: 2, row: 2, current: 0.48, status: "normal" },
//   { id: "D-3", name: "D-3", col: 3, row: 2, current: 0.52, status: "normal" },
//   { id: "D-4", name: "D-4", col: 4, row: 2, current: 0.60, status: "warning" },
//   { id: "D-5", name: "D-5", col: 5, row: 2, current: 0.55, status: "normal" },
//   { id: "D-6", name: "D-6", col: 6, row: 2, current: 0.70, status: "warning" },
//   { id: "D-7", name: "D-7", col: 7, row: 2, current: 0.40, status: "normal" },
//   { id: "D-8", name: "D-8", col: 8, row: 2, current: 0.35, status: "normal" },
//   { id: "D-9", name: "D-9", col: 9, row: 2, current: 0.90, status: "error" },
//   { id: "D-10", name: "D-10", col: 10, row: 2, current: 0.50, status: "normal" },

//   // C ROW4
//   { id: "C-1", name: "C-1", col: 1, row: 4, current: 0.55, status: "normal" },
//   { id: "C-2", name: "C-2", col: 2, row: 4, current: 0.60, status: "warning" },
//   { id: "C-3", name: "C-2", col: 3, row: 4, current: 0.60, status: "warning" },
//   { id: "C-4", name: "C-4", col: 4, row: 4, current: 0.52, status: "normal" },
//   { id: "C-5", name: "C-5", col: 5, row: 4, current: 0.58, status: "normal" },
//   { id: "C-6", name: "C-6", col: 6, row: 4, current: 0.62, status: "warning" },
//   { id: "C-7", name: "C-7", col: 7, row: 4, current: 0.45, status: "normal" },
//   { id: "C-8", name: "C-8", col: 8, row: 4, current: 0.50, status: "normal" },
//   { id: "C-9", name: "C-9", col: 9, row: 4, current: 0.65, status: "warning" },
//   { id: "C-10",name: "C-10", col: 10, row: 4, current: 0.40, status: "normal" },
//   // B ROW 
//   { id: "B-1", name: "B-1", col: 1, row: 6, current: 0.60, status: "warning" },
//   { id: "B-2", name: "B-2", col: 2, row: 6, current: 0.55, status: "normal" },
//   { id: "B-3", name: "B-3", col: 3, row: 6, current: 0.48, status: "normal" },
//   { id: "B-4", name: "B-4", col: 4, row: 6, current: 0.70, status: "warning" },
//   { id: "B-5", name: "B-5", col: 5, row: 6, current: 0.75, status: "error" },
//   { id: "B-6", name: "B-6", col: 6, row: 6, current: 0.50, status: "normal" },
//   { id: "B-7", name: "B-7", col: 7, row: 6, current: 0.45, status: "normal" },
//   { id: "B-8", name: "B-8", col: 8, row: 6, current: 0.55, status: "normal" },
//   { id: "B-9", name: "B-9", col: 9, row: 6, current: 0.68, status: "warning" },
//   { id: "B-10", name: "B-10", col: 3, row: 6, current: 0.48, status: "normal" },
//   { id: "B-11",name:"B-11", col: 10,row: 6,current: 0.42, status: "normal" },

//   // A ROW 
//   { id: "A-1", name: "1", col: 1, row: 8, current: 0.50, status: "normal" },
//   { id: "A-2", name: "A-2", col: 2, row: 8, current: 0.52, status: "normal" },
//   { id: "A-3", name: "A-3", col: 3, row: 8, current: 0.55, status: "normal" },
//   { id: "A-4", name: "A-4", col: 4, row: 8, current: 0.60, status: "warning" },
//   { id: "A-5", name: "A-5", col: 5, row: 8, current: 0.65, status: "warning" },
//   { id: "A-6", name: "A-6", col: 6, row: 8, current: 0.70, status: "warning" },
//   { id: "A-7", name: "A-7", col: 7, row: 8, current: 0.45, status: "normal" },
//   { id: "A-8", name: "A-8", col: 8, row: 8, current: 0.48, status: "normal" },
//   { id: "A-9", name: "A-9", col: 9, row: 8, current: 0.80, status: "error" },
//   { id: "A-10",name:"A-10", col: 10,row: 8, current: 0.50, status: "normal" }
// ];

// // db - rack => show detail info
// export const dbRackConnections_4 = [
//   {
//     dbId: "DB1",
//     racks: [
//       {
//         rackId: "A-1",
//         status: "normal",
//         lines: [
//           { voltage: "100V", current: 12.3 },
//           { voltage: "200V", current: 8.4 }
//         ]
//       },
//       {
//         rackId: "A-2",
//         status: "warning",
//         lines: [
//           { voltage: "100V", current: 15.1 }
//         ]
//       }
//     ]
//   },

//   {
//     dbId: "DB2",
//     racks: [
//       {
//         rackId: "B-1",
//         status: "error",
//         lines: [
//           { voltage: "100V", current: 18.5 },
//           { voltage: "200V", current: 14.2 },
//           { voltage: "300V", current: 9.1 }
//         ]
//       },
//       {
//         rackId: "B-2",
//         status: "normal",
//         lines: [
//           { voltage: "200V", current: 6.8 }
//         ]
//       }
//     ]
//   },

//   {
//     dbId: "DB3",
//     racks: [
//       {
//         rackId: "C-1",
//         status: "normal",
//         lines: [
//           { voltage: "100V", current: 10.2 }
//         ]
//       }
//     ]
//   }
// ];


