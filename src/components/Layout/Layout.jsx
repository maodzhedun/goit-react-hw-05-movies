import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container} from '../App.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
      <main>
        <Suspense fallback={<div>Loading page ...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
