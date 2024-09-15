'use client';

import { Table } from '@/components/ui/table';
import { useState } from 'react';
import { FilterButtons } from './FilterButtons';
import { CreateTableBody } from './CreateTableBody';
import { CreateHeaderBody } from './CreateHeaderBody';

export const Tradetable = ({ trades }: { trades: TradeObj[] }) => {
  const [filtable, setFiltable] = useState<TradeObj[]>(trades);

  return (
    <>
      <div className="ml-9 mt-4">
        <h1 className="text-2xl">物々交換リスト</h1>
        <FilterButtons
          trades={trades}
          filtable={filtable}
          setFiltable={setFiltable}
        />
      </div>
      <Table>
        <CreateHeaderBody trades={trades} setFiltable={setFiltable} />
        <CreateTableBody filtable={filtable} />
      </Table>
    </>
  );
};
