import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar(classname) {
  return (
    <nav className={cn(styles.nav, classname)}>
      <ul>
        <li>
          <Link to="/introduce">소개</Link>
        </li>
        <li>
          <Link to="/pre-order">사전 예약</Link>
        </li>
        <li>
          <Link to="/qna">Q&A</Link>
        </li>
        <li>
          <Link to="/support">고객센터</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
