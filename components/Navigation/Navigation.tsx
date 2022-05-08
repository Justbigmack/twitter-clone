import { HashtagIcon, HomeIcon } from '@heroicons/react/solid';
import { BellIcon, MailIcon, UserIcon } from '@heroicons/react/outline';
import { NavLink } from './NavLink';

export const Navigation: React.FC = () => {
  return (
    <nav
      className="flex h-full flex-col gap-1 p-1 sm:px-3 md:p-1 lg:p-3"
      aria-label="Primary"
      role="navigation"
    >
      <NavLink icon={HomeIcon} text="Home" href="/" passHref={true} />
      <NavLink
        icon={HashtagIcon}
        text="Explore"
        href="/explore"
        passHref={true}
      />
      <NavLink
        icon={BellIcon}
        text="Notifications"
        href="/notifications"
        passHref={true}
      />
      <NavLink
        icon={MailIcon}
        text="Messages"
        href="/messages"
        passHref={true}
      />
      <NavLink icon={UserIcon} text="Profile" href="/profile" passHref={true} />
    </nav>
  );
};
