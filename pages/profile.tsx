import { NextPage } from 'next';
import { Head } from 'components/Shared';
import { Layout } from 'components/Shared';

const ProfilePage: NextPage = () => {
  return (
    <Layout>
      <Head title="Profile" />
      <div className="text-white">Profile page would have lived here</div>
    </Layout>
  );
};

export default ProfilePage;
