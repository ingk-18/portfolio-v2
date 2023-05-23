import React from "react";

const top = () => {
  return (
    <div>
      <section
        className="text-white min-h-screen bg-cover object-cover flex flex-col justify-end"
        style={{
          backgroundImage: `url('./img/img4.jpg')`,
        }}
        id="home"
      >
        <div className="flex flex-col justify-end object-cover">
          <div className="container flex mx-auto py-20 px-5 flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
              <h1 className="text-3xl sm:text-6xl font-medium mb-4">
                Introducing GAKY
                <br />
                Web Developer
              </h1>
              <p className="mb-8 leading-relaxed">
                Nice to meet you, I started working as a web engineer in 2022
                after working as a local government employee.
                <br />I take pleasure in providing the skills and experiences I
                have learned to my users.
              </p>
              {/* <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button> */}
            </div>
            <div className="md:w-1/2 lg:max-w-lg flex justify-center">
              {/* <img src="./img/icon.jpg" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default top;
