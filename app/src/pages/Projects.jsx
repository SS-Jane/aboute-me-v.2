import DropdownFilter from "../components/DropdownFilter";

const Projects = () => {
  const handleFilterSelection = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

  const options = ["option1", "option2", "option3"];

  return (
    <section>
      <div>
        <h1>Project</h1>
      </div>
      <div>
        <p>Search projects by title or filler by category</p>
        <div>
          <button>
            <i>Glass</i>
          </button>
          <input type="text" placeholder="Search Projects" />
          <div className="container-dropdown">
            <DropdownFilter
              label="Filter by Category"
              options={["option1", "option2", "option3"]}
              onSelect={handleFilterSelection}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
