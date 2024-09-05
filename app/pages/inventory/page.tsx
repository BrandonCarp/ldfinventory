import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

const rows = [
  {
    key: "1",
    name: "",
    role: "",
    status: "",
  },
  {
    key: "1",
    name: "",
    role: "",
    status: "",
  },
  {
    key: "1",
    name: "",
    role: "",
    status: "",
  },
  {
    key: "1",
    name: "",
    role: "",
    status: "",
  },
];

const columns = [
  {
    key: "name",
    label: "Part Name",
  },
  {
    key: "description",
    label: "Part Description",
  },
  {
    key: "quantity",
    label: "Quantity",
  },
];

const getKeyValue = (item: any, columnKey: number) => {
  // Example logic: Return the value from the item object based on columnKey
  return item[columnKey] || "Default Value";
};
const LiveInventory = () => {
  return (
    <Table aria-label="LDF Live Table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey: any) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default LiveInventory;

// Have Filters For A-Z
// Filters for sizes
// Filters for colors
// Item Name - Description - In stock Quantity

// NextUI table
// https://nextui.org/docs/components/table
