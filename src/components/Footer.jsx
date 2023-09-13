function Footer() {
  return (
    <footer className="rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://nottheroot.in/" className="hover:underline">
            nottheroot | CySec
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/bishwassagar/nottheroot" className="hover:underline">
                 Powered by GitHub Pages 🔥
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;