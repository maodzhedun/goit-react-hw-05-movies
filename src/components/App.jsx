import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      
<nav>
  <NavLink to='/'>Home Page</NavLink>
  <NavLink to='/Movies'>Movies</NavLink>
  <NavLink to='/MovieDetails'>MovieDetails</NavLink>
</nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/MovieDetails" element={<MovieDetails />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
