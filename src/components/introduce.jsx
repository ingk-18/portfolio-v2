import React from "react";

const introduce = () => {
  return (
    <div>
      <section className="text-white border-t border-gray-200 min-h-screen bg-black">
        <div className="container py-24 px-5 mx-auto">
          <h1 className="text-3xl sm:text-6xl font-serif">About</h1>
          <div className="flex py-24 px-5 mx-auto flex-wrap">
            <div className="md:w-1/2 flex justify-center lg:pr-4 md:pr-2">
              <img src="./img/icon.jpg" alt="" />
            </div>
            <div className="md:w-1/2 font-serif lg:pl-4 md:pl-2">
              <h2 className="text-3xl sm:text-6xl py-4">
                Based on knowledge and experience, we would like to accelerate
                all-around development from design to shielding.
              </h2>

              <p>
                Nice to meet you, I started working as a web engineer in 2022
                after working as a local government employee. I take pleasure in
                providing the skills and experiences I have learned to my users.
                Catch, I would like to actively take on new challenges.
                Passionate about learning new technologies and best practices, I
                aim to improve my problem-solving and communication skills and
                work collaboratively with my team to lead projects to success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default introduce;
