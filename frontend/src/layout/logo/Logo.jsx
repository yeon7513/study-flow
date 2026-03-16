import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

function Logo(classname) {
  return (
    <h1 className={cn(styles.logo, classname)}>
      <Link to="/">STUDY FLOW</Link>
    </h1>
  );
}

export default Logo;
