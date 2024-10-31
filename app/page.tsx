import { LinkCards } from '@/components/LinkCard';

const Home = () => {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LinkCards imgName="crombas" title="クロムバス攻略" />
          <LinkCards imgName="trade" title="物々交換リスト" />
        </div>
      </div>
    </main>
  );
};

export default Home;
