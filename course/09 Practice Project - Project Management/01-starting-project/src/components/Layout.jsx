import { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import Empty from './Empty.jsx';
import AddProject from './AddProject.jsx';
import ShowProject from './ShowProject.jsx';

export default function Layout() {
  const [currentView, setCurrentView] = useState('empty');

  function handleView(page) {
    if (!['empty', 'add', 'show'].includes(page)) return;
    setCurrentView(page);
  }

  return (
    <div className="h-screen my-8 flex gap-8">
      <Sidebar />
      <MainContent>
        {currentView === 'empty' && <Empty />}
        {currentView === 'add' && <AddProject />}
        {currentView === 'show' && <ShowProject />}
      </MainContent>
    </div>
  );
}
