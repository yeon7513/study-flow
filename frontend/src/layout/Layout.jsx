import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
