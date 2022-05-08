import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

interface INavLink extends LinkProps {
  icon: React.ElementType;
  text?: string;
}

export const NavLink: React.FC<INavLink> = ({ icon, href, passHref, text }) => {
  const Icon = icon;
  const { pathname } = useRouter();

  const isNavLinkActive = pathname === href;

  const navLinkTextClasses = clsx(
    'ml-5 mr-4 hidden text-xl font-normal text-white xl:inline-flex',
    {
      'font-bold': isNavLinkActive,
    }
  );

  return (
    <Link href={href} passHref={passHref}>
      <a aria-label={text} role="link" className="group">
        <div className="flex w-min items-center rounded-full duration-200 group-hover:bg-gray-800 xl:p-3">
          <Icon className="m-3 h-[26px] w-[26px] text-white xl:m-0" />
          {text && <span className={navLinkTextClasses}>{text}</span>}
        </div>
      </a>
    </Link>
  );
};
