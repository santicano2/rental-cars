import { TableReservesProps } from "./TableReserves.types";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  return (
    <Table>
      <TableCaption>A list of recent reservations</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Car</TableHead>
          <TableHead>Date start</TableHead>
          <TableHead>Date end</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.carName}</TableCell>
            <TableCell>
              {new Date(order.orderDate).toLocaleDateString()}
            </TableCell>
            <TableCell>
              {new Date(order.orderEndDate).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <div className="p-2 text-white bg-green-600 rounded-lg w-fit capitalize">
                {order.status}
              </div>
            </TableCell>
            <TableCell>{order.totalAmount} $</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
