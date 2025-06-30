import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


const Layout = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </>
  );
};
export default Layout;