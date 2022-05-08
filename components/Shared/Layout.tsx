import { Navigation } from 'components/Navigation';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full bg-black">
      <div className="mx-auto flex w-full max-w-[900px]">
        <header role="banner">
          <Navigation />
        </header>
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};
