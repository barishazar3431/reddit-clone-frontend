import React from 'react';
import { Link } from 'react-router-dom';
import CommunitiesDropDown from '../components/header/CommunitiesDropDown';
import HeaderSearchBar from '../components/header/HeaderSearchBar';

import HeaderNavButtons from '../components/header/HeaderNavButtons';
import ProfileDropDown from '../components/header/ProfileDropDown';
function Header() {
  return (
    <header className="fixed w-full h-12  bg-white dark:bg-neutral-900 py-[0.35rem] px-4 border-b-neutral-200 dark:border-b-neutral-700 border-b flex items-center gap-1">
      <Link to={'/'} className="flex gap-2 pr-5">
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-reddit-circle-512.png"
            alt="Reddit Logo"
            className="w-8"
          />
        </div>
        <span className="dark:text-neutral-300 text-black font-medium  text-xl  tracking-wide">
          reddit
        </span>
      </Link>

      <CommunitiesDropDown />
      <HeaderSearchBar />
      <HeaderNavButtons />
      <ProfileDropDown />
    </header>
  );
}

export default Header;
