import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="flex text-sm mx-auto w-full max-w-[1920px] px-3 md:px-4 col-span-full">
      <nav className="mt-3 flex h-fit flex-col gap-y-1.5 py-3 lg:mt-auto lg:flex-row lg:items-center lg:gap-y-0 lg:py-2">
        <Link className="font-sans text-base font-semibold lg:hidden block" href="/contact/contact-sales">
          Contact sales
        </Link>
        <Link className="font-sans text-base font-semibold lg:hidden block" href="#">
          Sign in
        </Link>
        <a className="font-sans relative cursor-pointer text-base font-normal text-white/60 transition-colors hover:text-white lg:mr-6 lg:py-3 mt-10 lg:mt-0" href="#">
          Terms
        </a>
        <a className="font-sans relative cursor-pointer text-base font-normal text-white/60 transition-colors hover:text-white lg:mr-6 lg:py-3" href="#">
          Privacy
        </a>
        <a className="font-sans relative cursor-pointer text-base font-normal text-white/60 transition-colors hover:text-white lg:mr-6 lg:py-3" href="#">
          Security
        </a>
        <div className="flex items-center lg:pl-3">
          <button className="font-sans leading-none border-none bg-transparent px-2 py-3 text-base text-white/60 hover:text-white">
            Your Privacy Choices
          </button>
        </div>
      </nav>
    </footer>
  );
}



