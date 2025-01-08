import { useState } from "react";
import LeftBar from "./components/LeftBar/LeftBar";
import NewProject from "./components/NewProject/NewProject";
import NoProject from "./components/NoProject/NoProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const handleStartAddProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  function handleAddNewProject(projectData) {
    setProjectsState((prevState) => {
      const newData = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newData],
      };
    });
  }
  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancel={handleCancel}
        onAddNewProject={handleAddNewProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen flex gap-8">
      <LeftBar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
