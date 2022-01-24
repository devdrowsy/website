import { Link } from 'remix';

export function Header() {
  return (
    <header>
      <Link to="/">
        <h1>@devdrowsy</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
