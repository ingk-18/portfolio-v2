import React from "react";

const stack = () => {
  return (
    <div>
      <section className="text-gray-700 border-t font-serif border-gray-200 min-h-screen bg-black">
        <div className="container py-24 px-5 mx-auto flex-wrap">
          <h1 className="text-3xl sm:text-6xl mb-5">Stack</h1>

          <div className="flex justify-between items-center py-4">
            <div>
              <img width="300" height="300" src="./img/php.jpg" alt="" />
            </div>

            <h1 className="text-3xl sm:text-6xl">php</h1>
            <h1 className="text-3xl sm:text-6xl">CakePHP</h1>
            <h1 className="text-3xl sm:text-6xl">Laravel</h1>
          </div>

          <div className="flex justify-between items-center py-4">
            <div>
              <img width="300" height="300" src="./img/javascript.jpg" alt="" />
            </div>

            <h1 className="text-3xl sm:text-6xl">JavaScript</h1>
            <h1 className="text-3xl sm:text-6xl">React</h1>
            <h1 className="text-3xl sm:text-6xl">jQuery</h1>
          </div>

          <div className="flex justify-between items-center py-4">
            <div>
              <img width="300" height="300" src="./img/others.jpg" alt="" />
            </div>

            <h1 className="text-3xl sm:text-6xl">Others</h1>
            <h1 className="text-3xl sm:text-6xl">Docker</h1>
            <h1 className="text-3xl sm:text-6xl">AWS</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default stack;
