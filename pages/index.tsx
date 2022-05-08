import type { NextPage } from 'next';
import { Head } from 'components/Shared';
import { Layout } from 'components/Shared';
import { Feed } from 'components/Feed';

const Homepage: NextPage = () => {
  return (
    <Layout>
      <Head title="Homepage" />
      <Feed />
    </Layout>
  );
};

export default Homepage;
