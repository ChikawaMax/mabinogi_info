import { createClient } from '@/app/utils/supabase/server';
import { Tradetable } from '@/components/tradetable/table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const revalidate = 0;

const Home = async () => {
  const supabase = createClient();

  const { data: trades, error } = await supabase.from('trade').select();

  if (error) {
    return <div>DBの取得でエラーが発生しました</div>;
  }

  return (
    <main>
      <Tradetable trades={trades} />
    </main>
  );
};

export default Home;
