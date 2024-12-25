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
    console.log(matchesCategory);
    console.log(matchesSearchQuery);

    return matchesCategory && matchesSearchQuery;
  });

  console.log("All project", filterProjects);

  return (
    <section className="p-6 min-h-screen">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
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
            className="absolute left-3 text-gray-400 dark:text-gray-400"
          />
          <input
            type="text"
            placeholder="Search Projects"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full sm:w-80 pl-10 pr-2 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

      <div className="container-card grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
          <p className="text-center text-gray-600 dark:text-gray-400">No projects found. please try another search query or category</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
