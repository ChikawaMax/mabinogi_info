import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import CromBody from './CromBody';
import CromHeader from './CromHeader';

const CrombasTable = () => {
  return (
    <section className="mt-3 border p-4 mx-3 rounded-md">
      <Table>
        <CromHeader />
        <CromBody />
      </Table>
    </section>
  );
};

export default CrombasTable;
