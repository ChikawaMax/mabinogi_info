'use client';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import { Filtertable } from './filtertable';
import { HeaderandSort } from './tableheader';
import { Checkbox } from '../ui/checkbox';

export const Tradetable = ({ trades }: { trades: TradeObj[] }) => {
  const [filtable, setFiltable] = useState<TradeObj[]>(trades);
  const [selectedRows, setSelectedRows] = useState<number[]>([]); // 選択された行のIDを格納

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  return (
    <>
      <div className="ml-9 mt-4">
        <h1 className="text-3xl">交易素材リスト</h1>
        <Filtertable
          trades={trades}
          filtable={filtable}
          setFiltable={setFiltable}
        />
      </div>
      <Table>
        <HeaderandSort trades={trades} setFiltable={setFiltable} />
        <TableBody>
          {filtable.map((trade) => (
            <TableRow
              key={trade.id}
              className={
                selectedRows.includes(trade.id)
                  ? 'bg-gray-400 hover:bg-gray-500'
                  : ''
              }
            >
              <TableCell className="text-center">
                <Checkbox
                  onClick={() => toggleRowSelection(trade.id)} // チェックボックスのクリックで背景色を切り替える
                />
              </TableCell>
              <TableCell className="text-center">{trade.location}</TableCell>
              <TableCell className="text-center">{trade.item}</TableCell>
              <TableCell className="text-center">
                {trade.item_quantity}
              </TableCell>
              <TableCell className="text-center">{trade.material}</TableCell>
              <TableCell className="text-center">
                {trade.material_quantity}
              </TableCell>
              <TableCell className="text-center">{trade.skill}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
