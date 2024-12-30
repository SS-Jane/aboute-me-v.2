import { useState } from "react";
import Card from "../components/Card";
import DropdownFilter from "../components/DropdownFilter";
import categories from "../data/categories.json";
import projectsData from "../data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterSelection = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterProjects = projectsData.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearchQuery = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearchQuery;
  });


  return (
    <section className="p-6 min-h-screen">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-500 to-sky-500 animate-text">Projects</h1>
      </div>
      <div className="mb-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Search projects by title or filler by category
        </p>
      </div>
      <div className="container-search flex flex-wrap items-center gap-4 mb-6 justify-between">
        <div className="relative flex items-center w-full sm:w-auto">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            shake
            className="absolute left-3 text-gray-600 dark:text-gray-400"
          />
          <input
            type="text"
            placeholder="Search Projects"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full sm:w-80 pl-10 pr-2 py-2 border text-gray-600 border-gray-300 rounded-md bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
          />
        </div>

        <div className="container-dropdown w-full sm:w-auto">
          <DropdownFilter
            label="Filter by Category"
            options={categories.category}
            onSelect={handleFilterSelection}
          />
        </div>
      </div>

      <div className="container-card grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filterProjects.length > 0 ? (
          filterProjects.map((project) => {
            return (
              <Card
                key={project.id}
                img={project.imgUrl}
                title={project.name}
                categories={project.category}
              />
            );
          })
        ) : (
          <p>No projects found. please try another search query or category</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
