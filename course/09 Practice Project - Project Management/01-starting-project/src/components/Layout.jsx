import { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import Empty from './Empty.jsx';
import AddProject from './AddProject.jsx';
import ShowProject from './ShowProject.jsx';

export default function Layout() {
  const [currentView, setCurrentView] = useState('empty');
  const [projects, setProjects] = useState([
    {
      id: '213321',
      title: 'Project',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae laudantium vitae quo molestiae nemo velit excepturi deserunt voluptates, quaerat ratione porro quibusdam molestias perferendis dignissimos suscipit accusantium! Veritatis',
      dueDate: '',
      tasks: [],
    },
  ]);

  function handleChangeView(page) {
    if (!['empty', 'add', 'show'].includes(page)) return;
    setCurrentView(page);
  }

  function handleAddProject({ title, description, dueDate, tasks = null }) {
    setProjects((prevProjects) => [
      ...prevProjects,
      { id: Date.now(), title, description, dueDate, tasks },
    ]);
  }

  function handleAddTask(id, task) {
    if (!task) return;

    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects.map((project) => {
        if (project.id === id) project.tasks.push(task);
      });
      return updatedProjects;
    });
  }

  return (
    <div className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} handleChangeView={handleChangeView} />
      <MainContent>
        {currentView === 'empty' && (
          <Empty handleChangeView={handleChangeView} />
        )}
        {currentView === 'add' && (
          <AddProject
            handleChangeView={handleChangeView}
            handleAddProject={handleAddProject}
          />
        )}
        {currentView === 'show' && (
          <ShowProject {...projects[0]} handleAddTask={handleAddTask} />
        )}
      </MainContent>
    </div>
  );
}
