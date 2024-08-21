import React from 'react';
import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import AddCreator from './pages/AddCreator.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/list', element: <ShowCreators /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
    { path: '/add', element: <AddCreator /> },
  ]);

  return routes;
};

export default App; 