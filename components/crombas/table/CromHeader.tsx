import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

const headers = [
  '',
  'エルグ',
  '１部屋目',
  '2部屋目',
  '3部屋目',
  '4部屋目',
  '5部屋目',
  '6部屋目',
  '7部屋目',
  '8部屋目',
  'イルシャ',
  '９部屋目',
  'ギブネン',
];

const CromHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        {headers.map((head) => (
          <TableHead key={head}>{head}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default CromHeader;
