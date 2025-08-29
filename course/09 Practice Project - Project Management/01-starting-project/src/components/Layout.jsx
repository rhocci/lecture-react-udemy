import { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import Empty from './Empty.jsx';
import AddProject from './AddProject.jsx';
import ShowProject from './ShowProject.jsx';

export default function Layout() {
  const [currentView, setCurrentView] = useState('empty');

  function handleChangeView(page) {
    if (!['empty', 'add', 'show'].includes(page)) return;
    setCurrentView(page);
  }

  return (
    <div className="h-screen my-8 flex gap-8">
      <Sidebar handleChangeView={handleChangeView} />
      <MainContent>
        {currentView === 'empty' && (
          <Empty handleChangeView={handleChangeView} />
        )}
        {currentView === 'add' && (
          <AddProject handleChangeView={handleChangeView} />
        )}
        {currentView === 'show' && (
          <ShowProject handleChangeView={handleChangeView} />
        )}
      </MainContent>
    </div>
  );
}
