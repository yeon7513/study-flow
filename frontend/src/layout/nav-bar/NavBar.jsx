import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar(classname) {
  return (
    <nav className={cn(styles.nav, classname)}>
      <ul>
        <li>
          <Link to="/introduce">About</Link>
        </li>
        <li>
          <Link to="/trend-keyword">인기 스터디</Link>
        </li>
        <li>
          <Link to="/pre-order">사전 등록</Link>
        </li>
        <li>
          <Link to="/qna">Q&A</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
