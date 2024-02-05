import html from "../assets/html.png";
import Css from "../assets/css.png";
import JS from "../assets/javascript.png";
import React from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import Express from "../assets/express.png";
import MongoDb from "../assets/mongo.png";
import Rest from "../assets/rest.png";
import Git from "../assets/github.png";

const Skills = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JS,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: React,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailwindCss",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Node,
      title: "NodeJS",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: Express,
      title: "Express",
      style: "shadow-gray-300",
    },
    {
      id: 8,
      src: Rest,
      title: "Rest Api",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: MongoDb,
      title: "Mongo Db",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: Git,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-32 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  w-full h-full  text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Skills
          </p>
          <p className="py-6">These are the technology I&apos;ve worked with</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map((t) => (
            <div
              key={t.id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                t.style
              }
            >
              <img src={t.src} alt="" className="w-20 mx-auto" />
              <p>{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
