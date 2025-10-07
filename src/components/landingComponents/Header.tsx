export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className="flex w-full border-b border-white/10 bg-black px-3 py-3 font-semibold tracking-tight backdrop-blur-[58px] md:border-0 md:py-2 lg:bg-black/80">
        <ul className="flex items-center md:border md:border-transparent md:px-2 md:py-2">
          <li className="pointer-events-none px-0">
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 232 228" className="h-8 w-8 lg:h-9 lg:w-9">
                <path fill="currentColor" d="M198.821 125.463a7.7 7.7 0 0 1-2.227 5.419 7.57 7.57 0 0 1-5.376 2.245 7.58 7.58 0 0 1-5.376-2.245 7.7 7.7 0 0 1-2.227-5.419V57c0-2.032.801-3.981 2.227-5.418a7.57 7.57 0 0 1 5.376-2.245c2.017 0 3.95.807 5.376 2.245A7.7 7.7 0 0 1 198.821 57zm-2.639 47.437c-1.005 1.013-29.28 24.763-81.118 24.763s-79.923-23.623-81.117-24.637a7.5 7.5 0 0 1-1.824-2.303 7.59 7.59 0 0 1 .944-8.337 7.59 7.59 0 0 1 5.173-2.63 7.57 7.57 0 0 1 5.509 1.807c.44.317 25.699 20.963 71.253 20.963s71.001-20.773 71.252-20.963a7.686 7.686 0 0 1 10.745.823 7.57 7.57 0 0 1 1.78 5.445 7.56 7.56 0 0 1-2.534 5.132zM31.245 57a7.75 7.75 0 0 1 2.53-5.314 7.63 7.63 0 0 1 5.513-1.969 7.58 7.58 0 0 1 4.968 2.256A7.7 7.7 0 0 1 46.45 57v68.337a7.7 7.7 0 0 1-2.226 5.418A7.57 7.57 0 0 1 38.848 133a7.57 7.57 0 0 1-5.376-2.245 7.7 7.7 0 0 1-2.227-5.418zm38.14-15.2a7.75 7.75 0 0 1 2.53-5.314 7.63 7.63 0 0 1 5.512-1.969 7.58 7.58 0 0 1 4.969 2.256A7.7 7.7 0 0 1 84.59 41.8v101.333a7.7 7.7 0 0 1-2.227 5.419 7.57 7.57 0 0 1-5.376 2.244 7.57 7.57 0 0 1-5.375-2.244 7.7 7.7 0 0 1-2.227-5.419zm38.328-3.8c0-2.032.801-3.981 2.227-5.418a7.57 7.57 0 0 1 5.376-2.245c2.016 0 3.95.808 5.376 2.245A7.7 7.7 0 0 1 122.919 38v110.2a7.7 7.7 0 0 1-2.227 5.419 7.57 7.57 0 0 1-5.376 2.244 7.57 7.57 0 0 1-5.376-2.244 7.7 7.7 0 0 1-2.227-5.419zm37.7 3.8c0-2.032.801-3.981 2.227-5.418a7.57 7.57 0 0 1 5.376-2.245 7.57 7.57 0 0 1 5.376 2.245 7.7 7.7 0 0 1 2.226 5.418v101.333a7.7 7.7 0 0 1-2.226 5.419 7.57 7.57 0 0 1-5.376 2.244 7.57 7.57 0 0 1-5.376-2.244 7.7 7.7 0 0 1-2.227-5.419z" />
              </svg>
            </a>
          </li>
        </ul>

        <ul className="ml-auto flex items-center space-x-2 md:flex md:items-center md:space-x-4 md:py-2.5">
          <li className="group relative hidden md:block">
            <a className="text-base leading-none font-semibold tracking-tight cursor-pointer rounded-md border border-transparent px-2 py-2 transition-all duration-300 text-white hover:text-white/80" href="#">
              Contact sales
            </a>
          </li>
          <li className="group relative hidden md:block">
            <a className="text-base leading-none font-semibold tracking-tight cursor-pointer rounded-md border border-transparent px-2 py-2 transition-all duration-300 text-white hover:text-white/80" href="#">
              Sign in
            </a>
          </li>
          <li className="group relative">
            <a className="text-base leading-none font-semibold tracking-tight cursor-pointer rounded-md border border-transparent px-2 py-2 transition-all duration-300 text-white hover:text-white/80" href="#">
              View demo
            </a>
          </li>
          <li className="group relative">
            <button className="relative inline-block cursor-pointer rounded-md font-semibold tracking-tight whitespace-nowrap text-black text-base px-4 py-2.5 leading-none overflow-hidden">
              <span className="absolute inset-0 block w-full rounded-md transition-all duration-400 bg-white group-hover:bg-white/80"></span>
              <span className="relative z-10">Start free trial</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}