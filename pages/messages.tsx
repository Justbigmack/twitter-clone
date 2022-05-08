import { NextPage } from 'next';
import { Head } from 'components/Shared';
import { Layout } from 'components/Shared';

const MessagesPage: NextPage = () => {
  return (
    <Layout>
      <Head title="Messages" />
      <div className="text-white">Messages page would have lived here</div>
    </Layout>
  );
};

export default MessagesPage;
