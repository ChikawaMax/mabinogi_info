'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import { crombas } from './CromObj';

const CromBody = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };
  return (
    <TableBody>
      {crombas.map((crom) => (
        <TableRow
          key={crom.id}
          className={
            selectedRows.includes(crom.id)
              ? 'bg-stone-600 hover:bg-stone-700'
              : ''
          }
        >
          <TableCell>
            <Checkbox onClick={() => toggleRowSelection(crom.id)} />
          </TableCell>
          <TableCell>{crom.level}</TableCell>
          <TableCell className={crom.room1.color}>{crom.room1.info}</TableCell>
          <TableCell className={crom.room2.color}>{crom.room2.info}</TableCell>
          <TableCell className={crom.room3.color}>{crom.room3.info}</TableCell>
          <TableCell className={crom.room4.color}>{crom.room4.info}</TableCell>
          <TableCell className={crom.room5.color}>{crom.room5.info}</TableCell>
          <TableCell className={crom.room6.color}>{crom.room6.info}</TableCell>
          <TableCell className={crom.room7.color}>{crom.room7.info}</TableCell>
          <TableCell className={crom.room8.color}>{crom.room8.info}</TableCell>
          <TableCell></TableCell>
          {crom.room9 ? (
            <TableCell className={crom.room9.color}>
              {crom.room9.info}
            </TableCell>
          ) : (
            <TableCell></TableCell>
          )}
          <TableCell></TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CromBody;
