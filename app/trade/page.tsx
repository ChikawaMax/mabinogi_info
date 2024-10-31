import { createClient } from '@/app/utils/supabase/server';
import { Tradetable } from '@/components/tradetable/table';

export const revalidate = 0;

const Home = async () => {
  const supabase = createClient();

  const { data: trades, error } = await supabase.from('trade').select();

  if (error) {
    return <div>DBの取得でエラーが発生しました</div>;
  }

  return (
    <main className="mb-28">
      <Tradetable trades={trades} />
    </main>
  );
};

export default Home;
