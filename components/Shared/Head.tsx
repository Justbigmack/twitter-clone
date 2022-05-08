import { default as PageHead } from 'next/head';

interface IHead {
  title: string;
}

export const Head: React.FC<IHead> = ({ title }) => {
  return (
    <PageHead>
      <title>{`Instana code challenge | ${title}`}</title>
      <meta name="description" content="Simplified Twitter homepage clone" />
      <link rel="icon" href="/favicon.ico" />
    </PageHead>
  );
};
