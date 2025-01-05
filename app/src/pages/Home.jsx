import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="flex flex-col justify-between items-center lg:grid lg:grid-cols-2 gap-8 py-12 px-12">
      <div className="content-text flex justify-center items-start flex-col w-full space-y-6">
        <div className="flex item-center space-x-2">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-500 to-sky-500 animate-text">
            Hello!!
          </h1>
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fb/512.webp"
            alt="wave-animate"
            className="h-10 md:h-12"
          />
        </div>

        <p className="animate-bounce text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white">
          Can i help you ?
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 dark:text-gray-100">
          I&apos;M{" "}
          <span className="text-blue-500 font-bold">THAWEESIN SANGPRASIT</span>
        </p>
        <div className="mt-4 font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500 bg-clip-text animate-text">
          <TypeAnimation
            sequence={[
              "WED DEVELOPMENT",
              1500,
              "MERN STACK",
              1500,
              "MENN STACK",
              1500,
              "PERM STACK",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.875em" }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="content-image flex justify-center items-center">
        <figure className="relative">
          <img
            src="\src\assets\undraw_developer-activity_dn7p.svg"
            alt="Developer Activity"
            className="max-w-xs md:max-w-md lg:max-w-lg rounded-full dark:shadow-none dark:animate-glow p-10"
          />
        </figure>
      </div>
    </section>
  );
};

export default Home;
