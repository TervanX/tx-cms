
import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className="flex w-full border-b border-white/10 bg-black px-3 py-3 font-semibold tracking-tight backdrop-blur-[58px] md:border-0 md:py-2 lg:bg-black/80">
        <ul className="flex items-center md:border md:border-transparent md:px-2 md:py-2">
          <li className="pointer-events-none px-0 flex items-center gap-2">
            <a href="/">
              <img
                src="/assets/logo.svg"
                alt="logo"
                width="34px"
                height="34px"
              />
            </a>
            <p>Tervan X</p>
          </li>
        </ul>
        <ul className="ml-auto flex items-center space-x-2 md:flex md:items-center md:space-x-4 md:py-2.5">
          <li className="group relative hidden md:block">
            <Link
              className="text-base leading-none font-semibold tracking-tight cursor-pointer rounded-md border border-transparent px-2 py-2 transition-all duration-300 text-white hover:text-white/80"
              href="/contact-sales"
            >
              Contact sales
            </Link>
          </li>
          <li className="group relative hidden md:block">
            <Link
              className="text-base leading-none font-semibold tracking-tight cursor-pointer rounded-md border border-transparent px-2 py-2 transition-all duration-300 text-white hover:text-white/80"
              href="#"
            >
              Sign in
            </Link>
          </li>
          {/* <li className="group relative">
            <Link className="text-base leading-none font-semibold tracking-tight cursor-pointer rounded-md border border-transparent px-2 py-2 transition-all duration-300 text-white hover:text-white/80" href="#">
              View demo
            </Link>
          </li> */}
          <li className="group relative">
            <button className="relative inline-block cursor-pointer rounded-md font-semibold tracking-tight whitespace-nowrap text-black text-base px-4 py-2.5 leading-none overflow-hidden">
              <span className="absolute inset-0 block w-full rounded-md transition-all duration-400 bg-[#0d07ed] group-hover:bg-white/80"></span>
              <span className="relative z-10 text-[#f0f0f2]">Get Started</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
