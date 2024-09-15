'use client';

import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';

export const CreateTableBody = ({
  trades,
  filtable,
}: {
  trades: TradeObj[];
  filtable: TradeObj[];
}) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  return (
    <>
      <TableBody>
        {filtable.map((trade) => (
          <TableRow
            key={trade.id}
            className={
              selectedRows.includes(trade.id)
                ? 'bg-violet-600 hover:bg-violet-700'
                : ''
            }
          >
            <TableCell className="text-center">
              <Checkbox onClick={() => toggleRowSelection(trade.id)} />
            </TableCell>
            <TableCell className="text-center">{trade.location}</TableCell>
            <TableCell className="text-center">{trade.item}</TableCell>
            <TableCell className="text-center">{trade.item_quantity}</TableCell>
            <TableCell className="text-center">{trade.material}</TableCell>
            <TableCell className="text-center">
              {trade.material_quantity}
            </TableCell>
            <TableCell className="text-center">{trade.skill}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};
