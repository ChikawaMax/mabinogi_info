import { Button } from '@/components/ui/button';
import { crombas } from './CromObj';
import { Dispatch, SetStateAction } from 'react';
import { cromOBJ } from '@/app/types/types';

export const CrombasFilter = ({
  setSelectTable,
}: {
  setSelectTable: Dispatch<SetStateAction<cromOBJ[]>>;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectTable(
      crombas.filter(
        (prevTable) => prevTable.level === e.currentTarget.textContent
      )
    );
  };

  return (
    <div className="flex gap-2">
      <Button onClick={() => setSelectTable(crombas)}>全て表示</Button>
      {crombas.map((crom) => (
        <Button key={crom.id} onClick={handleClick}>
          {crom.level}
        </Button>
      ))}
    </div>
  );
};
