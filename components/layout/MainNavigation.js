import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Eventify</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>ALL EVENTS</Link>
          </li>
          <li>
            <Link href='/new-event'>ADD NEW EVENT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
