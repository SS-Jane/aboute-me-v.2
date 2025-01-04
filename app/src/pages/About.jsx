import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faSquareJs,
  faHtml5,
  faReact,
  faGit,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { SiPostman, SiPostgresql, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";

const About = () => {

  return (
    <section >
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-500 to-sky-500 animate-text">About me</h1>
      </div>
      <article className="container-about flex flex-col md:flex-row items-center gap-6">
        <figure className="w-full md:w-1/3">
          <img
            src="/src/assets/profile.webp"
            className="rounded-lg shadow-lg dark:shadow-neon"
            alt="A cartoon-style illustration of a dog working intensely at a computer, with a dramatic fiery background to symbolize urgency. The dog appears focused"
          />
        </figure>
        <div className="container-text md:w-2/3">
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          <span className="text-blue-500 font-bold">Hi, I'm Jane. </span>
          <br />
          Previously an Electronics and Computer Systems engineer,
          <br />
          I've recently embarked on a new journey as a web developer. 
          <br />
          My background in hardware has given me a unique perspective on the
          underlying technologies that power the web. 
          <br />
          I'm excited to apply my knowledge and continuously learn new skills to create dynamic and
          engaging web experiences.
        </p>
        </div>
        
      </article>

      <div className="container-skills mt-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6 text-foreground">My Skills</h2>
        <div className="container-icon-skills w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center ">
          <div className="icon-wrap flex justify-center items-center">
            <FontAwesomeIcon
              icon={faNode}
              size="3x"
              className="hover:text-green-500 transition-colors duration-300"
              aria-label="Node.js"
            />
          </div>

          <div className="icon-wrap flex justify-center items-center">
            {" "}
            <FontAwesomeIcon
              icon={faSquareJs}
              size="3x"
              className="hover:text-yellow-400 transition-colors duration-300"
              aria-label="JavaScript"
            />
          </div>

          <div className="icon-wrap flex justify-center items-center">
            {" "}
            <FontAwesomeIcon
              icon={faHtml5}
              size="3x"
              className="hover:text-orange-500 transition-colors duration-300"
              aria-label="HTML5"
            />
          </div>

          <div className="icon-wrap flex justify-center items-center">
            <FontAwesomeIcon
              icon={faReact}
              size="3x"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="React"
            />
          </div>

          <div className="icon-wrap flex justify-center items-center">
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="3x"
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="CSS3"
            />
          </div>

          <div className="icon-wrap flex justify-center items-center">
            <SiMongodb
              size="3rem"
              className="hover:text-green-600 transition-colors duration-300"
              aria-label="Mongodb"
            />
          </div>

          <div className="icon-wrap flex justify-center items-center">
            <SiPostgresql
              size="3rem"
              className="hover:text-blue-600 transition-colors duration-300"
              aria-label="PostgreSQL"
            />
          </div>

          <div className="icon-wrap flex justify-center items-center">
            <RiNextjsFill
              size="3rem"
              className="hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
              aria-label="Next.js"
            />
          </div>
        </div>
      </div>
      <div className="container-tools mt-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6 text-foreground">My Tools</h2>
        <div className="container-icon-tools w-full max-w-4xl grid grid-cols-3 sm:grid-cols-3 gap-6 place-items-center">
          <div className="icon-wrap flex justify-center items-center">
            <FontAwesomeIcon
              aria-label="Git"
              icon={faGit}
              size="3x"
              className="hover:text-orange-400 transition-colors duration-300"
            />
          </div>
          <div className="icon-wrap flex justify-center items-center">
            <SiPostman
              aria-label="Postman"
              size="3rem"
              className="hover:text-orange-500 transition-colors duration-300"
            />
          </div>

          <div className="icon-wrap flex justify-center items-center">
            <VscVscode
              size="3rem"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="VS code"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
