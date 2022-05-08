import clsx from 'clsx';
import React from 'react';

interface IFeedActionButton extends React.HTMLProps<HTMLButtonElement> {
  active?: boolean;
}

export const FeedActionButton = ({
  active,
  children,
  ...otherProps
}: IFeedActionButton) => {
  const buttonClasses = clsx(
    'rounded-full border border-gray-400 px-4 py-2 text-sm duration-200 ',
    {
      'bg-black text-white hover:bg-gray-800': !active,
      'bg-white text-black hover:bg-gray-800 hover:text-white': active,
    }
  );
  return (
    <button
      className={buttonClasses}
      {...otherProps}
      role="button"
      type="button"
    >
      {children}
    </button>
  );
};
