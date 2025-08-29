import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import { AddProject } from './AddProject.jsx';

export default function Layout() {
  return (
    <div className="h-screen my-8 flex gap-8">
      <Sidebar />
      <MainContent>
        <AddProject />
      </MainContent>
    </div>
  );
}
