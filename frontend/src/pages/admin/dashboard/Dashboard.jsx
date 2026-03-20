import { Outlet } from 'react-router-dom';
import SideBar from '../../../layout/side-bar/SideBar';
import styles from './Dashboard.module.scss';

const sideMenu = [
  {
    path: '/admin',
    name: '현황 및 통계',
  },
  {
    path: '/admin/user',
    name: '회원관리',
  },
  {
    path: '/admin/keyword',
    name: '키워드관리',
  },
  {
    path: '/admin/board',
    name: '게시판관리',
  },
  {
    path: '/admin/blacklist',
    name: '블랙리스트관리',
  },
];

function Dashboard() {
  return (
    <div>
      <SideBar menu={sideMenu} />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
