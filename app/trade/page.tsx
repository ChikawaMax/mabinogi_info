import { Tradetable } from '@/components/tradetable/Tradetable';
import { fetchNotionData } from '@/lib/notion';
import { TradeObj } from '../types/types';

//10時間ごとに再生成
export const revalidate = 36000;

const Home = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID || '';
  if (!databaseId) {
    throw new Error('NOTION_DATABASE_ID is not defined');
  }

  // NotionのデータベースIDを環境変数から取得
  const trades = (await fetchNotionData(databaseId)) as unknown as TradeObj[];
  return (
    <main className="mb-28">
      <Tradetable trades={trades} />
    </main>
  );
};

export default Home;
