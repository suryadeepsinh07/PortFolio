const About = () => {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      name="About"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="text-xl mt-20">
          <p>
            Hello! I&apos;m Suryadeepsinh, currently a student at LaSalle
            College, where I&apos;m immersed in Information Technology
            Programmer Annalyst, an aspiring Full Stack MERN Developer. Though
            early in my journey, my passion for technology drives me. I&apos;ve
            immersed myself in learning MongoDB, Express.js, React, and Node.js
            through online courses and personal projects. My hands-on projects
            showcase my ability to create user-friendly interfaces and robust
            back-end solutions. I&apos;m eager to apply my skills in a
            real-world setting, contributing to a team that values innovation
            and growth. My goal is to develop impactful software solutions while
            continuously enhancing my knowledge. Let&apos;s connect and explore
            the possibilities together.
          </p>
          <br />
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            voluptas voluptatibus exercitationem amet labore ipsam consectetur
            voluptate deserunt fugiat accusantium tempora, iusto nemo omnis in
            eveniet. Ipsa enim ullam aut expedita amet nam quas, atque esse
            eaque laboriosam. Distinctio culpa blanditiis, saepe autem soluta
            facilis voluptates perspiciatis ea ducimus nisi!
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
