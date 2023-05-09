import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center justify-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">GAKY</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#About" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#Blog" className="hover:text-blue-400 duration-300">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section
        className="text-white min-h-screen bg-cover  object-cover flex flex-col justify-end"
        style={{
          backgroundImage: `url('./img/img4.jpg')`,
        }}
        id="home"
      >
        <div className="container flex mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl font-medium mb-4">
              Introducing GAKY
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus molestias nemo possimus aperiam accusamus facilis
              quaerat accusantium excepturi odit. Praesentium deleniti
              temporibus necessitatibus labore provident inventore maxime cum
              aspernatur dolore.
            </p>
            {/* <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button> */}
          </div>
          <div className="md:w-1/2 lg:max-w-lg flex justify-center">
            {/* <img src="./img/icon.jpg" alt="" /> */}
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200 min-h-screen">
        <div className="container flex py-24 px-5 mx-auto flex-wrap">
          <div className="md:w-1/2 flex justify-center lg:pr-4 md:pr-2">
            <img className="rounded-lg" src="./img/icon.jpg" alt="" />
          </div>
          <div className="md:w-1/2 font-serif lg:pl-4 md:pl-2">
            <h1 className="text-3xl sm:text-6xl">GAKY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              molestiae explicabo tempora. Tempore, provident. Voluptates porro
              quibusdam qui voluptate error! Consequuntur, quasi possimus nam
              doloremque consectetur nostrum ipsa? Dolor perspiciatis voluptatem
              asperiores, repudiandae omnis voluptatum, natus sed, voluptates ad
              rerum cum dignissimos sint incidunt consequuntur consequatur
              reiciendis excepturi laborum obcaecati voluptate culpa
              reprehenderit praesentium ipsum? Reiciendis veritatis molestiae,
              corporis quas nihil quaerat officia vero quo culpa iusto. Quos
              odit eum ipsam est, natus repudiandae laborum, cupiditate
              molestias dolores fugiat doloremque sint reprehenderit eveniet
              iusto fuga accusantium nam beatae ut officia? Dicta nihil minus
              hic quidem architecto! Culpa ullam fugit dolorum laudantium
              voluptatum tempore deleniti accusamus saepe aperiam asperiores in
              veniam quisquam officia ipsam, eum fuga assumenda sequi quia
              excepturi ad temporibus, quos cumque repellat! Saepe molestiae ut
              impedit, delectus tempore dolorem vel, beatae quam natus suscipit
              porro recusandae ratione! Eligendi provident quis accusamus
              quidem! Sint delectus tempore ratione explicabo maxime.
              Repudiandae ut perspiciatis, optio aliquam hic at quas quo
              molestiae, illum, saepe nobis obcaecati. Provident nostrum numquam
              placeat fugiat hic sit reiciendis id veniam adipisci nam possimus
              maxime blanditiis odio sint tempore expedita officia quibusdam
              nemo, aperiam quia sed harum? At dolorum ullam ea laboriosam
              consequuntur nesciunt corrupti porro sint.
            </p>
          </div>
        </div>
      </section>
      {/* about me バックアップ・カード */}
      <section className="text-gray-700 border-t border-gray-200 min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          {/* About Me */}
          <div className="mb-20">
            <h1 className="text-2xl sm:text-3xl mb-2 text-gray-900">
              About Me
            </h1>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet, molestias facilis. Dicta, quos asperiores voluptate
                    officia et totam enim delectus?
                  </p>
                  <a href="" className="flex mt-3 text-green-500 items-center">
                    もっとみる
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet, molestias facilis. Dicta, quos asperiores voluptate
                    officia et totam enim delectus?
                  </p>
                  <a href="" className="flex mt-3 text-green-500 items-center">
                    もっとみる
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet, molestias facilis. Dicta, quos asperiores voluptate
                    officia et totam enim delectus?
                  </p>
                  <a href="" className="flex mt-3 text-green-500 items-center">
                    もっとみる
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
