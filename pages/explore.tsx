import { NextPage } from 'next';
import { Head } from 'components/Shared';
import { Layout } from 'components/Shared';

const ExplorePage: NextPage = () => {
  return (
    <Layout>
      <Head title="Explore" />
      <div className="text-white">Explore page would have lived here</div>
    </Layout>
  );
};

export default ExplorePage;
