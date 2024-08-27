export const AppBar = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            100xBets
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center bg-slate-700 hover:bg-[#37b346] focus:ring-green-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2   text-gray-400  hover:bg-gray-700  focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  md: bg-transparent  border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  bg-blue-700 rounded md:bg-transparent md:text-[#00FF00] md: text-[#00FF00]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#00FF00] md:   text-white     md: hover:bg-transparent  border-gray-700"
              >
                Casino
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#00FF00] md:   text-white     md: hover:bg-transparent  border-gray-700"
              >
                Sports
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#00FF00] md:   text-white     md: hover:bg-transparent  border-gray-700"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
