import { Dispatch, SetStateAction } from 'react';
import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';

export const CreateHeaderBody = ({
  trades,
  setFiltable,
}: {
  trades: TradeObj[];
  setFiltable: Dispatch<SetStateAction<TradeObj[]>>;
}) => {
  const [skillsort, setSkillsort] = useState<boolean>(true);

  const sortClick = () => {
    let sortTable;
    if (skillsort) {
      sortTable = [...trades].sort((a, b) => a.skill.localeCompare(b.skill));
    } else {
      sortTable = [...trades];
    }

    setFiltable(sortTable);
    setSkillsort(!skillsort);
  };
  return (
    <>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className="text-center">場所</TableHead>
          <TableHead className="text-center">材料</TableHead>
          <TableHead className="text-center">数</TableHead>
          <TableHead className="text-center">素材</TableHead>
          <TableHead className="text-center">素材の数</TableHead>
          <TableHead className="text-center" onClick={sortClick}>
            スキル {skillsort && '▲'}
          </TableHead>
        </TableRow>
      </TableHeader>
    </>
  );
};
