'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const rooms0 = {
  room1: { color: 'text-green-500', info: '大/3/3カ' },
  room2: { color: 'text-green-500', info: '小/2/2カ' },
  room3: { color: 'text-green-500', info: '大/2/2フ' },
  room4: { color: 'text-green-500', info: '通/16' },
  room5: { color: 'text-yellow-500', info: '小/2/2カ' },
  room6: { color: 'text-green-500', info: '小/2/2フ' },
  room7: { color: 'text-green-500', info: '悪/2/2フ' },
  room8: { color: 'text-green-500', info: '大/4/3カ4フ' },
};

const rooms100 = {
  ...rooms0,
  room1: { ...rooms0.room1, color: 'text-red-500' },
  room2: { ...rooms0.room2, color: 'text-red-500' },
  room3: { color: 'text-yellow-500', info: '小/2/2カ3フ' },
  room4: { ...rooms0.room4, color: 'text-red-500' },
  room5: { color: 'text-red-500', info: '大/2' },
  room6: { color: 'text-red-500', info: '大/2/2カ3フ' },
  room7: { ...rooms0.room7, color: 'text-red-500' },
  room8: { ...rooms0.room8, color: 'text-red-500' },
  room9: { color: 'text-red-500', info: '大' },
};

interface cromOBJ {
  id: number;
  level: string;
  room1: { color: string; info: string };
  room2: { color: string; info: string };
  room3: { color: string; info: string };
  room4: { color: string; info: string };
  room5: { color: string; info: string };
  room6: { color: string; info: string };
  room7: { color: string; info: string };
  room8: { color: string; info: string };
  room9?: { color: string; info: string };
}

const crombas: cromOBJ[] = [
  {
    id: 1,
    level: '0%',
    ...rooms0,
  },
  {
    id: 2,
    level: '30%',
    ...rooms0,
    room6: { ...rooms0.room6, color: 'text-red-500' },
    room7: { ...rooms0.room7, color: 'text-red-500' },
    room8: { ...rooms0.room8, color: 'text-red-500' },
  },
  {
    id: 3,
    level: '40%',
    ...rooms100,
    room1: { ...rooms0.room1 },
    room4: { ...rooms0.room4 },
    room5: { ...rooms0.room5 },
    room9: { ...rooms100.room9, color: 'text-yellow-500' },
  },
  {
    id: 4,
    level: '50%',
    ...rooms100,
    room1: { ...rooms0.room1 },
    room4: { ...rooms0.room4 },
    room5: { ...rooms0.room5 },
  },
  {
    id: 8,
    level: '80%',
    ...rooms100,
    room1: { ...rooms0.room1 },
  },
  {
    id: 9,
    level: '90%',
    ...rooms100,
    room1: { ...rooms0.room1 },
    room9: { ...rooms100.room9, color: 'text-yellow-500' },
  },
  {
    id: 10,
    level: '100%',
    ...rooms100,
  },
];

const CrombasTable = () => {
  return (
    <section className="mt-3 border p-4 mx-3 rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>エルグ</TableHead>
            <TableHead>１部屋目</TableHead>
            <TableHead>2部屋目</TableHead>
            <TableHead>3部屋目</TableHead>
            <TableHead>4部屋目</TableHead>
            <TableHead>5部屋目</TableHead>
            <TableHead>6部屋目</TableHead>
            <TableHead>7部屋目</TableHead>
            <TableHead>8部屋目</TableHead>
            <TableHead>イルシャ</TableHead>
            <TableHead>９部屋目</TableHead>
            <TableHead>ギブネン</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {crombas.map((crom) => (
            <TableRow key={crom.id}>
              <TableCell>{crom.level}</TableCell>
              <TableCell className={crom.room1.color}>
                {crom.room1.info}
              </TableCell>
              <TableCell className={crom.room2.color}>
                {crom.room2.info}
              </TableCell>
              <TableCell className={crom.room3.color}>
                {crom.room3.info}
              </TableCell>
              <TableCell className={crom.room4.color}>
                {crom.room4.info}
              </TableCell>
              <TableCell className={crom.room5.color}>
                {crom.room5.info}
              </TableCell>
              <TableCell className={crom.room6.color}>
                {crom.room6.info}
              </TableCell>
              <TableCell className={crom.room7.color}>
                {crom.room7.info}
              </TableCell>
              <TableCell className={crom.room8.color}>
                {crom.room8.info}
              </TableCell>
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
      </Table>
    </section>
  );
};

export default CrombasTable;
