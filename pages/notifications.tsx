import { NextPage } from 'next';
import { Head } from 'components/Shared';
import { Layout } from 'components/Shared';

const NotificationsPage: NextPage = () => {
  return (
    <Layout>
      <Head title="Notifications" />
      <div className="text-white">Notifications page would have lived here</div>
    </Layout>
  );
};

export default NotificationsPage;
