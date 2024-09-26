// import {
//   Table,
//   TableHeader,
//   TableBody,
//   TableColumn,
//   TableRow,
//   TableCell,
// } from "@nextui-org/table";

// const rows = [
//   { key: "1", name: "Part 1", description: "Description 1", quantity: 10 },
//   { key: "2", name: "Part 2", description: "Description 2", quantity: 20 },
//   { key: "3", name: "Part 3", description: "Description 3", quantity: 30 },
//   { key: "4", name: "Part 4", description: "Description 4", quantity: 40 },
// ];

// const columns = [
//   { key: "name", label: "Part Name" },
//   { key: "description", label: "Part Description" },
//   { key: "quantity", label: "Quantity" },
// ];

// const getKeyValue = (item: any, columnKey: any) => {
//   return item[columnKey] || "Default Value";
// };

// const LiveInventory = () => {
//   return (
//     <Table aria-label="Example table with dynamic content">
//     <TableHeader>
//       {columns.map((column) =>
//         <TableColumn key={column.key}>{column.label}</TableColumn>
//       )}
//     </TableHeader>
//     <TableBody>
//       {rows.map((row) =>
//         <TableRow key={row.key}>
//           {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
//         </TableRow>
//       )}
//     </TableBody>
//   </Table>
//   );
// };

// export default LiveInventory;


// https://tanstack.com/table/latest/docs/installation