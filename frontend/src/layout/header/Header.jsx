import cn from 'classnames';
import Logo from '../logo/Logo';
import NavBar from '../nav-bar/NavBar';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={cn(styles.header, 'wrap')}>
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
