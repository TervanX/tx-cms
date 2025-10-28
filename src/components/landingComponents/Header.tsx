'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isWaitlistPage = pathname === '/contact/waitlist';

  // Waitlist page styling
  const backgroundColor = isWaitlistPage ? 'bg-white' : 'bg-black lg:bg-black/80';
  const borderColor = isWaitlistPage ? 'border-gray-200' : 'border-white/10';
  const textColor = isWaitlistPage ? 'text-black' : 'text-white';
  const hoverTextColor = isWaitlistPage ? 'hover:text-black/80' : 'hover:text-white/80';
  const buttonHoverBg = isWaitlistPage ? 'bg-black/80' : 'bg-primary/80';
  const buttonTextColor = isWaitlistPage ? 'text-white' : 'text-[#f0f0f2]';

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className={`flex w-full border-b ${borderColor} ${backgroundColor} px-3 py-3 font-semibold tracking-tight backdrop-blur-[58px] md:border-0 md:py-2`}>
        <ul className="flex items-center md:border md:border-transparent md:px-2 md:py-2">
          {!isWaitlistPage ? <Link href="/" className="px-0 flex items-center gap-2">
            <img
              src="/assets/logo.svg"
              alt="logo"
              width="28px"
              height="28px"
            />
            <p className={textColor}>Tervan X</p>
          </Link> :
            <Link href="/" className="px-0 flex items-center gap-2">
              <div className="bg-orange-500 rounded-lg p-1.5">
                <img
                  src="/assets/logo.svg"
                  alt="logo"
                  width="28px"
                  height="28px"
                  className="filter brightness-0 invert"
                />
              </div>
              <p className={textColor}>TX Switch</p>
            </Link>
          }
        </ul>

        {!isWaitlistPage && (
          <ul className="ml-auto flex items-center space-x-2 md:flex md:items-center md:space-x-4 md:py-2.5">
            <li className="group relative hidden md:block">
              <Link
                className={`text-base leading-none font-semibold tracking-tight cursor-pointer rounded-md border border-transparent px-2 py-2 transition-all duration-300 ${textColor} ${hoverTextColor}`}
                href="/contact/contact-sales"
              >
                Contact sales
              </Link>
            </li>
            <li className="group relative hidden md:block">
              <Link
                className={`text-base leading-none font-semibold tracking-tight cursor-pointer rounded-md border border-transparent px-2 py-2 transition-all duration-300 ${textColor} ${hoverTextColor}`}
                href="/auth/login"
              >
                Sign in
              </Link>
            </li>
            <Link href="/contact/request-access" className="group relative">
              <button className={`relative inline-block cursor-pointer rounded-md font-semibold tracking-tight whitespace-nowrap text-base px-4 py-2.5 leading-none overflow-hidden`}>
                <span className={`absolute inset-0 block w-full rounded-md transition-all duration-400 bg-primary group-hover:bg-primary/80`}></span>
                <span className={`relative z-10 ${buttonTextColor}`}>Get Started</span>
              </button>
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
}