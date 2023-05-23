import React from "react";

const stack = () => {
  return (
    <div>
      <section className="text-white border-t font-serif border-gray-200 min-h-screen bg-black">
        <div className="container py-24 px-5 mx-auto">
          <h1 className="text-3xl sm:text-6xl mb-5">Stack</h1>

          <div className="flex flex-wrap flex-col  sm:flex-row justify-between items-center py-4">
            <div>
              <img width="300" height="300" src="./img/php.jpg" alt="" />
            </div>
            <h1 className="text-3xl sm:text-6xl py-6">php</h1>
            <h1 className="text-3xl sm:text-6xl py-6">CakePHP</h1>
            <h1 className="text-3xl sm:text-6xl py-6">Laravel</h1>
          </div>

          <div className="flex flex-wrap flex-col  sm:flex-row justify-between items-center py-4">
            <div>
              <img width="300" height="300" src="./img/javascript.jpg" alt="" />
            </div>

            <h1 className="text-3xl sm:text-6xl py-6">JavaScript</h1>
            <h1 className="text-3xl sm:text-6xl py-6">React</h1>
            <h1 className="text-3xl sm:text-6xl py-6">jQuery</h1>
          </div>

          <div className="flex flex-wrap flex-col  sm:flex-row justify-between items-center py-4">
            <div>
              <img width="300" height="300" src="./img/others.jpg" alt="" />
            </div>

            <h1 className="text-3xl sm:text-6xl py-6">Others</h1>
            <h1 className="text-3xl sm:text-6xl py-6">Docker</h1>
            <h1 className="text-3xl sm:text-6xl py-6">AWS</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default stack;
