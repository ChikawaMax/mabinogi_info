'use client';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import { Filtertable } from './filtertable';
import { HeaderandSort } from './tableheader';

export const Tradetable = ({ trades }: { trades: TradeObj[] }) => {
  const [filtable, setFiltable] = useState<TradeObj[]>(trades);

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
            <TableRow key={trade.id}>
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
