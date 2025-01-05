import { useParams } from "react-router";
import projectsData from "../data/projects.json";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock } from "@fortawesome/free-regular-svg-icons";
import { faTag, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import CarouselHorizon from "../components/CarouselHorizon";
import CarouselVertical from "../components/CarouselVertical";

const SingleProject = () => {
  const { id, title } = useParams();
  const project = projectsData.projects.find(
    (item) => item.id === parseInt(id) && item.name === title
  );

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-foreground">
          Project not found
        </h1>
      </div>
    );
  }

  return (
    <section className="container-single-project px-12 space-y-8">
      <div className="container-title space-y-4">
        <h1 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-500 to-sky-500 animate-text">
          {project.name}
        </h1>
        <div className="flex flex-wrap gap-3 text-sm text-foreground/80">
          <span>
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            {project.date}
          </span>
          <span>
            <FontAwesomeIcon icon={faTag} className="mx-2" />
            {project.category}
          </span>
          <span>
            <FontAwesomeIcon icon={faClipboardCheck} className="mx-2" />
            {project.status}
          </span>
        </div>
      </div>
      <div className="hidden lg:block">
        <CarouselHorizon images={project.imgUrl} />
      </div>
      <div className="w-full lg:hidden">
        <CarouselVertical images={project.imgUrl} />
      </div>

      <div className="container-content flex flex-col lg:flex-row gap-8">
        <div className="container-article-1 lg:w-1/3 space-y-6">
          <div className="container-customer p-4 space-y-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <h2 className="text-xl font-bold text-foreground">Customer</h2>
            <div className="space-y-2 text-foreground/80">
              <p>
                <span className="font-medium">Name:</span>
                {project.customer.name}
              </p>
              <p>
                <span className="font-medium">Service:</span>
                {project.customer.service}
              </p>
              <p>
                <span className="font-medium">Website:</span>
                <a
                  href={project.customer.website}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.customer.website}
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span>
                {project.customer.phone}
              </p>
            </div>
          </div>

          <div className="container-solution space-y-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <h2 className="text-xl font-bold text-foreground">Solution</h2>
            <p className="text-foreground/80">{project.challenge.solution}</p>
          </div>

          <div className="container-tools space-y-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <h2 className="text-xl font-bold text-foreground">Tools</h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="container-article-2 lg:w-2/3 space-y-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <h2 className="text-xl font-bold text-foreground">Description</h2>
          <p className="text-foreground/80 leading-relaxed">
            {project.challenge.description}
          </p>
        </div>
      </div>

      <div className="container-related-projects space-y-6 mt-12">
        <h2 className="text-2xl font-bold text-foreground">Related Projects</h2>
        <div className="container-card hidden lg:grid lg:grid-cols-3 gap-6">
          {projectsData.projects
            .filter((item) => item.id !== project.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                img={item.imgUrl}
                title={item.name}
                categories={item.category}
              />
            ))}
        </div>
        <div className="container-card hidden md:grid md:grid-cols-2 lg:hidden gap-6">
          {projectsData.projects
            .filter((item) => item.id !== project.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                img={item.imgUrl}
                title={item.name}
                categories={item.category}
              />
            ))}
        </div>
        <div className="container-card grid grid-cols-1 md:hidden gap-6">
          {projectsData.projects
            .filter((item) => item.id !== project.id)
            .sort(()=> 0.5 - Math.random()) 
            .slice(0, 3)
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                img={item.imgUrl}
                title={item.name}
                categories={item.category}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
