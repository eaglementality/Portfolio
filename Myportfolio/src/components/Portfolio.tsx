import pokmon from "../assets/Portfolio_Img/Pokmonimage.png";
import todoList from "../assets/Portfolio_Img/todoListimage.png";
// import apod from "../assets/portfolio/apod.jpg";
// import iptracker from "../assets/portfolio/iptracker.jpg";
// import nftportal from "../assets/portfolio/nftportal.jpg";
// import webpostman from "../assets/portfolio/webpostman.jpg";
// import waveportal from "../assets/portfolio/waveportal.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pokmon,
      link: "https://poke-book-bice.vercel.app",
      repo: "https://github.com/eaglementality/Poke-Book/",
    },
    {
      id: 2,
      src: todoList,
      link: "https://todo-list-app-8l1u.vercel.app",
      repo: "https://github.com/eaglementality/TodoListApp",
    },
    // {
    //   id: 3,
    //   text: "View more",
    // },
  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-24 md:mt-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
          <div className="w-full flex justify-center items-center shadow-gray-600 shadow-md rounded-lg">
            <a
              className="link-underline link-underline-black text-md font-semibold  text-gray-300"
              href="https://github.com/eaglementality"
            >{`View more on github`}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
