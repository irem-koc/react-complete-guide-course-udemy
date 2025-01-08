import { useState } from "react";
import LeftBar from "./components/LeftBar/LeftBar";
import NewProject from "./components/NewProject/NewProject";
import NoProject from "./components/NoProject/NoProject";
import SelectedProject from "./components/SelectedProject/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

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

  function handleSelectProjectId(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }
  console.log(projectsState);
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }
  function handleAddTask(task) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      tasks={projectsState.tasks}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
    />
  );
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
        onSelectProject={handleSelectProjectId}
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
