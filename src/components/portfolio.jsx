import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import parallax from "../assets/portfolio/reactParallax.jpg";
import smooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
const portfolio = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: parallax,
    },
    {
      id: 5,
      src: smooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800  w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((p) => (
            <div
              key={p.id}
              className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
            >
              <img src={p.src} alt="" />
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 m-4 duration-300 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 m-4 duration-300 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
