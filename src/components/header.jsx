import React from "react";

const header = () => {
  return (
    <div>
      <header className="text-gray-700 bg-black font-serif">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center justify-center text-white">
          <span className="text-xl ml-3 mb-4 md:mb-0">GAKY</span>
          <nav className="md:ml-auto text-base">
            <a
              href="https://github.com/ingk-18"
              className="mr-5 hover:text-blue-400 duration-300"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/ExplorerZine"
              className="mr-5 hover:text-blue-400 duration-300"
              target="_blank"
            >
              Twitter
            </a>

            <a
              href="https://explore-zine.com/"
              className="hover:text-blue-400 duration-300"
              target="_blank"
            >
              Blog
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default header;
