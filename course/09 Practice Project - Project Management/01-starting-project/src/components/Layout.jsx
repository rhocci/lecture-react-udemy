import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';

export default function Layout() {
  return (
    <div className="h-screen my-8 flex gap-8">
      <Sidebar />
      <MainContent></MainContent>
    </div>
  );
}
