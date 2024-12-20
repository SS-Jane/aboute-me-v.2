import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="flex flex-col justify-between items-center lg:flex-row">
      <div className="content-text">
        <p className="animate-bounce">Hello!! Can i help your ?</p>
        <p>I'm Thaweesin Sangprait</p>
        <TypeAnimation
          sequence={[
            "I AM produce food for Mice",
            1000,
            "I AM produce food for Hamsters",
            1000,
            "I AM produce food for Guinea Pigs",
            1000,
            "I AM produce food for Chinchillas",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <div className="content-image">
        <figure>
          <img
            src="\src\assets\undraw_developer-activity_dn7p.svg"
            alt="home-image"
          />
        </figure>
      </div>
    </section>
  );
};

export default Home;
