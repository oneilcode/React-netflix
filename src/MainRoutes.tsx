import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieDetailedPage } from './pages/MovieDetailedPage/MovieDetailedPage';

export const MainRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/movie/:id'  element={<MovieDetailedPage />} />
        </Routes>
   </Router>
  );
};
