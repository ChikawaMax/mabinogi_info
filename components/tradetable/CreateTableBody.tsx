'use client';

import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { TradeObj } from '@/app/types/types';

export const CreateTableBody = ({ filtable }: { filtable: TradeObj[] }) => {
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
            key={trade.properties.id.number}
            className={
              selectedRows.includes(trade.properties.id.number)
                ? 'bg-violet-600 hover:bg-violet-700'
                : ''
            }
          >
            <TableCell className="text-center">
              <Checkbox
                onClick={() => toggleRowSelection(trade.properties.id.number)}
              />
            </TableCell>
            <TableCell className="text-center">
              {trade.properties.location.select.name}
            </TableCell>
            <TableCell className="text-center">
              {trade.properties.item.title[0].plain_text}
            </TableCell>
            <TableCell className="text-center">
              {trade.properties.item_quantity.number}
            </TableCell>
            <TableCell className="text-center">
              {trade.properties.material.rich_text[0].plain_text}
            </TableCell>
            <TableCell className="text-center">
              {trade.properties.material_quantity.number}
            </TableCell>
            <TableCell className="text-center">
              {trade.properties.skill.rich_text[0].plain_text}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};
