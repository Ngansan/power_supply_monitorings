// import { type } from "@testing-library/user-event/dist/type";


// export const nodes = [
//   { id: "A1", position: { x: 50, y: 100 }, data: { label: "A1" }, type: "input" },
//   { id: "R1", position: { x: 300, y: 50 }, data: { label: "A1-1\n12A" } },
//   { id: "R2", position: { x: 300, y: 150 }, data: { label: "A1-2\n10A" } }
// ];

// export const edges = [
//   { id: "e1", source: "A1", target: "R1" },
//   { id: "e2", source: "A1", target: "R2" }
// ];


// export const rackA = Array.from({length: 10}).map((_,i) =>({
//     id: `A-${i+1}`,
//     data: {label: `A-${i+1}\n0.5A`},
//     position: {x: 100+i*60, y: 500},
//     type: "default"
// }));

// export const dbNodes = Array.from({length: 8}).map((_,i) =>({
//     id: `DB-A${i+1}`,
//     data: {label: `DB-A${i+1}`},
//     position: {x: 900, y: 50+i*70},
//     type: "input"
// }));
// export const allEdges = [
//   { id: "e1", source: "DB-A1", target: "A-1" },
//   { id: "e2", source: "DB-A1", target: "A-2" },
//   { id: "e3", source: "DB-A2", target: "B-1" }
// ];


// export const [selectedDB, setSelectedDB] = useState(null)

// export const visibleEdges = selectedDB
// ? allEdges.filter(e => e.source === selectedDB)
// : [];

// export const onNodeClick = (_, node) => {
//     if(node.id.startsWith("DB")){
//         setSelectedDB(node.id);
//     }
// }


