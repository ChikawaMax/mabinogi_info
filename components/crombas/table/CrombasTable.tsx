'use client';

import { Table } from '@/components/ui/table';
import CromBody from './CromBody';
import CromHeader from './CromHeader';
import { crombas } from './CromObj';
import { useState } from 'react';
import { cromOBJ } from '@/app/typs/types';
import { CrombasFilter } from './CrombasFilter';

const CrombasTable = () => {
  const [selectTable, setSelectTable] = useState<cromOBJ[]>(crombas);

  return (
    <section className="mt-3 border p-4 mx-3 rounded-md">
      <CrombasFilter setSelectTable={setSelectTable} />
      <Table>
        <CromHeader />
        <CromBody selectTable={selectTable} />
      </Table>
    </section>
  );
};

export default CrombasTable;
