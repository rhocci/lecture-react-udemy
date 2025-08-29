import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import Empty from './Empty.jsx';
import AddProject from './AddProject.jsx';
import ShowProject from './ShowProject.jsx';

export default function Layout() {
  return (
    <div className="h-screen my-8 flex gap-8">
      <Sidebar />
      <MainContent>
        {/* <Empty /> */}
        {/* <AddProject /> */}
        <ShowProject />
      </MainContent>
    </div>
  );
}
