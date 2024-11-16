'use client';

import { Table } from '@/components/ui/table';
import CromBody from './CromBody';
import CromHeader from './CromHeader';
import { crombas } from './CromObj';
import { useState } from 'react';
import { cromOBJ } from '@/app/types/types';
import { CrombasFilter } from './CrombasFilter';

const CrombasTable = () => {
  const [selectTable, setSelectTable] = useState<cromOBJ[]>(crombas);

  return (
    <section className="mt-3 border p-4 mx-3 rounded-md">
      <div>
        例）<span className="text-red-500">大/2/2カ3フ</span>
      </div>
      <div>
        大部屋 / 全部で２沸き / 2沸き目カーリー 3沸き目ファントム /
        赤い魔法陣に入る
      </div>
      <div className="my-4">
        <CrombasFilter setSelectTable={setSelectTable} />
      </div>
      <Table>
        <CromHeader />
        <CromBody selectTable={selectTable} />
      </Table>
    </section>
  );
};

export default CrombasTable;
