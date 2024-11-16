import { Tradetable } from '@/components/tradetable/table';
import { fetchNotionData } from '@/lib/notion';
import { TradeObj } from '../types/types';

export const revalidate = 0;

const Home = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID || '';
  const trades = (await fetchNotionData(databaseId)) as unknown as TradeObj[];
  return (
    <main className="mb-28">
      <Tradetable trades={trades} />
    </main>
  );
};

export default Home;
